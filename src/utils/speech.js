/**
 * Web Speech API and MediaRecorder utilities for native Text-to-Speech (TTS),
 * Speech-to-Text (STT) Recognition, and Direct Audio Capture in Lingora.
 */

/**
 * Checks if the user is running Brave Browser, which restricts Google's cloud
 * speech recognition services by default.
 */
export async function isBraveBrowser() {
  if (typeof navigator === 'undefined') return false;
  if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
    return await navigator.brave.isBrave();
  }
  return false;
}

/**
 * Cleans markdown symbols, brackets, and meta-formatting so Text-to-Speech
 * sounds natural and fluent without reading asterisks, hashtags, or tags aloud.
 */
export function stripMarkdownForSpeech(rawText) {
  if (!rawText) return '';

  let clean = rawText
    // Remove markdown code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove headers (#, ##, ###)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold and italics (**, *, __, _)
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove blockquotes (> )
    .replace(/^>\s+/gm, '')
    // Remove bullet points (* , - , + )
    .replace(/^[\*\-+]\s+/gm, '')
    // Remove numbered list markers (1. , 2. )
    .replace(/^\d+\.\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove bracketed pronunciation aids like [Oo eh la gar] so TTS doesn't stumble
    .replace(/\[[^\]]+\]/g, '')
    // Clean redundant spacing
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .trim();

  return clean;
}

/**
 * Converts a Blob to a Base64 string (stripping the data URI scheme for direct API payloads).
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        const base64 = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
        resolve(base64);
      } else {
        reject(new Error('Failed to convert audio blob to base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Direct Audio Recorder using standard MediaRecorder + getUserMedia.
 * Works reliably in Brave, Chrome, Safari, Edge, and Firefox.
 * Also measures real-time volume level (0-100) for animated audio waves.
 */
export class AudioRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.stream = null;
    this.audioContext = null;
    this.analyser = null;
    this.animFrameId = null;
    this.isRecording = false;
  }

  async start(onVolumeChange) {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      throw new Error('Microphone access (getUserMedia) is not supported in this browser.');
    }

    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });

    // Real-time audio volume analysis for visualizer
    if (onVolumeChange && (typeof window !== 'undefined') && (window.AudioContext || window.webkitAudioContext)) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioCtx();
        const source = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);

        const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        const sampleVolume = () => {
          if (!this.analyser || !this.isRecording) return;
          this.analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            sum += dataArray[i];
          }
          const avg = sum / dataArray.length;
          const level = Math.min(100, Math.round((avg / 128) * 100));
          onVolumeChange(level);
          this.animFrameId = requestAnimationFrame(sampleVolume);
        };
        sampleVolume();
      } catch (e) {
        console.warn('Audio analyser setup notice:', e);
      }
    }

    // Determine the optimal audio format supported by this browser
    let mimeType = 'audio/webm';
    if (typeof MediaRecorder !== 'undefined') {
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/webm')) {
        mimeType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
      } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
        mimeType = 'audio/ogg';
      }
    }

    this.audioChunks = [];
    this.mediaRecorder = new MediaRecorder(this.stream, { mimeType });

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.audioChunks.push(event.data);
      }
    };

    this.isRecording = true;
    this.mediaRecorder.start(250);
    return mimeType;
  }

  async stop() {
    this.isRecording = false;

    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.audioContext) {
      try {
        this.audioContext.close();
      } catch (_) {}
      this.audioContext = null;
    }

    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        this.cleanup();
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = async () => {
        const mimeType = this.mediaRecorder?.mimeType || 'audio/webm';
        const blob = new Blob(this.audioChunks, { type: mimeType });
        this.cleanup();

        if (blob.size === 0) {
          resolve(null);
          return;
        }

        try {
          const base64 = await blobToBase64(blob);
          resolve({
            blob,
            base64,
            mimeType: mimeType.split(';')[0], // clean mimeType for Gemini
            size: blob.size,
          });
        } catch (err) {
          console.error('Audio encoding failed:', err);
          resolve(null);
        }
      };

      try {
        this.mediaRecorder.stop();
      } catch (_) {
        this.cleanup();
        resolve(null);
      }
    });
  }

  cleanup() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    this.isRecording = false;
  }
}

/**
 * Text-to-Speech speaking function with voice caching and markdown stripping.
 */
export function speakText(text, langCode = 'fr-FR', rate = 0.9) {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve();
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending utterance

    const cleanContent = stripMarkdownForSpeech(text);
    if (!cleanContent) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanContent);
    utterance.lang = langCode;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const assignVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      const langPrefix = langCode.slice(0, 2).toLowerCase();
      // Look for exact match first, then language prefix
      const match =
        voices.find((v) => v.lang.toLowerCase() === langCode.toLowerCase()) ||
        voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));

      if (match) {
        utterance.voice = match;
      }
    };

    assignVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = assignVoice;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      console.warn('Speech synthesis notice:', e);
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
}

/**
 * Browser SpeechRecognition helper with detailed error reporting and stop handle.
 */
export function startSpeechRecognition(langCode, onResult, onError, onEnd) {
  if (typeof window === 'undefined') {
    onError({ error: 'not-supported', message: 'Speech recognition is not available outside browser environment.' });
    return { stop: () => {}, isSupported: false };
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    onError({
      error: 'not-supported',
      message: 'Speech recognition is not supported in this browser. You can type or use direct voice dictation!',
    });
    return { stop: () => {}, isSupported: false };
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = langCode;
    recognition.maxAlternatives = 1;

    let stoppedManually = false;

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      const combined = (finalTranscript || interimTranscript).trim();
      if (combined) {
        onResult(combined, Boolean(finalTranscript));
      }
    };

    recognition.onerror = (event) => {
      if (stoppedManually) return;
      console.warn('SpeechRecognition status:', event.error);
      let userFriendly = `Speech status: ${event.error}`;

      if (event.error === 'not-allowed') {
        userFriendly = 'Microphone permission was denied. Please allow microphone permissions in your browser bar.';
      } else if (event.error === 'no-speech') {
        userFriendly = 'No speech detected. Speak clearly into your microphone.';
      } else if (event.error === 'network' || event.error === 'service-not-allowed') {
        userFriendly = 'Speech recognition service blocked by browser privacy settings. Switching to Direct Audio mode!';
      }

      onError({ error: event.error, message: userFriendly });
    };

    recognition.onend = () => {
      if (!stoppedManually) {
        onEnd();
      }
    };

    recognition.start();

    return {
      stop: () => {
        stoppedManually = true;
        try {
          recognition.stop();
        } catch (_) {}
      },
      isSupported: true,
    };
  } catch (err) {
    onError({ error: 'init-failed', message: err.message || 'Could not start microphone' });
    return { stop: () => {}, isSupported: false };
  }
}

/**
 * Calculates string similarity percentage for pronunciation scoring.
 */
export function calculateAccuracy(spoken, target) {
  const cleanSpoken = (spoken || '').toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, '').trim();
  const cleanTarget = (target || '').toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, '').trim();

  if (!cleanSpoken || !cleanTarget) return 0;
  if (cleanSpoken === cleanTarget) return 100;

  const spokenWords = cleanSpoken.split(/\s+/);
  const targetWords = cleanTarget.split(/\s+/);

  let matches = 0;
  for (const word of targetWords) {
    if (spokenWords.includes(word)) {
      matches++;
    }
  }

  const wordRatio = matches / targetWords.length;
  return Math.min(100, Math.round(wordRatio * 100));
}

/**
 * Web Speech API utilities for native Text-to-Speech (TTS)
 * and Speech-to-Text (STT) Recognition in Lingora.
 */

export function speakText(text: string, langCode: string = 'fr-FR', rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      resolve();
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick best matching voice if available
    const voices = window.speechSynthesis.getVoices();
    const voiceMatch = voices.find((v) => v.lang.startsWith(langCode.slice(0, 2)));
    if (voiceMatch) {
      utterance.voice = voiceMatch;
    }

    utterance.onend = () => resolve();
    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      resolve();
    };

    window.speechSynthesis.speak(utterance);
  });
}

export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

export function startSpeechRecognition(
  langCode: string,
  onResult: (transcript: string) => void,
  onError: (errorMsg: string) => void,
  onEnd: () => void
): { stop: () => void; isSupported: boolean } {
  const SpeechRecognition =
    (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    onError('Speech recognition is not supported in this browser. You can type your response instead!');
    return { stop: () => {}, isSupported: false };
  }

  try {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = langCode;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      onResult(transcript);
    };

    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        onError('Microphone access was denied. Please allow microphone permissions or use keyboard mode.');
      } else if (event.error === 'no-speech') {
        onError('No speech was detected. Please try speaking again closer to your microphone.');
      } else {
        onError(`Speech error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      onEnd();
    };

    recognition.start();

    return {
      stop: () => {
        try {
          recognition.stop();
        } catch (_) {}
      },
      isSupported: true,
    };
  } catch (err: any) {
    onError(err.message || 'Could not start microphone');
    return { stop: () => {}, isSupported: false };
  }
}

/**
 * Calculates string similarity percentage (Levenshtein / normalized token match)
 * to evaluate pronunciation accuracy.
 */
export function calculateAccuracy(spoken: string, target: string): number {
  const cleanSpoken = spoken.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, '').trim();
  const cleanTarget = target.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"'«»]/g, '').trim();

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
  // If at least 70% of target words match, give high score
  return Math.min(100, Math.round(wordRatio * 100));
}

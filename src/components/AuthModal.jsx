import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { LingoraLogo } from './LingoraLogo.jsx';
import {
  X,
  Mail,
  Lock,
  User,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Shield,
  Zap,
} from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }) => {
  const { signInWithGoogle, signInWithDemo, signUpWithEmail, loginWithEmail, resetPassword } = useAuth();

  const [mode, setMode] = useState('signup'); // 'signup' | 'signin' | 'forgot'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [gisReady, setGisReady] = useState(false);

  const googleBtnRef = useRef(null);
  const clientId =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_CLIENT_ID) ||
    '387268916354-kqrkklqgaai97o24rap4kp34cpckr9vp.apps.googleusercontent.com';

  // Initialize official Google Identity Services
  useEffect(() => {
    if (!isOpen) return;

    const setupGoogle = () => {
      if (clientId && window.google?.accounts?.id) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: async (response) => {
              if (response.credential) {
                setLoading(true);
                try {
                  await signInWithGoogle({ credential: response.credential });
                  onClose();
                } catch (err) {
                  setError(err.message || 'Google authentication failed');
                } finally {
                  setLoading(false);
                }
              }
            },
          });

          if (googleBtnRef.current) {
            googleBtnRef.current.innerHTML = '';
            window.google.accounts.id.renderButton(googleBtnRef.current, {
              theme: 'outline',
              size: 'large',
              text: 'continue_with',
              shape: 'pill',
              width: 320,
            });
            setGisReady(true);
          }
          return true;
        } catch (err) {
          console.warn('Google Identity Services initialization:', err);
        }
      }
      return false;
    };

    if (!setupGoogle()) {
      const interval = setInterval(() => {
        if (setupGoogle()) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isOpen, clientId]);

  if (!isOpen) return null;

  // Real Google OAuth 2.0 Popup Trigger
  const handleGooglePopup = () => {
    setError(null);

    // If OAuth2 token client is available, launch the official Google popup window
    if (window.google?.accounts?.oauth2) {
      try {
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'email profile openid',
          callback: async (tokenResponse) => {
            if (tokenResponse.error) {
              setError(`Google Sign-In was cancelled or failed (${tokenResponse.error}).`);
              return;
            }
            if (tokenResponse.access_token) {
              setLoading(true);
              try {
                const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                  headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                });
                const userData = await res.json();
                if (!userData.email) {
                  throw new Error('Unable to retrieve email from Google account.');
                }
                await signInWithGoogle({
                  email: userData.email,
                  displayName: userData.name || userData.given_name || userData.email.split('@')[0],
                  photoURL: userData.picture,
                  googleId: userData.sub,
                });
                onClose();
              } catch (err) {
                setError(err.message || 'Failed to authenticate Google user');
              } finally {
                setLoading(false);
              }
            }
          },
        });

        // Opens the genuine Google login popup
        client.requestAccessToken();
        return;
      } catch (err) {
        console.warn('OAuth2 popup error:', err);
      }
    }

    // Fallback to Google prompt if available
    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt();
      return;
    }

    setError('Google Sign-In is loading. Please click again in a moment.');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!name.trim()) throw new Error('Please enter your full name');
        if (password.length < 6) throw new Error('Password must be at least 6 characters');
        await signUpWithEmail(email.trim(), password, name.trim());
        onClose();
      } else if (mode === 'signin') {
        await loginWithEmail(email.trim(), password);
        onClose();
      } else if (mode === 'forgot') {
        await resetPassword(email.trim());
        setSuccessMsg('Password reset email sent! Check your inbox.');
      }
    } catch (err) {
      setError(err.message || 'Authentication error. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleInstantGuest = () => {
    signInWithDemo('user');
    onClose();
  };

  const handleAdminDemo = () => {
    signInWithDemo('admin');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-150">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-5">
          <div className="flex justify-center mb-3">
            <LingoraLogo size="md" />
          </div>
          <h2 className="text-2xl font-black text-[#20243A]">
            {mode === 'signup'
              ? 'Create Your Account'
              : mode === 'signin'
              ? 'Welcome Back'
              : 'Reset Your Password'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {mode === 'signup'
              ? 'Join learners worldwide and save your progress across all 10 languages'
              : mode === 'signin'
              ? 'Sign in to access your personal dashboard, XP, and streak'
              : 'Enter your email to receive recovery instructions'}
          </p>
        </div>

        {/* Mode Selector Tabs (Sign Up vs Sign In) */}
        {mode !== 'forgot' && (
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl mb-4">
            <button
              type="button"
              onClick={() => { setMode('signup'); setError(null); }}
              className={`py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                mode === 'signup'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              New Account
            </button>
            <button
              type="button"
              onClick={() => { setMode('signin'); setError(null); }}
              className={`py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                mode === 'signin'
                  ? 'bg-white text-[#1E3A8A] shadow-xs'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Sign In
            </button>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Google Authentication Section (ONLY Official Google Popup / Button) */}
        {mode !== 'forgot' && (
          <div className="space-y-2 mb-4">
            {gisReady ? (
              <div className="flex justify-center w-full min-h-[44px]">
                <div ref={googleBtnRef} />
              </div>
            ) : (
              <button
                type="button"
                onClick={handleGooglePopup}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-xs sm:text-sm font-bold text-slate-700 shadow-xs transition active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>
            )}

            <div className="flex items-center gap-2 pt-1">
              <div className="flex-1 border-t border-slate-200" />
              <span className="text-[10px] uppercase font-bold text-slate-400">or with email</span>
              <div className="flex-1 border-t border-slate-200" />
            </div>
          </div>
        )}

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <div>
              <label className="text-[11px] font-bold text-slate-500 uppercase">Your Name</label>
              <div className="relative mt-1">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Dupont"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase">Email Address</label>
            <div className="relative mt-1">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div>
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-bold text-slate-500 uppercase">Password</label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[10px] text-[#1E3A8A] font-bold hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative mt-1">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#1E3A8A] text-xs font-bold text-[#20243A]"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-2xl bg-[#1E3A8A] hover:bg-[#1e40af] text-white font-extrabold text-sm shadow-md shadow-blue-900/10 transition transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>
              {mode === 'signup' ? 'Create Free Account' : mode === 'signin' ? 'Sign In' : 'Send Reset Link'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* 1-Click Fast Passes */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <button
            type="button"
            onClick={handleInstantGuest}
            className="flex items-center gap-1 font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Guest Demo</span>
          </button>

          <button
            type="button"
            onClick={handleAdminDemo}
            className="flex items-center gap-1 font-bold text-[#1E3A8A] hover:underline cursor-pointer"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Founder Pass</span>
          </button>
        </div>

        {/* Footer Toggle */}
        <div className="mt-3 text-center text-xs text-slate-500">
          {mode === 'signup' ? (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => setMode('signin')}
                className="font-bold text-[#1E3A8A] hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : mode === 'signin' ? (
            <p>
              Don't have an account yet?{' '}
              <button
                onClick={() => setMode('signup')}
                className="font-bold text-[#1E3A8A] hover:underline cursor-pointer"
              >
                Create Account
              </button>
            </p>
          ) : (
            <p>
              Remembered your password?{' '}
              <button
                onClick={() => setMode('signin')}
                className="font-bold text-[#1E3A8A] hover:underline cursor-pointer"
              >
                Back to Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthModal;

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function GeoQuestPasswordReset() {
  const [searchParams] = useSearchParams();
  const [showFallback, setShowFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');
  const expire = searchParams.get('expire');

  useEffect(() => {
    if (!userId || !secret || !expire) {
      setError('Invalid reset link. Please request a new password reset.');
      setIsLoading(false);
      return;
    }

    // Construct deep link
    const deepLink = `geoquest://reset-password?userId=${encodeURIComponent(userId)}&secret=${encodeURIComponent(secret)}&expire=${encodeURIComponent(expire)}`;
    
    console.log('Deep link:', deepLink);

    // Try to open the app
    const tryOpenApp = () => {
      try {
        window.location.href = deepLink;
        
        // For iOS Safari, we might need to use window.open
        setTimeout(() => {
          window.open(deepLink, '_self');
        }, 100);
      } catch (error) {
        console.error('Error opening app:', error);
        setShowFallback(true);
        setIsLoading(false);
      }
    };

    tryOpenApp();

    // Show fallback after 3 seconds if app didn't open
    const fallbackTimer = setTimeout(() => {
      setShowFallback(true);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, [userId, secret, expire]);

  const handleRetry = () => {
    setShowFallback(false);
    setIsLoading(true);
    
    const deepLink = `geoquest://reset-password?userId=${encodeURIComponent(userId!)}&secret=${encodeURIComponent(secret!)}&expire=${encodeURIComponent(expire!)}`;
    
    setTimeout(() => {
      try {
        window.location.href = deepLink;
        setTimeout(() => {
          window.open(deepLink, '_self');
        }, 100);
      } catch (error) {
        console.error('Error opening app:', error);
      }
      
      setTimeout(() => {
        setShowFallback(true);
        setIsLoading(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 bg-gradient-to-br from-[#1e1b4b] via-[#3730a3] to-[#4f46e5] text-white">
      <div className="max-w-md w-full px-8 py-10 bg-white/10 rounded-2xl backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-center">
        <div className="text-6xl mb-3">🌍</div>
        <h1 className="text-2xl mb-3">GeoQuest</h1>
        <p className="text-base opacity-90 mb-5">
          {error ? 'Reset Link Error' : 'Opening password reset...'}
        </p>
        
        {error && (
          <div className="my-5 px-4 py-4 rounded-lg bg-red-500/20 border border-red-500/50">
            <strong>{error}</strong>
          </div>
        )}

        {isLoading && !error && (
          <div className="my-5 px-4 py-4 rounded-lg bg-blue-500/20 border border-blue-500/50">
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
              <span>Redirecting to GeoQuest app...</span>
            </div>
          </div>
        )}

        {showFallback && !error && (
          <div className="my-5 px-4 py-4 rounded-lg bg-red-500/20 border border-red-500/50">
            <strong>App not found?</strong>
            <br />
            <span className="text-sm">
              Please make sure the GeoQuest app is installed on your device.
            </span>
            <button
              onClick={handleRetry}
              className="inline-block mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

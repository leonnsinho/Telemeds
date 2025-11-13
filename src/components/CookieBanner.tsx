import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Mostra o banner após 1 segundo
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Ícone e Texto */}
            <div className="flex items-start space-x-3 flex-1">
              <div className="flex-shrink-0">
                <Cookie className="w-5 h-5 text-blue-600 mt-0.5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Usamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{' '}
                  <Link 
                    to="/politicas-cookies" 
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                  >
                    Política de Cookies
                  </Link>
                  {' '}e{' '}
                  <Link 
                    to="/politicas-privacidade" 
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                  >
                    Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Botões */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <button
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
              >
                Recusar
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-medium rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Aceitar
              </button>
              <button
                onClick={declineCookies}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

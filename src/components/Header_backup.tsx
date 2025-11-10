import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ChevronDown } from 'lucide-react';
import LogoNavbar from '../assets/images/logo navbar.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompactMenuOpen, setIsCompactMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Psiquiatria', path: '/psiquiatria' },
    { name: 'Psicologia', path: '/psico' },
    { name: 'Endocrinologia', path: '/endo' },
  ];

  const currentPage = navigationItems.find(item => item.path === location.pathname)?.name || 'Menu';

  return (
    <>
      {/* Navbar Flutuante */}
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'w-auto' 
          : 'w-[95%] max-w-6xl'
      }`}>
        <div className={`transition-all duration-700 ease-out rounded-2xl backdrop-blur-md border shadow-lg ${
          isScrolled 
            ? 'bg-white/95 border-gray-200/50 px-4 py-2' 
            : 'bg-white/90 border-white/20 px-6 py-4'
        }`}>
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center group">
              <img 
                src={LogoNavbar} 
                alt="Luximedi" 
                className={`transition-all duration-500 ease-out group-hover:scale-110 object-contain ${
                  isScrolled ? 'h-9' : 'h-11'
                }`}
              />
            </Link>

            {/* Desktop Navigation - Expandido quando não há scroll */}
            <nav className={`hidden md:flex items-center transition-all duration-700 ease-out ${
              isScrolled ? 'space-x-4' : 'space-x-8'
            }`}>
              {/* Menu items expandido */}
              <div className={`flex items-center transition-all duration-700 ease-out ${
                isScrolled 
                  ? 'opacity-0 scale-95 w-0 overflow-hidden' 
                  : 'opacity-100 scale-100 w-auto space-x-8'
              }`}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 rounded-lg hover:bg-blue-50 whitespace-nowrap ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Menu compacto com dropdown quando há scroll */}
              <div className={`relative transition-all duration-700 ease-out ${
                isScrolled 
                  ? 'opacity-100 scale-100 w-auto' 
                  : 'opacity-0 scale-95 w-0 overflow-hidden'
              }`}>
                <button
                  onClick={() => setIsCompactMenuOpen(!isCompactMenuOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 whitespace-nowrap"
                >
                  <span>{currentPage}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCompactMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform origin-top ${
                  isCompactMenuOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsCompactMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 border-b border-gray-100 last:border-0 ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Botão CTA sempre visível */}
              <button className={`btn-primary text-white rounded-full font-medium flex items-center space-x-2 transition-all duration-300 ${
                isScrolled ? 'px-3 py-2 text-sm' : 'px-6 py-3'
              }`}>
                <Calendar className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} />
                {!isScrolled && <span>Agendar</span>}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ${
                isScrolled ? 'scale-90' : ''
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-2 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform origin-top ${
          isMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0 max-h-96' 
            : 'opacity-0 scale-95 -translate-y-4 max-h-0 pointer-events-none'
        }`}>
          <nav className="flex flex-col">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-6 py-4 text-base font-medium transition-all duration-300 border-b border-gray-100 last:border-0 ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="p-4">
              <button className="w-full btn-primary text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Overlay para fechar menus ao clicar fora */}
        {(isMenuOpen || isCompactMenuOpen) && (
          <div 
            className="fixed inset-0 -z-10"
            onClick={() => {
              setIsMenuOpen(false);
              setIsCompactMenuOpen(false);
            }}
          />
        )}
      </header>
    </>
  );
};

export default Header;
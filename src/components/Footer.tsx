import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import Logo from '../assets/images/Logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <img src={Logo} alt="Telemeds Logo" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-bold">Telemeds</span>
            </div>
            <p className="text-gray-400 mb-4">
              Clínica médica 100% digital, oferecendo atendimento de qualidade com médicos experientes, 
              de forma acessível e confiável.
            </p>
            <div className="text-sm text-gray-500">
              <p>CNPJ: 60.926.988/0001-46</p>
            </div>
          </div>

          {/* Links Institucionais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Especialidades</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/psiquiatra" className="text-gray-400 hover:text-white transition-colors">
                  Psiquiatria
                </Link>
              </li>
              <li>
                <Link to="/psico" className="text-gray-400 hover:text-white transition-colors">
                  Psicologia
                </Link>
              </li>
              <li>
                <Link to="/endocrinologia" className="text-gray-400 hover:text-white transition-colors">
                  Endocrinologia
                </Link>
              </li>
              <li>
                <Link to="/medicina" className="text-gray-400 hover:text-white transition-colors">
                  Medicina de Família
                </Link>
              </li>
              <li>
                <Link to="/ginecologia" className="text-gray-400 hover:text-white transition-colors">
                  Ginecologia
                </Link>
              </li>
              <li>
                <span className="text-gray-500">Ortopedia (em breve)</span>
              </li>
            </ul>
          </div>

          {/* Links Institucionais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/politicas-privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Políticas de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/politicas-cookies" className="text-gray-400 hover:text-white transition-colors">
                  Políticas de Cookies
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511917983233" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>+55 (11) 9179-83233</span>
              </a>
              <a 
                href="mailto:contato@telemeds.com.br"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@telemeds.com.br</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Av. Paulista, 1636 - sala 1504</p>
                  <p>São Paulo - SP, 01310-200</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Seg-Sex: 8h às 20h</p>
                  <p>Sáb-Dom: 8h às 13h</p>
                </div>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <p className="text-gray-300 text-sm font-medium">Médico Responsável Técnico</p>
                <p className="text-gray-400 text-sm">Dr. Bruno Hees Toews</p>
                <p className="text-gray-400 text-sm">CRM-SP 167551</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400">
              © 2025 Telemeds. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Designed by{' '}
              <a 
                href="https://stormcore.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Stormcore
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
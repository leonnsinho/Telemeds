import React from 'react';
import { Construction, Calendar, Mail } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

interface ComingSoonProps {
  specialty: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ specialty }) => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-primary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <div className="w-24 h-24 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-8">
              <Construction className="w-12 h-12 text-blue-600" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">{specialty}</span>
              <br />
              em breve
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Estamos preparando uma equipe especializada em {specialty} para oferecer 
              o melhor atendimento digital para você.
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seja notificado quando estivermos prontos
              </h3>
              <p className="text-gray-700 mb-6">
                Deixe seu e-mail e seja o primeiro a saber quando a especialidade de {specialty} 
                estiver disponível na Telemeds.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="btn-primary text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 whitespace-nowrap">
                  <Mail className="w-4 h-4" />
                  <span>Notifique-me</span>
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4">Enquanto isso, conheça nossas especialidades disponíveis:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/psiquiatria"
                  className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300"
                >
                  Psiquiatria
                </a>
                <a
                  href="/psico"
                  className="bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300"
                >
                  Psicologia
                </a>
                <a
                  href="/endocrinologia"
                  className="bg-white/90 backdrop-blur-sm text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300"
                >
                  Endocrinologia
                </a>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0" />
      </section>

      {/* Informações Adicionais */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            O que esperar da nossa <span className="gradient-text">{specialty}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agendamento Fácil</h3>
              <p className="text-gray-600">
                Sistema intuitivo para marcar suas consultas no horário mais conveniente.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Construction className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Médicos Qualificados</h3>
              <p className="text-gray-600">
                Profissionais experientes e certificados na especialidade de {specialty}.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atendimento Digital</h3>
              <p className="text-gray-600">
                Consultas online seguras com receitas digitais válidas em todo Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
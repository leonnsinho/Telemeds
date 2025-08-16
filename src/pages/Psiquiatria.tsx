import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Calendar, Shield, Clock, ChevronDown } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';
import medicoSerioImg from '../assets/images/medico serio.jpg';
import medico2Img from '../assets/images/medico 2.jpeg';

const Psiquiatria: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    'Depressão e transtornos do humor',
    'Ansiedade e transtornos ansiosos',
    'Transtorno do pânico',
    'Transtorno bipolar',
    'TDAH (Transtorno de Déficit de Atenção)',
    'Transtornos do sono',
    'Dependência química',
    'Transtornos alimentares'
  ];

  const doctors = [
    {
      name: 'Dr. Bruno Hees Toews',
      crm: 'CRM-SP: 167551',
      specialty: 'Psiquiatria',
      description: 'Atua há mais de 10 anos em psiquiatria e clínica médica, com especialização pela Santa Casa de São Paulo e vivência internacional. Reconhecido por sua abordagem empática e foco em resultados, oferece atendimento bilíngue (português e inglês) e conduz os atendimentos com excelência e responsabilidade médica.',
      image: medicoSerioImg
    },
    {
      name: 'Dr. Rennan Hollen',
      crm: 'CRM-SP: 208989',
      specialty: 'Psiquiatria',
      description: 'Com mais de 6 anos de experiência em psiquiatria e clínica médica, é especialista pelo Hospital Israelita Albert Einstein. Está em constante atualização profissional e dedica-se a um atendimento humanizado, personalizado e bilíngue (português e inglês), sempre priorizando o bem-estar e a qualidade de vida dos seus pacientes.',
      image: medico2Img
    }
  ];

  const faqItems = [
    {
      question: 'Qual a diferença entre psiquiatra e psicólogo?',
      answer: 'O psiquiatra é um médico especializado em transtornos mentais e pode prescrever medicamentos. Já o psicólogo é um profissional da saúde mental que trabalha com terapia e não prescreve medicamentos.'
    },
    {
      question: 'A consulta online é eficaz para tratamento psiquiátrico?',
      answer: 'Sim! Estudos mostram que a telepsiquiatria é tão eficaz quanto o atendimento presencial para a maioria dos casos, oferecendo maior comodidade e acessibilidade.'
    },
    {
      question: 'Posso obter receita de medicamentos controlados?',
      answer: 'Sim, nossos psiquiatras podem prescrever medicamentos controlados através de receitas digitais válidas, seguindo todas as normas do CFM e ANVISA.'
    },
    {
      question: 'Quanto tempo dura o tratamento?',
      answer: 'O tempo varia conforme cada caso. Algumas condições podem melhorar em semanas, enquanto outras requerem acompanhamento prolongado. Seu médico fará essa avaliação.'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-primary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">Psiquiatria</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cuidado especializado para sua
                <span className="gradient-text"> saúde mental</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Atendimento psiquiátrico online com médicos especializados, 
                diagnóstico preciso e tratamento personalizado para seu bem-estar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/agendamento"
                  className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </Link>
                <button 
                  onClick={() => {
                    const casosSection = document.getElementById('casos-comuns');
                    if (casosSection) {
                      casosSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
            
            <div className="hidden lg:block fade-in">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Consulta de Psiquiatria Online"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900">100% Seguro</p>
                      <p className="text-sm text-gray-600">Consultas privadas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0" />
      </section>

      {/* Casos Comuns */}
      <section id="casos-comuns" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Casos que <span className="gradient-text">atendemos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe de psiquiatria é especializada no tratamento de diversos transtornos mentais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {commonCases.map((case_item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Tratamento especializado</h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed">{case_item}</p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                </div>
              </div>
            ))}
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600 font-medium">Taxa de melhoria</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Pacientes atendidos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">8h-20h</div>
              <p className="text-gray-600 font-medium">Seg a Sex</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">8h-13h</div>
              <p className="text-gray-600 font-medium">Sáb e Dom</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#C5E4F6" />

      {/* Médicos */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos <span className="gradient-text">Especialistas</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Profissionais qualificados e experientes, prontos para cuidar da sua saúde mental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className={`w-full h-full object-cover ${
                      doctor.name.includes('Bruno') ? 'doctor-image-bruno' : 'doctor-image-rennan'
                    }`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">{doctor.crm}</p>
                  <p className="text-gray-600 mb-3 font-medium">{doctor.specialty}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{doctor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#ffffff" />

      {/* Como Funciona */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como funciona a <span className="gradient-text">consulta online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e seguro para cuidar da sua saúde mental
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Agende</h3>
              <p className="text-gray-600 leading-relaxed">
                Escolha o horário que melhor se adapta à sua rotina. 
                Agendamento fácil e rápido online.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Consulte</h3>
              <p className="text-gray-600 leading-relaxed">
                Videochamada segura com psiquiatra especializado. 
                Consultas a partir de 20 minutos.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receba</h3>
              <p className="text-gray-600 leading-relaxed">
                Receita médica digital válida e orientações personalizadas 
                para seu tratamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#D5D4F1" />

      {/* FAQ */}
      <section className="section-padding-large gradient-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre <span className="gradient-text">Psiquiatria</span>
            </h2>
            <p className="text-xl text-gray-700">
              Respondemos às perguntas mais frequentes sobre nosso atendimento
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip color="#ffffff" />

      {/* CTA Final */}
      <section className="section-padding-large bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para cuidar da sua saúde mental?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consulta com nossos psiquiatras especializados e dê o primeiro passo 
              para uma vida mais equilibrada e saudável.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/agendamento"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Agora</span>
              </Link>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Seg-Sex 8h-20h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>Especialistas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psiquiatria;
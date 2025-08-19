import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Calendar, Shield, Clock, ChevronDown } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const Endocrinologia: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    'Diabetes tipo 1 e 2',
    'Obesidade e controle de peso',
    'Distúrbios da tireoide',
    'Síndrome do ovário policístico',
    'Menopausa e reposição hormonal',
    'Osteoporose',
    'Distúrbios do crescimento',
    'Hipertensão arterial'
  ];

  const faqItems = [
    {
      question: 'Como é feito o diagnóstico de diabetes online?',
      answer: 'O endocrinologista analisa seus exames laboratoriais, sintomas e histórico. Caso necessário, pode solicitar exames complementares para confirmar o diagnóstico.'
    },
    {
      question: 'Posso fazer acompanhamento de tireoide online?',
      answer: 'Sim! O acompanhamento de problemas tireoidianos pode ser feito online através da análise de exames e ajuste de medicações quando necessário.'
    },
    {
      question: 'Como funciona o tratamento da obesidade?',
      answer: 'O tratamento inclui avaliação hormonal, orientação nutricional e, quando indicado, prescrição de medicamentos para auxiliar na perda de peso.'
    },
    {
      question: 'Preciso levar exames para a consulta?',
      answer: 'É recomendado ter exames recentes, mas não obrigatório. O médico pode solicitar novos exames conforme necessário durante a consulta.'
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
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-green-600 font-semibold text-lg">Endocrinologia</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Especialista em
                <span className="gradient-text"> saúde hormonal</span> e metabólica
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Tratamento especializado para diabetes, tireoide, obesidade e distúrbios hormonais 
                com endocrinologistas experientes.
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
                    const condicoesSection = document.getElementById('condicoes-tratamento');
                    if (condicoesSection) {
                      condicoesSection.scrollIntoView({ behavior: 'smooth' });
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
                  src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Consulta de Endocrinologia Online"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-8 h-8 text-green-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Especializado</p>
                      <p className="text-sm text-gray-600">Hormônios & Metabolismo</p>
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
      <section id="condicoes-tratamento" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Condições que <span className="gradient-text">tratamos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe de endocrinologistas é especializada no tratamento de diversos distúrbios hormonais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {commonCases.map((case_item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 p-6 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2">Tratamento hormonal</h3>
                <p className="text-gray-700 font-medium text-base leading-relaxed">{case_item}</p>
                <div className="mt-4 flex items-center text-green-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                </div>
              </div>
            ))}
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
              <p className="text-gray-600 font-medium">Controle glicêmico</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1200+</div>
              <p className="text-gray-600 font-medium">Pacientes atendidos</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-teal-600 mb-2">15anos</div>
              <p className="text-gray-600 font-medium">Experiência combinada</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">8h-20h</div>
              <p className="text-gray-600 font-medium">Seg a Sex</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">8h-13h</div>
              <p className="text-gray-600 font-medium">Sáb e Dom</p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#C5E4F6" />

      {/* Dra. Gabriela Iervolino */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Foto da médica */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Dra. Gabriela Iervolino"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge de credencial */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">CRM</p>
                    <p className="text-lg font-bold text-green-600">167067</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações da médica */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Conheça a <span className="gradient-text">Dra. Gabriela Iervolino</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Endocrinologista com linguagem acolhedora e explicações didáticas, especializada em tireoide, 
                  emagrecimento, diabetes tipo 2, saúde hormonal masculina e osteometabolismo.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Mais de 10 anos de experiência prática, formação nas melhores universidades do país (UNIFESP e FMABC) 
                  e título pela Sociedade Brasileira de Endocrinologia e Metabologia. Oferece prescrição digital com 
                  renovação de receitas controladas pelo Memed.
                </p>
              </div>

              {/* Credenciais */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Credenciais</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>CRM:</strong> 167067</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700"><strong>RQE:</strong> 92003</span>
                  </div>
                </div>
              </div>

              {/* Principais condições atendidas */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Principais Condições Atendidas
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Diabetes tipo 2',
                    'Tireoide',
                    'SOP',
                    'Obesidade',
                    'Deficiências hormonais',
                    'Osteoporose',
                    'Cirurgia bariátrica',
                    'Dislipidemia'
                  ].map((condition, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link 
                  to="/agendamento"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar com Dra. Gabriela</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider flip color="#ffffff" />

      {/* Como Funciona */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Como funciona a <span className="gradient-text">consulta endocrinológica</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo completo e detalhado para avaliação hormonal e metabólica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Agendamento</h3>
              <p className="text-gray-600 leading-relaxed">
                Escolha data e horário. Prepare seus exames recentes 
                e lista de medicamentos em uso.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Avaliação</h3>
              <p className="text-gray-600 leading-relaxed">
                Consulta detalhada com análise de exames, histórico 
                e avaliação clínica completa.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Tratamento</h3>
              <p className="text-gray-600 leading-relaxed">
                Plano personalizado com medicações, orientações 
                e acompanhamento contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8DAEB" />

      {/* FAQ */}
      <section className="section-padding-large gradient-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre <span className="gradient-text">Endocrinologia</span>
            </h2>
            <p className="text-xl text-gray-700">
              Esclarecemos as principais questões sobre consultas endocrinológicas
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para cuidar da sua saúde hormonal?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consulta com nossos endocrinologistas especializados e tenha o melhor 
              tratamento para diabetes, tireoide e outros distúrbios hormonais.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/agendamento"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Agora</span>
              </Link>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Análise completa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Acompanhamento contínuo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Especialistas experientes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Endocrinologia;
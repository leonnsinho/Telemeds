import React, { useState } from 'react';
import { Activity, Calendar, Shield, Clock, ChevronDown, Heart, Zap, Scale, Users, Thermometer, TrendingUp, Target } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const Endocrinologia: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    {
      title: 'Diabetes tipo 1 e 2',
      description: 'Controle glicêmico avançado e prevenção de complicações diabéticas',
      icon: Target,
      color: 'from-red-500 to-rose-500',
      bgColor: 'from-red-50 via-rose-50 to-pink-50',
      borderColor: 'border-red-100 hover:border-red-300'
    },
    {
      title: 'Obesidade e controle de peso',
      description: 'Estratégias integradas para emagrecimento saudável e duradouro',
      icon: Scale,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 via-amber-50 to-yellow-50',
      borderColor: 'border-orange-100 hover:border-orange-300'
    },
    {
      title: 'Distúrbios da tireoide',
      description: 'Tratamento de hipertireoidismo, hipotireoidismo e nódulos tireoidianos',
      icon: Thermometer,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 via-cyan-50 to-sky-50',
      borderColor: 'border-blue-100 hover:border-blue-300'
    },
    {
      title: 'Síndrome do ovário policístico',
      description: 'Abordagem completa para SOP: hormonal, metabólica e reprodutiva',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 via-rose-50 to-red-50',
      borderColor: 'border-pink-100 hover:border-pink-300'
    },
    {
      title: 'Menopausa e reposição hormonal',
      description: 'Manejo dos sintomas da menopausa e terapia hormonal personalizada',
      icon: Users,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 via-violet-50 to-indigo-50',
      borderColor: 'border-purple-100 hover:border-purple-300'
    },
    {
      title: 'Osteoporose',
      description: 'Prevenção e tratamento da perda óssea com foco na qualidade de vida',
      icon: Activity,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 via-teal-50 to-green-50',
      borderColor: 'border-emerald-100 hover:border-emerald-300'
    },
    {
      title: 'Distúrbios do crescimento',
      description: 'Avaliação e tratamento de alterações no crescimento e desenvolvimento',
      icon: TrendingUp,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 via-blue-50 to-sky-50',
      borderColor: 'border-indigo-100 hover:border-indigo-300'
    },
    {
      title: 'Hipertensão arterial',
      description: 'Controle da pressão alta com foco nas causas endócrinas',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 via-emerald-50 to-teal-50',
      borderColor: 'border-green-100 hover:border-green-300'
    }
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
                <a 
                  href="https://wa.me/5511984999066?text=Olá! Gostaria de agendar uma consulta de endocrinologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </a>
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
                  src="/endocrinologia.png"
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
            {commonCases.map((case_item, index) => {
              const IconComponent = case_item.icon;
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${case_item.bgColor} p-6 rounded-2xl border ${case_item.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                    <IconComponent className="w-full h-full" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${case_item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 font-bold text-lg mb-2 leading-tight">{case_item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{case_item.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${case_item.color} rounded-full`}></div>
                        <span className="text-xs font-medium text-gray-500">Especializado</span>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronDown className="w-4 h-4 text-gray-400 rotate-[-90deg]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Estatísticas com novo design */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resultados que comprovam nossa expertise</h3>
              <p className="text-gray-600">Números que refletem nosso compromisso com seu tratamento hormonal</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl text-center border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
                <p className="text-gray-600 font-medium text-sm">Controle glicêmico</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1200+</div>
                <p className="text-gray-600 font-medium text-sm">Pacientes atendidos</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-green-100 p-6 rounded-2xl text-center border border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-2">15anos</div>
                <p className="text-gray-600 font-medium text-sm">Experiência combinada</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-2xl text-center border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">8h-20h</div>
                <p className="text-gray-600 font-medium text-sm">Seg a Sex</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">8h-13h</div>
                <p className="text-gray-600 font-medium text-sm">Sáb e Dom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider gradientFrom="#C5E4F6" gradientTo="#E5D8F0" />

      {/* Dra. Gabriela Iervolino */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Foto da médica */}
            <div className="order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/dra.jpeg"
                    alt="Dra. Gabriela Iervolino"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top 15%' }}
                  />
                </div>
                {/* Badge de credencial removido */}
              </div>
            </div>

            {/* Informações da médica */}
            <div className="order-1 lg:order-2 space-y-4 lg:space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Conheça a <span className="gradient-text">Dra. Gabriela Iervolino</span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 lg:mb-6">
                  Endocrinologista com linguagem acolhedora e explicações didáticas, especializada em tireoide, 
                  emagrecimento, diabetes tipo 2, saúde hormonal masculina e osteometabolismo.
                </p>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                  Mais de 10 anos de experiência prática, formação nas melhores universidades do país (UNIFESP e FMABC) 
                  e título pela Sociedade Brasileira de Endocrinologia e Metabologia. Oferece prescrição digital com 
                  renovação de receitas controladas pelo Memed.
                </p>
              </div>

              {/* Credenciais */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/20">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3">Credenciais</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm lg:text-base text-gray-700"><strong>CRM:</strong> 167067</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm lg:text-base text-gray-700"><strong>RQE:</strong> 92003</span>
                  </div>
                </div>
              </div>

              {/* Principais condições atendidas */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Principais Condições Atendidas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
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
                      <span className="text-gray-700 text-sm lg:text-base">{condition}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 lg:pt-4">
                <a 
                  href="https://wa.me/5511984999066?text=Olá! Gostaria de agendar uma consulta de endocrinologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Calendar className="w-4 lg:w-5 h-4 lg:h-5" />
                  <span>Agendar com Dra. Gabriela</span>
                </a>
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

      <WaveDivider gradientFrom="#D8CAE7" gradientTo="#FEF7D3" />

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
              <a 
                href="https://wa.me/5511984999066?text=Olá! Gostaria de agendar uma consulta de endocrinologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Agora</span>
              </a>
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

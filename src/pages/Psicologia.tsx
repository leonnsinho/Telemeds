import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Shield, Clock, ChevronDown, Brain, Users, Smile, User, Zap, Coffee, MessageCircle } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';
// removed unused doctor images (specialists section removed)

const Psicologia: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    {
      title: 'Ansiedade e estresse',
      description: 'Técnicas para gerenciar ansiedade e reduzir os níveis de estresse do dia a dia',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 via-yellow-50 to-orange-50',
      borderColor: 'border-amber-100 hover:border-amber-300'
    },
    {
      title: 'Depressão e tristeza',
      description: 'Suporte terapêutico para superar episódios depressivos e melhorar o humor',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 via-cyan-50 to-sky-50',
      borderColor: 'border-blue-100 hover:border-blue-300'
    },
    {
      title: 'Relacionamentos',
      description: 'Desenvolvimento de habilidades interpessoais e resolução de conflitos',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 via-rose-50 to-red-50',
      borderColor: 'border-pink-100 hover:border-pink-300'
    },
    {
      title: 'Autoestima e autoconhecimento',
      description: 'Fortalecimento da confiança pessoal e descoberta do seu potencial',
      icon: User,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 via-violet-50 to-indigo-50',
      borderColor: 'border-purple-100 hover:border-purple-300'
    },
    {
      title: 'Luto e perdas',
      description: 'Acompanhamento especializado nos processos de luto e elaboração de perdas',
      icon: Heart,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'from-slate-50 via-gray-50 to-zinc-50',
      borderColor: 'border-slate-100 hover:border-slate-300'
    },
    {
      title: 'Transtornos alimentares',
      description: 'Suporte para desenvolver uma relação saudável com a alimentação',
      icon: Coffee,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 via-emerald-50 to-teal-50',
      borderColor: 'border-green-100 hover:border-green-300'
    },
    {
      title: 'Fobias e medos',
      description: 'Técnicas para enfrentar e superar medos específicos e fobias',
      icon: Brain,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 via-pink-50 to-rose-50',
      borderColor: 'border-red-100 hover:border-red-300'
    },
    {
      title: 'Terapia de casal',
      description: 'Fortalecimento dos vínculos e comunicação entre parceiros',
      icon: MessageCircle,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 via-purple-50 to-violet-50',
      borderColor: 'border-indigo-100 hover:border-indigo-300'
    }
  ];

  // specialists list removed as requested

  const faqItems = [
    {
      question: 'Como funciona a terapia online?',
      answer: 'A terapia online acontece por videochamada em ambiente seguro e privativo. É tão eficaz quanto a presencial, oferecendo comodidade e flexibilidade.'
    },
    {
      question: 'Qual a diferença entre psicólogo e psiquiatra?',
      answer: 'O psicólogo foca em terapia e acompanhamento emocional, enquanto o psiquiatra é médico especializado que pode prescrever medicamentos.'
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer: 'As consultas são padronizadas em 1 hora de duração.'
    },
    {
      question: 'Com que frequência devo fazer terapia?',
      answer: 'Geralmente recomenda-se sessões semanais, mas a frequência pode variar conforme suas necessidades e combinação com o terapeuta.'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center gradient-secondary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-purple-600 font-semibold text-lg">Psicologia</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Terapia online para seu
                <span className="gradient-text"> bem-estar emocional</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Acompanhamento psicológico personalizado com profissionais experientes, 
                no conforto e privacidade da sua casa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/agendamento"
                  className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Sessão</span>
                </Link>
                <button 
                  onClick={() => {
                    const situacoesSection = document.getElementById('situacoes-acompanhamento');
                    if (situacoesSection) {
                      situacoesSection.scrollIntoView({ behavior: 'smooth' });
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
                  src="/psicologia.png"
                  alt="Terapia Online"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-8 h-8 text-pink-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Acolhimento</p>
                      <p className="text-sm text-gray-600">Cuidado humano</p>
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
      <section id="situacoes-acompanhamento" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Situações que <span className="gradient-text">acompanhamos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe de psicólogos está preparada para diversos tipos de acompanhamento terapêutico
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
                        <span className="text-xs font-medium text-gray-500">Acompanhamento</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resultados que demonstram nossa dedicação</h3>
              <p className="text-gray-600">Números que refletem nosso compromisso com seu bem-estar emocional</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl text-center border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
                <p className="text-gray-600 font-medium text-sm">Satisfação dos pacientes</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">800+</div>
                <p className="text-gray-600 font-medium text-sm">Sessões realizadas</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50min</div>
                <p className="text-gray-600 font-medium text-sm">Duração por sessão</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-6 rounded-2xl text-center border border-amber-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">8h-20h</div>
                <p className="text-gray-600 font-medium text-sm">Seg a Sex</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl text-center border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">8h-13h</div>
                <p className="text-gray-600 font-medium text-sm">Sáb e Dom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding-large gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre <span className="gradient-text">Psicologia</span>
            </h2>
            <p className="text-xl text-gray-700">
              Esclarecemos as principais questões sobre terapia online
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para iniciar sua jornada de autoconhecimento?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua primeira sessão com nossos psicólogos especializados e dê o primeiro passo 
              em direção ao seu bem-estar emocional.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/agendamento"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Primeira Sessão</span>
              </Link>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>100% Privativo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>50min por sessão</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Acolhimento humano</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Psicologia;
import React, { useState } from 'react';
import { Heart, Calendar, Shield, Clock, ChevronDown, Baby, Flower, Users, Zap, TestTube } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const Ginecologia: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    {
      title: 'Contracepção e Planejamento Familiar',
      description: 'Anticoncepção - contraceptivos orais, anel vaginal, injetáveis, adesivo, implante subdérmico, DIU (em relação a DIU e implante - aconselhamentos e guia para solicitação); Contracepção de emergência',
      icon: Users,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 via-violet-50 to-indigo-50',
      borderColor: 'border-purple-100 hover:border-purple-300',
      category: 'Planejamento'
    },
    {
      title: 'Ginecologia Endócrina',
      description: 'SOP; Distúrbios do ciclo menstrual; Disfunções tireoidianas/adrenais; Distúrbios androgênicos (hirsutismo, acne, alopecia); Alterações puberais (precoce/tardia)',
      icon: Zap,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 via-rose-50 to-red-50',
      borderColor: 'border-pink-100 hover:border-pink-300',
      category: 'Endócrina'
    },
    {
      title: 'Saúde Sexual',
      description: 'ISTs (prevenção, sorologias, resultados); Corrimentos vaginais; Candidíase de repetição',
      icon: Heart,
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-50 via-green-50 to-lime-50',
      borderColor: 'border-emerald-100 hover:border-emerald-300',
      category: 'Sexual'
    },
    {
      title: 'Oncologia Ginecológica (Acompanhamento)',
      description: 'Exames de rastreio (Papanicolau, HPV, mamografia); Orientações conforme protocolos de rastreamento',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 via-pink-50 to-rose-50',
      borderColor: 'border-red-100 hover:border-red-300',
      category: 'Oncologia'
    },
    {
      title: 'Gestação de Baixo Risco',
      description: 'Orientações gerais entre consultas presenciais; Interpretação de exames; Suplementação (ácido fólico, ferro, vitaminas); Sintomas comuns da gestação',
      icon: Baby,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 via-purple-50 to-fuchsia-50',
      borderColor: 'border-violet-100 hover:border-violet-300',
      category: 'Gestação'
    },
    {
      title: 'Saúde Mental',
      description: 'Ansiedade/depressão relacionadas ao ciclo, pós-parto ou menopausa; TDPM; Encaminhamento quando necessário',
      icon: Heart,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 via-indigo-50 to-purple-50',
      borderColor: 'border-blue-100 hover:border-blue-300',
      category: 'Mental'
    },
    {
      title: 'Saúde da Adolescente',
      description: 'Primeiro atendimento ginecológico; Sexualidade; alterações puberais e irregularidades menstruais',
      icon: Flower,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 via-cyan-50 to-blue-50',
      borderColor: 'border-teal-100 hover:border-teal-300',
      category: 'Adolescente'
    },
    {
      title: 'Climatério e Menopausa',
      description: 'Tratamento de sintomas (fogachos, insônia, irritabilidade, ressecamento vaginal, queda da libido); Terapia de reposição hormonal e não hormonais; prevenção de osteoporose; suplementação',
      icon: Clock,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 via-amber-50 to-yellow-50',
      borderColor: 'border-orange-100 hover:border-orange-300',
      category: 'Climatério'
    },
    {
      title: 'Queixas Comuns (Manejo Inicial)',
      description: 'Atendimento inicial e orientação para os problemas ginecológicos mais frequentes',
      details: [
        'Infecção urinária - diagnóstico e tratamento',
        'Cólicas menstruais e dismenorreia - alívio da dor',
        'Síndrome pré-menstrual e TDPM - manejo hormonal',
        'Corrimentos vaginais - identificação e tratamento',
        'Dor pélvica - avaliação e orientações',
        'Sangramento uterino anormal - investigação inicial',
        'Alterações no ciclo menstrual - regulação hormonal'
      ],
      icon: TestTube,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 via-blue-50 to-sky-50',
      borderColor: 'border-indigo-100 hover:border-indigo-300',
      category: 'Queixas',
      isSpecial: true
    }
  ];

  const doctor = {
    name: 'Dra. Marina Arruda Negrisolo',
    crm: 'CRM-SP: 208883',
    specialty: 'Ginecologia e Obstetrícia',
    quote: 'Vejo a ginecologia como um espaço de escuta, acolhimento e respeito, que considera não apenas o aspecto clínico, mas também as nuances emocionais, sociais e culturais do universo feminino.',
    description: 'Graduou-se em medicina na UAM (Universidade Anhembi Morumbi) em São Paulo. Residência médica em Ginecologia e Obstetrícia pela Santa Casa de Misericórdia de Campo Grande, Mato Grosso do Sul. Especialização em Ginecologia Endócrina e Infanto-puberal no Hospital Sírio Libanês em São Paulo.',
    experience: '10+ anos',
    image: '/dra marina.jpg'
  };

  const faqItems = [
    {
      question: 'O que é uma consulta ginecológica online?',
      answer: 'A consulta ginecológica online é um atendimento especializado em saúde da mulher realizado por videoconferência. Inclui orientações, prescrições, solicitação de exames e acompanhamento de condições ginecológicas que não requerem exame físico imediato.'
    },
    {
      question: 'Quais tipos de consultas ginecológicas posso agendar?',
      answer: 'Oferecemos consultas para orientação contraceptiva, acompanhamento de ciclo menstrual, infecções ginecológicas, climatério/menopausa, solicitação de exames preventivos, orientações pré-gestacionais e segunda opinião médica.'
    },
    {
      question: 'Qual é a duração da consulta ginecológica?',
      answer: 'As consultas têm duração de 20 a 40 minutos, dependendo da complexidade do caso. Consultas de rotina e renovação de receitas são mais rápidas, enquanto primeiras consultas e casos complexos requerem mais tempo.'
    },
    {
      question: 'Quais condições ginecológicas podem ser avaliadas online?',
      answer: 'Podemos avaliar: irregularidades menstruais, sintomas de infecções vaginais, orientação contraceptiva, sintomas da menopausa, dúvidas sobre métodos contraceptivos, acompanhamento de exames e orientações gerais sobre saúde feminina.'
    },
    {
      question: 'Vocês prescrevem anticoncepcionais e outros medicamentos?',
      answer: 'Sim ✅. Prescrevemos anticoncepcionais hormonais, medicamentos para infecções ginecológicas, terapia hormonal para menopausa e outros medicamentos necessários, sempre com receita digital válida em todo o Brasil.'
    },
    {
      question: 'Posso solicitar exames ginecológicos na consulta online?',
      answer: 'Sim. Solicitamos exames como Papanicolau, ultrassom (transvaginal, pelvico, mamas e axilas, abdominal), mamografia, exames hormonais, cultura vaginal e outros exames necessários para diagnóstico e acompanhamento da saúde ginecológica.'
    },
    {
      question: 'A consulta online substitui o exame ginecológico presencial?',
      answer: 'A consulta online é excelente para orientações, prescrições e acompanhamento, mas o exame físico ginecológico ainda deve ser realizado presencialmente quando necessário. Orientamos quando é importante buscar atendimento presencial.'
    },
    {
      question: 'Como funciona o acompanhamento do climatério e menopausa?',
      answer: 'Realizamos avaliação dos sintomas, orientações sobre mudanças hormonais, prescrição de terapia de reposição hormonal quando indicada, e acompanhamento contínuo para manejo dos sintomas e prevenção de complicações.'
    },
    {
      question: 'Vocês orientam sobre planejamento familiar?',
      answer: 'Sim. Oferecemos orientação completa sobre métodos contraceptivos, planejamento reprodutivo, orientações pré-concepcionais e acompanhamento para casais que desejam engravidar.'
    },
    {
      question: 'Que tipos de infecções ginecológicas podem ser tratadas online?',
      answer: 'Tratamos candidíase vaginal, vaginose bacteriana, infecções urinárias simples e oferecemos orientações sobre prevenção de ISTs. Casos mais complexos podem necessitar avaliação presencial.'
    },
    {
      question: 'Quais atendimentos ginecológicos NÃO realizamos online?',
      answer: 'Não realizamos: exame físico ginecológico, inserção de DIU, procedimentos cirúrgicos, pré-natal de alto risco, emergências ginecológicas agudas que requerem avaliação presencial imediata.'
    },
    {
      question: 'Qual é o valor da consulta ginecológica?',
      answer: 'Consulta curta (20 min) – R$ 129,90, Consulta estendida (40 min) – R$ 239,90. Incluem prescrição digital, orientações personalizadas e solicitação de exames quando necessário.'
    },
    {
      question: 'Como agendar uma consulta ginecológica?',
      answer: 'O agendamento é simples: 1-Escolha o horário disponível, 2-Realize a consulta online (20 ou 40 min), 3-Receba suas prescrições, orientações e solicitações de exames diretamente no celular.'
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
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <span className="text-pink-600 font-semibold text-lg">Ginecologia</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cuidado integral para a
                <span className="gradient-text"> saúde da mulher</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Atendimento ginecológico online especializado, com foco em prevenção, 
                diagnóstico e tratamento personalizado para todas as fases da vida feminina.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511917983233?text=Olá! Gostaria de agendar uma consulta de ginecologia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </a>
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
                  src="/gine-foto.png"
                  alt="Ginecologia - Dra. Marina Arruda Negrisolo"
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
              Nossa equipe de ginecologia é especializada em cuidados abrangentes, preventivos e personalizados para a saúde da mulher.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {commonCases.map((case_item, index) => {
              const IconComponent = case_item.icon;
              
              // Card especial para Queixas Comuns
              if (case_item.isSpecial) {
                return (
                  <div
                    key={index}
                    className={`group bg-gradient-to-br ${case_item.bgColor} p-8 rounded-2xl border ${case_item.borderColor} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden xl:col-span-4 lg:col-span-3 md:col-span-2`}
                  >
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                      <IconComponent className="w-full h-full" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                        {/* Header Section */}
                        <div className="lg:w-1/3">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${case_item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-gray-900 font-bold text-2xl mb-2 leading-tight">{case_item.title}</h3>
                              <p className="text-gray-600 text-base leading-relaxed">{case_item.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Details Section */}
                        <div className="lg:w-2/3">
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Principais condições que tratamos:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {case_item.details?.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-3">
                                <div className={`w-2 h-2 bg-gradient-to-r ${case_item.color} rounded-full mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* CTA Button */}
                          <div className="flex items-center justify-end">
                            <button 
                              className={`bg-gradient-to-r ${case_item.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2`}
                              onClick={() => window.open('https://wa.me/5511917983233?text=Olá! Gostaria de agendar uma consulta de ginecologia para tratar queixas comuns.', '_blank')}
                            >
                              <Calendar className="w-4 h-4" />
                              <span>Agendar Consulta</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // Cards normais para outras especialidades
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
                        <span className="text-xs font-medium text-gray-500">{case_item.category}</span>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resultados que comprovam nossa excelência</h3>
              <p className="text-gray-600">Números que refletem nosso compromisso com a saúde da mulher</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl text-center border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
                <p className="text-gray-600 font-medium text-sm">Satisfação das pacientes</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">800+</div>
                <p className="text-gray-600 font-medium text-sm">Mulheres atendidas</p>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-6 rounded-2xl text-center border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">8h-20h</div>
                <p className="text-gray-600 font-medium text-sm">Seg a Sex</p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-6 rounded-2xl text-center border border-rose-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-rose-600 mb-2">8h-13h</div>
                <p className="text-gray-600 font-medium text-sm">Sábado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider gradientFrom="#C5E4F6" gradientTo="#E5D8F0" />

      {/* Médicos */}
      <section className="section-padding bg-gradient-to-r from-[#C5E4F6] to-[#E5D8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossa <span className="gradient-text">Especialista</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Profissional qualificada e experiente, dedicada ao cuidado integral da saúde feminina com acolhimento e expertise.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Seção da Imagem */}
                <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Seção do Conteúdo */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-pink-600 font-semibold text-lg mb-2">{doctor.crm}</p>
                    <p className="text-pink-600 font-semibold text-lg mb-2">RQE: 142518</p>
                    <p className="text-gray-600 font-medium text-lg">{doctor.specialty}</p>
                  </div>

                  {/* Quote destacada */}
                  <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-xl mb-6">
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{doctor.quote}"
                    </blockquote>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    {doctor.description}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/5511917983233?text=Olá! Gostaria de agendar uma consulta de ginecologia."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-pink-600 to-rose-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-rose-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Consulta</span>
                    </a>
                  </div>
                </div>
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
              Como funciona a <span className="gradient-text">consulta online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Processo simples e seguro para cuidar da sua saúde ginecológica
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
                <Heart className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Consulte</h3>
              <p className="text-gray-600 leading-relaxed">
                Videoconsulta segura com ginecologista especializada. 
                Opções de 20 ou 40 minutos, conforme sua necessidade.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receba</h3>
              <p className="text-gray-600 leading-relaxed">
                Receita médica digital válida, orientações personalizadas 
                e solicitação de exames quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider gradientFrom="#D8CAE7" gradientTo="#FEF7D3" />

      {/* FAQ */}
      <section className="section-padding-large bg-gradient-to-r from-[#D8CAE7] to-[#FEF7D3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dúvidas sobre <span className="gradient-text">Ginecologia</span>
            </h2>
            <p className="text-xl text-gray-700">
              Respondemos às perguntas mais frequentes sobre nosso atendimento ginecológico
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
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronta para cuidar da sua saúde feminina?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consulta ginecológica online e receba cuidado especializado 
              para todas as fases da sua vida.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5511917983233?text=Olá! Gostaria de agendar uma consulta de ginecologia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Agora</span>
              </a>
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
                <Heart className="w-4 h-4" />
                <span>Especialista</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ginecologia;

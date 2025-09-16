import React, { useState } from 'react';
import { Heart, Calendar, Shield, Clock, ChevronDown, Activity, Baby, FileText, Leaf, BookOpen, Search, XCircle, Users, Stethoscope } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const Medicina: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const commonCases = [
    {
      title: 'Consulta Clínica Geral',
      description: 'Avaliação de sintomas inespecíficos e queixas do dia a dia (cefaleias, infecções respiratórias e urinárias, gastrointestinais, dermatológicas, ginecológicas, osteomusculares), deficiências nutricionais e reposição de vitaminas.',
      icon: Heart,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 via-cyan-50 to-sky-50',
      borderColor: 'border-blue-100 hover:border-blue-300',
      category: 'Essencial'
    },
    {
      title: 'Renovação de Receita Simples e Controladas / Encaminhamentos',
      description: 'Reemissão de prescrições estáveis (hipertensão, diabetes, colesterol, asma, anticoncepcionais, exames nutricionais, hormônios e psicotrópicos). Inclui encaminhamentos para fisioterapia, acupuntura, pilates e RPG.',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 via-emerald-50 to-teal-50',
      borderColor: 'border-green-100 hover:border-green-300',
      category: 'Essencial'
    },
    {
      title: 'Puericultura Básica Online',
      description: 'Acompanhamento do crescimento e desenvolvimento infantil. Orientações sobre marcos do desenvolvimento, dúvidas frequentes e triagem de sinais de alerta. Não substitui consultas presenciais obrigatórias do pediatra.',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 via-rose-50 to-red-50',
      borderColor: 'border-pink-100 hover:border-pink-300',
      category: 'Familiar'
    },
    {
      title: 'Check-up Clínico e Exames Laboratoriais',
      description: 'Consulta preventiva com solicitação de exames: metabólicos, hormonais, autoimunes, marcadores tumorais, alergias, vitaminas e micronutrientes. Inclui check-up pré-nupcial e pré-gestacional.',
      icon: Activity,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 via-violet-50 to-indigo-50',
      borderColor: 'border-purple-100 hover:border-purple-300',
      category: 'Preventivo'
    },
    {
      title: 'Tratamento com Canabinoides Medicinais',
      description: 'Indicado para dor crônica, epilepsia refratária, doença de Parkinson, esclerose múltipla, Alzheimer, fibromialgia, enxaqueca crônica e efeitos da quimioterapia/radioterapia.',
      icon: Leaf,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 via-teal-50 to-green-50',
      borderColor: 'border-emerald-100 hover:border-emerald-300',
      category: 'Especializado'
    },
    {
      title: 'Orientações em Saúde e Uso de Medicamentos',
      description: 'Prevenção de doenças infecciosas, promoção de hábitos saudáveis, revisão de polifarmácia e esclarecimento sobre efeitos colaterais e interações medicamentosas.',
      icon: BookOpen,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 via-yellow-50 to-orange-50',
      borderColor: 'border-amber-100 hover:border-amber-300',
      category: 'Orientação'
    },
    {
      title: 'Laudos e Atestados Médicos',
      description: 'Emissão de documentos mediante avaliação clínica: Atividades físicas (academia, clubes, esportes), Escolares (faltas, restrições temporárias), INSS, Documentos para empregadores/instituições.',
      icon: FileText,
      color: 'from-slate-500 to-gray-500',
      bgColor: 'from-slate-50 via-gray-50 to-zinc-50',
      borderColor: 'border-slate-100 hover:border-slate-300',
      category: 'Documentação'
    },
    {
      title: 'Segunda Opinião Clínica',
      description: 'Revisão de exames e condutas anteriores, discussão de diagnósticos, alternativas terapêuticas e apoio na tomada de decisão segura, evitando tratamentos redundantes.',
      icon: Search,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'from-indigo-50 via-blue-50 to-sky-50',
      borderColor: 'border-indigo-100 hover:border-indigo-300',
      category: 'Apoio'
    }
  ];

  const doctor = {
    name: 'Dra. Keila Hees',
    crm: 'CRM-SP: 86684', // Será atualizado posteriormente
    specialty: 'Clínica Médica, Medicina de Família e Pediatria',
    quote: 'Num mundo em que muitos médicos parecem frios e distantes, a Dra.Keila Hees se destaca pela empatia e atenção total a você.',
    description: 'Com mais de 30 anos de experiência em clínica médica, medicina de família e pediatria, ela não apenas vai te ouvir – mas oferecer soluções concretas, baseadas em conhecimento e prática. Aqui você encontra o cuidado e a eficácia que tantos outros não conseguem entregar.',
    experience: '30+ anos',
    image: '/dr keila.png'
  };

  const faqItems = [
    {
      question: 'O que é uma consulta de Medicina de Família?',
      answer: 'São consultas abrangentes, realizadas por médicos capacitados para atender desde queixas do dia a dia até acompanhamento de doenças crônicas, prevenção de saúde e orientações gerais. Nosso objetivo é oferecer cuidado resolutivo, contínuo e acessível para todas as idades.'
    },
    {
      question: 'Quais tipos de consultas posso agendar?',
      answer: 'Oferecemos diferentes modalidades de atendimento, sempre online e com emissão de receita digital válida em todo o Brasil: Consulta Clínica Geral, Renovação de Receita Simples, Puericultura Básica Online, Check-up Clínico e Exames Laboratoriais, Tratamento com Canabinoides Medicinais, Orientações em Saúde e Uso de Medicamentos, Laudos e Atestados Médicos, Segunda Opinião Clínica.'
    },
    {
      question: 'Qual é a duração da consulta?',
      answer: 'Você escolhe de acordo com a sua necessidade: 20 minutos – consultas curtas, ideais para renovações de receita, orientações pontuais, afastamentos simples e laudos. 40 minutos – consultas completas, para acompanhamento familiar, avaliação de múltiplas condições, check-ups e casos mais complexos.'
    },
    {
      question: 'Quais condições podem ser avaliadas na Medicina de Família?',
      answer: 'Nossos especialistas estão preparados para lidar com: Queixas agudas (febre, gripes, infecções leves, dores de cabeça, problemas gastrointestinais e dermatológicos), Doenças crônicas (hipertensão, diabetes, colesterol, asma, tireoide), Deficiências nutricionais, suplementação e reposição de vitaminas, Prevenção e promoção de saúde, incluindo vacinação, hábitos de vida e orientações gerais, Encaminhamentos e solicitações de exames.'
    },
    {
      question: 'Vocês emitem receitas médicas?',
      answer: 'Sim ✅. Todas as consultas permitem emissão de receita médica digital válida em todo o Brasil, inclusive controlados de uso clínico (conforme avaliação médica). Também podemos prescrever vitaminas, reposições hormonais, anticoncepcionais e outros medicamentos de uso contínuo.'
    },
    {
      question: 'Posso renovar minha receita online?',
      answer: 'Sim. A renovação de receita é indicada para pacientes já estabilizados em uso de medicações contínuas (como para hipertensão, diabetes, colesterol, anticoncepcionais e psicotrópicos estáveis). Durante a consulta, o médico poderá revalidar a receita, ajustar doses se necessário e solicitar exames de acompanhamento.'
    },
    {
      question: 'O que é a Puericultura Básica Online?',
      answer: 'É um acompanhamento voltado para crianças, com foco em crescimento e desenvolvimento. Inclui orientações sobre marcos do desenvolvimento infantil, dúvidas frequentes de pais e responsáveis, triagem de sinais de alerta e vacinação. ⚠ Importante: não substitui as consultas presenciais obrigatórias com o pediatra.'
    },
    {
      question: 'Como funciona o Check-up Clínico?',
      answer: 'O check-up é uma consulta preventiva, em que avaliamos seu histórico clínico e solicitamos exames laboratoriais de acordo com seu perfil. Podem ser solicitados: Exames metabólicos e hormonais, Avaliação nutricional, Marcadores tumorais e autoimunes, Alergias alimentares, respiratórias e cutâneas, Exames pré-nupciais e pré-gestacionais, Vitaminas e micronutrientes.'
    },
    {
      question: 'Vocês oferecem tratamento com canabinoides medicinais?',
      answer: 'Sim. Temos médica credenciada para prescrever canabinoides medicinais de forma segura e personalizada. As principais indicações clínicas são: Dor crônica, Epilepsia refratária, Doença de Parkinson, Esclerose múltipla, Alzheimer e outras condições neurodegenerativas, Efeitos da quimioterapia, Espasticidade muscular, Enxaqueca crônica.'
    },
    {
      question: 'Vocês fazem laudos e atestados médicos?',
      answer: 'Sim. Emitimos documentos mediante avaliação clínica: Atividades físicas (academia, esportes, clubes), Escolares (faltas, restrições temporárias), Atestados para empregadores/instituições, Laudos para INSS (consulta de 20 min – valor fixo). ⚠ Importante: alguns laudos específicos não são realizados.'
    },
    {
      question: 'Como funciona a consulta de Segunda Opinião Clínica?',
      answer: 'É um atendimento voltado para revisão de exames, condutas e diagnósticos anteriores. O objetivo é oferecer segurança, discutir alternativas terapêuticas e evitar tratamentos redundantes.'
    },
    {
      question: 'Quais atendimentos e laudos NÃO realizamos?',
      answer: 'Por motivos éticos e legais, não realizamos: Pré-natal de alto risco, Laudos para readequação de gênero, Laudo de curatela, Laudo de interdição, Laudo para aposentadoria por invalidez ou isenção de IR, Laudo para porte ou posse de arma de fogo, Laudo PCD.'
    },
    {
      question: 'Qual é o valor da consulta?',
      answer: 'Consulta curta (20 min) – R$ 129,90, Consulta estendida (40 min) – R$ 239,90, Laudos específicos (INSS e empregadores) – R$ 300,00 (fixo – 20 min).'
    },
    {
      question: 'Como agendar uma consulta?',
      answer: 'O processo é simples: 1-Escolha o dia e horário que melhor se adapta à sua rotina, 2-Realize a consulta online (20 ou 40 min), 3-Receba sua receita, orientações ou laudo diretamente no celular.'
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
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold text-lg">Medicina de Família</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Cuidado completo para sua
                <span className="gradient-text"> saúde e da sua família</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Atendimento online com médicos de clínica geral e medicina de família, 
                para prevenção, diagnóstico e tratamento personalizado em todas as fases da vida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Medicina Geral."
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
                  src="/medicina.png"
                  alt="Consulta de Medicina de Família Online"
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
              Nossa equipe de clínica médica e medicina de família é especializada em cuidados abrangentes, contínuos e preventivos para todas as idades.
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

          {/* Atendimentos que NÃO realizamos */}
          <div className="mt-16 bg-red-50 rounded-2xl p-8 border border-red-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-3">Atendimentos que NÃO realizamos</h3>
                <p className="text-red-700 leading-relaxed">
                  <strong>Importante:</strong> Pré-natal de alto risco, laudos judiciais (curatela, interdição), invalidez/isenção de IR, 
                  porte/posse de arma, PCD, troca de sexo/transgêneros.
                </p>
              </div>
            </div>
          </div>

          {/* Estatísticas com novo design */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Resultados que comprovam nossa excelência</h3>
              <p className="text-gray-600">Números que refletem nosso compromisso com seu bem-estar</p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600 font-medium text-sm">Taxa de melhoria</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                <p className="text-gray-600 font-medium text-sm">Pacientes atendidos</p>
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
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-rose-600 mb-2">8h-13h</div>
                <p className="text-gray-600 font-medium text-sm">Sáb e Dom</p>
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
              Profissional qualificada e experiente, pronta para diagnosticar, tratar e acompanhar suas necessidades de saúde com agilidade e segurança.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Seção da Imagem */}
                <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Badge de experiência */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-gray-900">{doctor.experience} de experiência</span>
                    </div>
                  </div>
                </div>

                {/* Seção do Conteúdo */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg mb-2">{doctor.crm}</p>
                    <p className="text-gray-600 font-medium text-lg">{doctor.specialty}</p>
                  </div>

                  {/* Quote destacada */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
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
                      href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Medicina Geral."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Agendar Consulta</span>
                    </a>
                    <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <span>Saiba Mais</span>
                    </button>
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
              Processo simples e seguro para cuidar da sua saúde
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
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Consulte</h3>
              <p className="text-gray-600 leading-relaxed">
                Videoconsulta segura com médico de medicina de família. 
                Opções de 20 ou 40 minutos, conforme sua necessidade.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receba</h3>
              <p className="text-gray-600 leading-relaxed">
                Receita médica digital válida, laudos e orientações personalizadas 
                para seu cuidado contínuo.
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
              Dúvidas sobre <span className="gradient-text">Medicina de Família</span>
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
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agende sua consulta com nossos médicos de medicina de família e dê o primeiro passo 
              para uma vida mais equilibrada e saudável.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Medicina Geral."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
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
                <Stethoscope className="w-4 h-4" />
                <span>Especialistas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medicina;

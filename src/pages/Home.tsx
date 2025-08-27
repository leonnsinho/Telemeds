import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Activity, 
  Users, 
  Clock, 
  Shield, 
  Star,
  Check,
  ChevronDown,
  MessageCircle,
  Calendar,
  X,
  Instagram,
  Facebook,
  Info,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Bone
} from 'lucide-react';
import WaveDivider from '../components/WaveDivider';
import medicoImage from '../assets/images/medico_serio.svg';

const Home: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState<boolean>(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSpecialtySelect = (specialty: any) => {
    if (specialty.available) {
      setSelectedSpecialty(specialty.title);
      navigate(specialty.path);
    }
  };

  const specialties = [
    {
      icon: Brain,
      title: 'Psiquiatria',
      description: 'Cuidado especializado para saúde mental e transtornos psiquiátricos.',
      path: '/psiquiatria',
      available: true,
      detailedInfo: {
        symptoms: ['Ansiedade', 'Depressão', 'Transtornos de humor', 'Distúrbios do sono'],
        duration: '50-60 minutos',
        nextAvailable: 'Hoje às 14:30'
      }
    },
    {
      icon: Heart,
      title: 'Psicologia',
      description: 'Apoio psicológico e terapia para bem-estar emocional.',
      path: '/psico',
      available: true,
      detailedInfo: {
        symptoms: ['Estresse', 'Relacionamentos', 'Autoestima', 'Traumas'],
        duration: '50 minutos',
        nextAvailable: 'Hoje às 16:00'
      }
    },
    {
      icon: Activity,
      title: 'Endocrinologia',
      description: 'Tratamento de distúrbios hormonais e metabólicos.',
      path: '/endo',
      available: true,
      detailedInfo: {
        symptoms: ['Diabetes', 'Tireoide', 'Obesidade', 'Hormônios'],
        duration: '40-50 minutos',
        nextAvailable: 'Amanhã às 09:00'
      }
    },
    {
      icon: Users,
      title: 'Clínica Médica & Medicina de Família',
      description: 'Atendimento médico abrangente e cuidado contínuo para toda a família.',
      path: '/psiquiatria',
      available: true,
      detailedInfo: {
        symptoms: ['Check-up', 'Sintomas gerais', 'Prevenção', 'Acompanhamento familiar', 'Cuidados básicos', 'Exames'],
        duration: '30-50 minutos',
        nextAvailable: 'Hoje às 14:00'
      }
    },
    {
      icon: Users,
      title: 'Ginecologia',
      description: 'Saúde feminina com foco em prevenção e tratamento.',
      path: '/ginecologia',
      available: false,
      detailedInfo: {
        symptoms: ['Consulta ginecológica', 'Prevenção', 'Saúde da mulher'],
        duration: '40-50 minutos',
        nextAvailable: 'Em breve'
      }
    },
    {
      icon: Bone,
      title: 'Ortopedia',
      description: 'Tratamento de problemas ósseos, articulares e musculares.',
      path: '/ortopedia',
      available: false,
      detailedInfo: {
        symptoms: ['Dores articulares', 'Lesões esportivas', 'Problemas posturais', 'Fraturas'],
        duration: '40-50 minutos',
        nextAvailable: 'Em breve'
      }
    }
  ];

  // Especialidades para seleção rápida no hero
  const quickSpecialties = [
    { 
      icon: Brain, 
      title: 'Psiquiatria', 
      path: '/psiquiatria', 
      available: true,
      description: 'Ansiedade, depressão e saúde mental'
    },
    { 
      icon: Heart, 
      title: 'Psicologia', 
      path: '/psico', 
      available: true,
      description: 'Terapia e bem-estar emocional'
    },
    { 
      icon: Activity, 
      title: 'Endocrinologia', 
      path: '/endo', 
      available: true,
      description: 'Diabetes, tireoide e hormônios'
    },
    { 
      icon: Users, 
      title: 'Clínica Geral', 
      path: '/clinica-geral', 
      available: false,
      description: 'Consultas gerais e check-ups'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Atendimento 100% Digital',
      description: 'Consultas online com médicos qualificados, sem sair de casa.'
    },
    {
      icon: Users,
      title: 'Sem Filas ou Deslocamentos',
      description: 'Economize tempo, consulte de onde estiver.'
    },
    {
      icon: Shield,
      title: 'Acessível e Confiável',
      description: 'Preços justos e segurança total em suas consultas.'
    },
    {
      icon: Star,
      title: 'Médicos Experientes',
      description: 'Profissionais com experiência comprovada e CRM ativo.'
    }
  ];

  const plans = [
    {
      name: 'Cuidar+ Telemeds Familiar & Amigos – Mensal',
      price: 'R$ 24,90',
      period: '/mês',
      description: 'Assinatura mensal para você e até 5 pessoas',
      features: [
        'Você + até 5 familiares ou amigos',
        'Descontos de R$20 a R$50 em consultas',
        'Benefícios em farmácias parceiras',
        'Vantagens em parceiros digitais',
        'Acesso imediato sem contrato longo'
      ],
      highlight: true,
      link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=012e8183531e44e2bfa325bc8b8d8813'
    },
    {
      name: 'Cuidar+ Telemeds Familiar & Amigos – Anual',
      price: 'R$ 20,00',
      period: '/mês*',
      description: 'Plano anual com economia para até 5 pessoas',
      features: [
        'Você + até 5 familiares ou amigos',
        'Descontos de R$20 a R$50 em consultas',
        'Benefícios em farmácias parceiras',
        'Vantagens exclusivas em parceiros digitais',
        'Economia de R$4,90/mês vs plano mensal'
      ],
      highlight: false,
      link: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=a691f77e7b7244bfb25126dcc5e4e49c'
    }
  ];

  const testimonials = [
    {
      name: 'Consuelo Valladao',
      rating: 5,
      comment: 'Gostaria de agradecer imensamente ao Dr. Bruno Hess pelo excelente atendimento de sempre. Muito atencioso, calmo, explica tudo da melhor forma possível, médico muito humano e que sempre visa o melhor para seus pacientes. Muito obrigada!',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Karla Alves',
      rating: 5,
      comment: 'Atendimento excelente, me escutou, foi paciente, e tentou me ajudar de todas as formas, obrigada Dr Renan',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Luana Fernanda',
      rating: 5,
      comment: 'Fui muito bem atendida pelo Doutor Bruno Hees, atencioso e cuidadoso com o meu caso, agradeço e super indico!',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Raquel Rodrigues Soares',
      rating: 5,
      comment: 'Ótimo médico vou retorna a consulta pois até momento o meu outro médico da minha cidade me fez muito uso de medição e por isso ando mal mas creio que vou fica bem gostei do atendimento vou retorna para uma consulta mais profunda',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Debora Vasconcellos',
      rating: 5,
      comment: 'Me consultei com Dr. Bruno, atendimento excelente, me ouviu, me acolheu, e fez eu me sentir segura, passou o tratamento que eu precisava! Estou muito satisfeita!',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Julia Souza',
      rating: 5,
      comment: 'Atendimento muito bom, passei em consulta com o Dr Bruno e ele super atencioso e me auxiliou no que precisava',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Andre Fernandes',
      rating: 5,
      comment: 'A consulta superou minhas expectativas. Gostaria de agradecer pelo atendimento cuidadoso, mesmo que online, prestado por toda equipe e ao Dr. Bruno Hees Toews',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Rafael Nobre',
      rating: 5,
      comment: 'Muito bom atendimento desde o início e toda a atenção por parte do Dr. Bruno.',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'July Vicentini',
      rating: 5,
      comment: 'Excelente atendimento, o Dr. Rennan é muito atencioso e dedicado à sua profissão, me ajudou muito quando mais precisava para equilibrar minhas emoções.',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Gigi M.',
      rating: 5,
      comment: 'Tive uma consulta com o Dr. Rennan Hollen, que foi muito prestativo e atencioso. Como foi uma consulta rápida, me ajudou muito e explicou tudo muito bem. Adorei esta consulta prática e eficiente!',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Natanael Alves Silva de Holanda',
      rating: 5,
      comment: 'Fui atendido pelo Dr. Rennan Hollen, foi muito atencioso e prestativo, realmente tentou compreender minha condição para prescrever um tratamento eficaz.',
      specialty: 'Psiquiatria',
      verified: true
    },
    {
      name: 'Eduardo dos Santos van Landuyt',
      rating: 5,
      comment: 'Excelente atendimento, cordial e informativo! O Dr. Bruno Hees demonstrou ser um excelente profissional. Adorei!',
      specialty: 'Psiquiatria',
      verified: true
    }
  ];

  // Funções do carrossel
  const testimonialsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Detecta se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextTestimonials = () => {
    setIsPaused(true);
    setCurrentTestimonialIndex((prev) => 
      prev >= totalPages - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsPaused(false), 10000); // Pausa por 10 segundos após interação manual
  };

  const prevTestimonials = () => {
    setIsPaused(true);
    setCurrentTestimonialIndex((prev) => 
      prev <= 0 ? totalPages - 1 : prev - 1
    );
    setTimeout(() => setIsPaused(false), 10000); // Pausa por 10 segundos após interação manual
  };

  // Auto-play do carrossel (opcional)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonials();
      }, 5000); // Muda a cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [currentTestimonialIndex, isPaused]);

  const faqItems = [
    {
      question: 'Como funciona a consulta online?',
      answer: 'A consulta é realizada por chat ou videochamada com médicos qualificados.'
    },
    {
      question: 'As receitas têm validade legal?',
      answer: 'Sim! Todas as receitas são digitais e têm validade legal em todo território nacional, conforme regulamentação do CFM.'
    },
    {
      question: 'Posso usar meu plano de saúde?',
      answer: 'Atualmente não trabalhamos com convênios, mas nossos preços são acessíveis e você pode solicitar reembolso ao seu plano.'
    },
    {
      question: 'E se eu precisar de exames?',
      answer: 'O médico pode solicitar exames durante a consulta. Você pode realizá-los em qualquer laboratório de sua preferência.'
    },
    {
      question: 'Qual é o tempo de duração da consulta?',
      answer: 'As consultas têm duração a partir de 20 minutos, tempo suficiente para uma avaliação completa e esclarecimento de dúvidas.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen gradient-primary pt-18 sm:pt-22 lg:pt-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        
        {/* Container centralizado com margens padrão */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          {/* Layout em duas colunas */}
          <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:items-stretch py-12 sm:py-16 lg:py-0">
            {/* Coluna do conteúdo - lado esquerdo */}
            <div className="w-full lg:w-2/5 flex items-center justify-center z-10">
              {/* Modal de Seleção de Especialidades - Otimizado para Mobile */}
              <div className="specialty-selection-modal specialty-card w-full max-w-sm lg:max-w-md rounded-2xl lg:rounded-3xl p-6 sm:p-7 lg:p-6 mx-4 lg:mx-0">
                <div className="text-center mb-6 sm:mb-7 lg:mb-5">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-2">
                    O que você precisa hoje?
                  </h2>
                  <p className="text-gray-600 text-xs lg:text-sm">
                    Selecione a especialidade e agende sua consulta online
                  </p>
                </div>

                {/* Lista de Especialidades */}
                <div className="space-y-3 sm:space-y-3.5 lg:space-y-2 mb-6 sm:mb-7 lg:mb-5">
                  {quickSpecialties.filter(specialty => specialty.available).map((specialty, index) => {
                    const IconComponent = specialty.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSpecialtySelect(specialty)}
                        className={`specialty-option w-full text-left p-3 sm:p-3.5 lg:p-3 rounded-lg lg:rounded-xl border-2 transition-all duration-200 border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer ${
                          selectedSpecialty === specialty.title ? 'selected border-blue-400 bg-blue-50' : ''}`}
                      >
                        <div className="flex items-center space-x-2.5 lg:space-x-3">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center bg-blue-100">
                            <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                              {specialty.title}
                            </h3>
                            <p className="text-xs text-gray-600 truncate">
                              {specialty.description}
                            </p>
                          </div>
                          <div className="text-green-600 flex-shrink-0">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Botão de Ação Principal */}
                <div className="space-y-3 sm:space-y-3.5 lg:space-y-3 pt-2 sm:pt-3">
                  <Link 
                    to="/agendamento"
                    className="expand-button w-full text-white px-4 lg:px-6 py-3 sm:py-3.5 lg:py-3 rounded-lg lg:rounded-xl text-base lg:text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:scale-105"
                  >
                    <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>Consultar Agora</span>
                  </Link>
                  <button 
                    onClick={() => {
                      const planosSection = document.querySelector('.section-planos');
                      if (planosSection) {
                        planosSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full border-2 border-gray-300 text-gray-700 px-4 lg:px-6 py-3 sm:py-3.5 lg:py-3 rounded-lg lg:rounded-xl text-base lg:text-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    Ver Planos
                  </button>
                </div>
              </div>
            </div>

            {/* Coluna da imagem - lado direito - Hidden em mobile */}
            <div className="hidden lg:block w-full lg:w-3/5 relative pt-0 overflow-visible flex-1 lg:flex-none">
              <div className="absolute inset-0 -right-4 sm:-right-8 lg:-right-16">
                <img
                  src={medicoImage}
                  alt="Médico profissional"
                  className="hero-image-positioned w-full object-contain object-top scale-110"
                  style={{ 
                    transform: 'translateY(0px)',
                    objectPosition: 'center top',
                    width: 'calc(100% + 1rem)',
                    minHeight: '300px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <WaveDivider 
          className="absolute bottom-0" 
          dualLayer={true}
          heroColor="#E8DAEB"
          color="#ffffff"
        />
      </section>

      {/* Especialidades */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossas <span className="gradient-text">Especialidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento especializado com médicos qualificados em diversas áreas da medicina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <div
                  key={index}
                  className={`specialty-card rounded-3xl p-6 cursor-pointer transition-all duration-300 ${
                    specialty.available ? '' : 'opacity-75'
                  } ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  {/* Header do Card */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="card-icon-container w-14 h-14 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      {specialty.available && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          Disponível
                        </span>
                      )}
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <svg className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Conteúdo Principal */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Informações Expandidas */}
                  {isExpanded && specialty.detailedInfo && (
                    <div className="detailed-info border-t border-gray-100 pt-4 mt-4">
                      <div className="space-y-3">
                        {/* Sintomas/Condições */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Tratamos:</h4>
                          <div className="flex flex-wrap gap-1">
                            {specialty.detailedInfo.symptoms.map((symptom, idx) => (
                              <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {symptom}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Informações da Consulta */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div>
                            <span className="text-gray-500">Duração:</span>
                            <p className="font-medium text-gray-900">{specialty.detailedInfo.duration}</p>
                          </div>
                        </div>

                        {/* Próxima Disponibilidade */}
                        <div className="bg-green-50 p-3 rounded-lg">
                          <span className="text-green-600 text-xs font-medium">Próxima disponibilidade:</span>
                          <p className="text-green-800 font-semibold text-sm">{specialty.detailedInfo.nextAvailable}</p>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex space-x-2 pt-2">
                          {specialty.available ? (
                            <>
                              <Link 
                                to="/agendamento"
                                className="expand-button flex-1 text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200"
                              >
                                <Calendar className="w-4 h-4" />
                                <span>Consultar</span>
                              </Link>
                              <Link
                                to={specialty.path}
                                className="border-2 border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                              >
                                Ver Detalhes
                              </Link>
                            </>
                          ) : (
                            <button className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-xl text-sm font-semibold cursor-not-allowed">
                              Em breve
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Estado Collapsed */}
                  {!isExpanded && (
                    <div className="flex items-center justify-between">
                      {specialty.available ? (
                        <span className="text-blue-600 font-semibold text-sm">
                          Clique para mais detalhes
                        </span>
                      ) : (
                        <span className="text-gray-500 font-semibold text-sm">
                          Em breve
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider 
        gradientFrom="#C5E4F6" 
        gradientTo="#E5D8F0" 
        dualLayer 
        heroGradientFrom="#C5E4F6" 
        heroGradientTo="#E5D8F0"
      />

      {/* Benefícios */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="gradient-text">Telemeds?</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Sua jornada de cuidado digital em 4 passos simples
            </p>
          </div>

          {/* Timeline Horizontal */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative pt-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="relative fade-in">
                    {/* Card Container */}
                    <div className="timeline-benefit-card">
                      {/* Número do passo */}
                      <div className="absolute -top-3 left-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20">
                        {index + 1}
                      </div>
                      
                      {/* Ícone principal */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-50 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-2xl"></div>
                          <IconComponent className="w-8 h-8 text-blue-600 relative z-10" />
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="timeline-card-content">
                        <h3 className="timeline-card-title">
                          {benefit.title}
                        </h3>
                        <p className="timeline-card-description">
                          {benefit.description}
                        </p>
                      </div>
                      
                      {/* Indicador de progresso */}
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i <= index 
                                  ? 'bg-gradient-to-r from-blue-500 to-teal-500' 
                                  : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Seta conectora (apenas desktop) */}
                    {index < benefits.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-400 flex items-center justify-center shadow-lg">
                          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-gray-700 mb-4 font-medium">
                Pronto para revolucionar seu cuidado com a saúde?
              </p>
              <Link 
                to="/agendamento"
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Comece Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* Planos - Design Horizontal Profissional */}
      <section className="section-padding bg-gray-50 section-planos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha seu <span className="gradient-text">Plano</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexibilidade e economia para cuidar da sua saúde da melhor forma
            </p>
          </div>

          {/* Layout Horizontal dos Planos */}
          <div className="space-y-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl lg:rounded-3xl plan-card-hover ${
                  plan.highlight
                    ? 'popular-plan-gradient shadow-2xl'
                    : 'bg-white border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Badge para plano popular - Reposicionado para mobile */}
                {plan.highlight && (
                  <div className="absolute top-3 right-3 lg:top-6 lg:right-6 z-10">
                    <div className="bg-yellow-400 text-blue-900 px-2 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                      ⭐ <span className="hidden sm:inline">Mais Popular</span><span className="sm:hidden">Popular</span>
                    </div>
                  </div>
                )}

                {/* Conteúdo Principal */}
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
                  {/* Seção do Preço e Nome - Lado Esquerdo */}
                  <div className={`lg:w-1/2 p-4 sm:p-6 lg:p-12 flex flex-col justify-center text-center lg:text-left ${
                    plan.highlight 
                      ? 'text-white' 
                      : 'bg-gradient-to-br from-gray-50 to-gray-100'
                  }`}>
                    <div className="space-y-2 lg:space-y-4">
                      <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                        plan.highlight ? 'text-white' : 'text-gray-900'
                      }`}>
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline justify-center lg:justify-start">
                        <span className={`text-3xl sm:text-4xl lg:text-6xl font-black ${
                          plan.highlight ? 'text-white' : 'text-blue-600'
                        }`}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className={`text-sm sm:text-lg lg:text-2xl font-medium ml-1 lg:ml-2 ${
                            plan.highlight ? 'text-blue-100' : 'text-gray-600'
                          }`}>
                            {plan.period}
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-sm sm:text-base lg:text-lg ${
                        plan.highlight ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {plan.description}
                      </p>

                      {/* Botão CTA Principal */}
                      <div className="pt-2 lg:pt-4">
                        <a
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block w-full lg:w-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 text-center ${
                            plan.highlight
                              ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl'
                              : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                          }`}
                        >
                          {plan.highlight ? 'Assinar Cuidar +' : 'Assinar Cuidar + Anual'}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Seção de Features - Centro */}
                  <div className="lg:w-1/2 p-4 sm:p-6 lg:p-12">
                    <h4 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 lg:mb-6 ${
                      plan.highlight ? 'text-white' : 'text-gray-900'
                    }`}>
                      O que está incluído:
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-2.5 sm:gap-3 lg:gap-4 lg:grid-cols-2">
                      {plan.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2.5 lg:space-x-3">
                          <div className={`flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center ${
                            plan.highlight 
                              ? 'bg-green-400 text-green-900' 
                              : 'bg-green-100 text-green-600'
                          }`}>
                            <Check className="w-3 h-3 lg:w-4 lg:h-4 font-bold" />
                          </div>
                          <span className={`font-medium text-xs sm:text-sm lg:text-base ${
                            plan.highlight ? 'text-white' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Valor destacado para plano anual */}
                    {!plan.highlight && plan.name.includes('Anual') && (
                      <div className="mt-4 sm:mt-6 lg:mt-8 p-3 lg:p-4 bg-blue-50 rounded-xl lg:rounded-2xl">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-xs sm:text-sm lg:text-base text-gray-700">Economia vs Plano Mensal:</span>
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">R$4,90/mês</span>
                        </div>
                      </div>
                    )}

                    {/* Valor destacado para plano mensal popular */}
                    {plan.highlight && (
                      <div className="mt-4 sm:mt-6 lg:mt-8 p-3 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center justify-between text-white">
                          <span className="font-medium text-xs sm:text-sm lg:text-base">Cobertura Familiar:</span>
                          <span className="text-lg sm:text-xl lg:text-2xl font-bold text-green-300">Até 6 pessoas</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Seção de Benefícios Gerais */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">100% Seguro</h4>
                <p className="text-gray-600">Plataforma certificada e criptografada</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Disponível 24/7</h4>
                <p className="text-gray-600">Agende quando quiser, onde estiver</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Especialistas</h4>
                <p className="text-gray-600">Médicos com CRM ativo e experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nota sobre o plano anual */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-blue-600 mr-2" />
            <span className="text-lg font-semibold text-blue-800">Informação importante</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>*Plano Anual:</strong> No Cuidar+ Telemeds Familiar & Amigos Anual, o valor de R$ 20,00/mês é cobrado mensalmente no cartão de crédito durante 12 meses (total R$ 240,00/ano), 
            oferecendo economia de R$4,90 por mês comparado ao plano mensal. Cobertura para você + até 5 familiares ou amigos.
          </p>
        </div>
      </section>

  {/* Avaliações do Google */}
      <section className="section-padding-large gradient-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 slide-up">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-8"
              />
              <span className="text-2xl font-bold text-gray-900">Avaliações</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que nossos <span className="gradient-text">pacientes</span> dizem
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Avaliações reais de quem já experimentou nosso atendimento
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">5.0</span>
              <span className="text-gray-600">(155 avaliações)</span>
            </div>
          </div>

          {/* Carrossel de Testimonials */}
          <div className="relative">
            {/* Status do auto-play */}
            <div className="absolute top-0 right-0 z-20">
              <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                isPaused 
                  ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                  : 'bg-green-100 text-green-800 border border-green-200'
              }`}>
                {isPaused ? '⏸️ Pausado' : '▶️ Auto-play'}
              </div>
            </div>
            {/* Botões de navegação */}
            <button
              onClick={prevTestimonials}
              className="carousel-nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300 group hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>
            
            <button
              onClick={nextTestimonials}
              className="carousel-nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all duration-300 group hidden md:flex"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>

            {/* Grid de testimonials */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1200 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentTestimonialIndex * 100}%)`
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const startIndex = pageIndex * testimonialsPerPage;
                  const pageTestimonials = testimonials.slice(startIndex, startIndex + testimonialsPerPage);
                  
                  return (
                    <div 
                      key={pageIndex} 
                      className="w-full flex-shrink-0"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pageTestimonials.map((testimonial, index) => (
                          <div key={`${pageIndex}-${index}`} className="bg-white rounded-2xl p-6 shadow-lg card-hover transform transition-all duration-500 ease-out hover:scale-105">
                            {/* Header com avaliação */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>

                            {/* Comentário */}
                            <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-4">
                              "{testimonial.comment}"
                            </p>

                            {/* Footer com usuário */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div>
                                  <h4 className="font-semibold text-gray-900 text-sm">
                                    {testimonial.name}
                                  </h4>
                                </div>
                              </div>
                              {testimonial.verified && (
                                <div className="flex items-center space-x-1">
                                  <Shield className="w-4 h-4 text-green-500" />
                                  <span className="text-xs text-green-600 font-medium">Verificado</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Indicadores de página */}
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentTestimonialIndex(index);
                    setTimeout(() => setIsPaused(false), 10000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonialIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Link para ver mais no Google */}
          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?sca_esv=fd80f86e9ec25f50&rlz=1C5CHFA_enBR1145BR1161&sxsrf=AE3TifOeQIuTxky3U4uJEHEouLPK51mblg:1754654304211&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-ExqmaskPORmfmGhZnvaVi-Qj3QJ7uRynQ3L4zQtqnwMeCJqZtkCM9uVxzrOD34bMnywbuF8wiGU4vuMndoJ_jQddQsWE&q=TeleMeds+Opiniones&sa=X&ved=2ahUKEwjl_IXUlPuOAxVKrZUCHYKvATEQ0bkNegQIIxAE&biw=1536&bih=730&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Google" 
                className="h-5"
              />
              <span>Ver todas as avaliações no Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <WaveDivider flip color="#ffffff" />

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nosso atendimento
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
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
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openFAQ === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Não encontrou sua dúvida?</p>
            <a
              href="https://wa.me/5511960689201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Botão Flutuante de Saúde - Design Único */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Menu de opções - Design médico */}
        <div className={`absolute bottom-20 right-0 transition-all duration-500 ease-out ${
          isFloatingMenuOpen 
            ? 'opacity-100 transform translate-y-0 scale-100' 
            : 'opacity-0 transform translate-y-8 scale-95 pointer-events-none'
        }`}>
          <div className="flex flex-col space-y-4">
            {/* Agendar Consulta - Ícone de Stethoscope */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg border-l-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-700">Consultar Online Agora</span>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
              <Link 
                to="/agendamento"
                className="medical-action-button bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group-hover:rotate-12"
              >
                <div className="relative">
                  <Calendar className="w-6 h-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </Link>
            </div>

            {/* WhatsApp - Design médico */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg border-l-4 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-700">Suporte WhatsApp</span>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
              <a 
                href="https://wa.me/5511960689201" 
                target="_blank" 
                rel="noopener noreferrer"
                className="medical-action-button bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group-hover:-rotate-12"
              >
                <div className="relative">
                  <MessageCircle className="w-6 h-6 text-white animate-pulse" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
              </a>
            </div>

            {/* Instagram - Tema saúde */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg border-l-4 border-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-700">Siga-nos</span>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
              <a 
                href="https://www.instagram.com/telemedsbrasil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="medical-action-button bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group-hover:rotate-12"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* Facebook - Tema saúde */}
            <div className="group relative flex items-center justify-end">
              <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white rounded-lg px-3 py-2 shadow-lg border-l-4 border-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10 whitespace-nowrap">
                <span className="text-sm font-medium text-gray-700">Comunidade</span>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
              <a 
                href="https://www.facebook.com/telemedsbrasill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="medical-action-button bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group-hover:-rotate-12"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Botão principal - Design médico com cruz */}
        <button
          onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
          className={`medical-main-button relative w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out border-4 border-white ${
            isFloatingMenuOpen ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
          }`}
        >
          {/* Efeito de pulso médico */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 animate-ping opacity-30"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 animate-pulse opacity-50"></div>
          
          {/* Ícone central */}
          <div className={`relative z-10 flex items-center justify-center w-full h-full transition-all duration-300 ${
            isFloatingMenuOpen ? 'scale-110' : 'scale-100'
          }`}>
            {isFloatingMenuOpen ? (
              <div className="relative">
                <X className="w-7 h-7 text-white transition-all duration-300" />
                <div className="absolute inset-0 w-7 h-7 border-2 border-white rounded-full animate-spin opacity-50"></div>
              </div>
            ) : (
              <div className="relative">
                {/* Cruz médica */}
                <div className="w-7 h-7 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-6 bg-white rounded-full"></div>
                </div>
                {/* Indicador de saúde */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            )}
          </div>
          
          {/* Texto de ajuda */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {isFloatingMenuOpen ? 'Fechar menu' : 'Ajuda médica'}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
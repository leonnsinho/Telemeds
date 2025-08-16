import React from 'react';
import { Clock, Shield, Mail, MessageCircle, CheckCircle } from 'lucide-react';

const Agendamento: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20 sm:pt-24 lg:pt-28">
      {/* Header da página */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Agendamento de Consultas
            </h1>
            <p className="text-lg text-gray-600">
              Agende sua consulta de forma rápida e segura
            </p>
          </div>
        </div>
      </div>

      {/* Iframe de agendamento - Largura total */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Sistema de Agendamento Online
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                Selecione o profissional, data e horário desejado
              </p>
            </div>
            
            <div className="p-2 sm:p-4">
              <div className="relative w-full bg-gray-50 rounded-lg overflow-hidden" style={{ minHeight: '800px' }}>
                <iframe
                  src="https://app.clinicanasnuvens.com.br/agendaExterna?token=e518320a8add31db78213bad77b32e70"
                  className="w-full h-full min-h-[800px] border-0"
                  title="Sistema de Agendamento - Clínica nas Nuvens"
                  allow="fullscreen"
                  loading="lazy"
                  onLoad={(e) => {
                    const loadingElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (loadingElement) {
                      loadingElement.style.display = 'none';
                    }
                  }}
                />
                
                {/* Loading indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Carregando sistema de agendamento...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de informações embaixo */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Como funciona */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como funciona o agendamento?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Processo simples e rápido para agendar sua consulta online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Escolha o profissional
              </h3>
              <p className="text-gray-600">
                Selecione a especialidade e o médico que deseja consultar
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Selecione data e horário
              </h3>
              <p className="text-gray-600">
                Escolha o melhor horário na agenda disponível
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Preencha seus dados
              </h3>
              <p className="text-gray-600">
                Informe seus dados pessoais e informações sobre a consulta
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Confirme e finalize
              </h3>
              <p className="text-gray-600">
                Receba a confirmação por email e WhatsApp
              </p>
            </div>
          </div>

          {/* Informações de contato e ajuda */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Precisa de ajuda */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-600 mr-2" />
                Precisa de ajuda?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/5511960689201" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      +55 (11) 96068-9201
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a 
                      href="mailto:contato@telemeds.com.br"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      contato@telemeds.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horários de atendimento */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                Horários de Atendimento
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Segunda a Sexta:</span>
                  <span className="font-medium text-gray-900">8h às 20h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sábados e Domingos:</span>
                  <span className="font-medium text-gray-900">8h às 13h</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    💡 Dica: Consultas online disponíveis em todos os horários de funcionamento
                  </p>
                </div>
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-2" />
                Por que escolher a Telemeds?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Seguro e Confiável</p>
                    <p className="text-xs text-gray-600">Plataforma protegida e dados criptografados</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Médicos Qualificados</p>
                    <p className="text-xs text-gray-600">Profissionais experientes e especializados</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Praticidade Total</p>
                    <p className="text-xs text-gray-600">Consulte sem sair de casa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Suporte Completo</p>
                    <p className="text-xs text-gray-600">Ajuda antes, durante e após a consulta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Rápido */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Dúvidas Frequentes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Como funciona a consulta online?
                </h4>
                <p className="text-sm text-gray-600">
                  A consulta é realizada por videochamada. Você recebe o link por email e WhatsApp antes da consulta.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Posso cancelar ou remarcar?
                </h4>
                <p className="text-sm text-gray-600">
                  Sim, você pode cancelar ou remarcar com até 2 horas de antecedência pelo WhatsApp.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Preciso de algum aplicativo especial?
                </h4>
                <p className="text-sm text-gray-600">
                  Não, a consulta funciona diretamente no seu navegador, celular, tablet ou computador.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  A receita médica é válida?
                </h4>
                <p className="text-sm text-gray-600">
                  Sim, receitas digitais têm a mesma validade legal que receitas presenciais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;

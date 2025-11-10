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

      {/* Card de agendamento via WhatsApp */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border border-green-100">
            
            {/* Header do card */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-center">
              <MessageCircle className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold text-white mb-2">
                Agende via WhatsApp
              </h2>
              <p className="text-green-100 text-lg">
                Rápido, fácil e com atendimento personalizado
              </p>
            </div>
            
            {/* Conteúdo do card */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que agendar pelo WhatsApp?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nossa equipe está pronta para te ajudar a encontrar o melhor horário e especialista para sua consulta.
                </p>
              </div>

              {/* Benefícios */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-green-100">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Imediato</h4>
                  <p className="text-gray-600 text-sm">
                    Resposta em poucos minutos durante o horário comercial
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-blue-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Seguro e Confiável</h4>
                  <p className="text-gray-600 text-sm">
                    Dados protegidos e atendimento profissional
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-md border border-purple-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Fácil e Prático</h4>
                  <p className="text-gray-600 text-sm">
                    Sem complicações, direto no seu celular
                  </p>
                </div>
              </div>

              {/* Como funciona */}
              <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Como funciona?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Clique no botão</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Informe a especialidade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Escolha data/horário</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">Consulta agendada!</p>
                  </div>
                </div>
              </div>

              {/* Botão de ação */}
              <div className="text-center">
                <a
                  href="https://wa.me/5511984999066?text=Olá! Gostaria de agendar uma consulta. Podem me ajudar?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-7 h-7" />
                  <span>Agendar via WhatsApp</span>
                </a>
                
                <p className="text-gray-600 text-sm mt-4">
                  Ou ligue: <a href="tel:+5511984999066" className="text-green-600 font-medium hover:text-green-700">+55 (11) 98499-9066</a>
                </p>
                
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">Equipe online agora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de informações embaixo */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
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
                      href="https://wa.me/5511984999066" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      +55 (11) 98499-9066
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
                      href="mailto:contato@luximedi.com.br"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      contato@luximedi.com.br
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
                Por que escolher a Luximedi?
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
                  Sim, você pode cancelar ou remarcar com até 24 horas de antecedência pelo WhatsApp.
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

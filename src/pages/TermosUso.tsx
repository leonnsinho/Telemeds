import React from 'react';
import { FileText, Scale, Shield, Users, AlertTriangle, Clock, UserCheck, Lock, Eye, Gavel } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const TermosUso: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center gradient-primary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Termos de <span className="gradient-text">Uso</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Instrumento Particular de Prestação de Serviços Médicos por Telemedicina, 
              Termo de Consentimento Livre e Esclarecido e Política de Cancelamento e Reembolso
            </p>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0" />
      </section>

      {/* Conteúdo Principal */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Preâmbulo */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Preâmbulo e Qualificação das Partes</h2>
            </div>
            <div className="ml-16 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                O presente instrumento jurídico tem por escopo estabelecer, de forma inequívoca e juridicamente vinculante, 
                os termos e condições que regerão a relação contratual entre a <strong>TELEMEDS SERVIÇOS MÉDICOS DIGITAIS</strong> 
                (doravante denominada simplesmente "CONTRATADA" ou "TELEMEDS"), pessoa jurídica de direito privado devidamente 
                constituída e registrada sob as leis da República Federativa do Brasil, e o <strong>PACIENTE/USUÁRIO</strong> 
                (doravante denominado "CONTRATANTE"), pessoa natural capaz, que manifesta sua aquiescência aos presentes 
                termos mediante aceite eletrônico.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Considerando que:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>A telemedicina constitui modalidade legítima de prestação de serviços médicos, devidamente regulamentada pela Resolução CFM nº 2.314/2022</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>A Lei nº 13.709/2018 (LGPD) estabelece os parâmetros legais para o tratamento de dados pessoais</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>O Código de Defesa do Consumidor e o Código Civil Brasileiro constituem o arcabouço jurídico fundamental</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>A manifestação de vontade livre, específica, informada e inequívoca constitui requisito essencial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Definições */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Primeira - Das Definições e Conceitos Fundamentais</h2>
            </div>
            <div className="ml-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Dados Pessoais</h3>
                  <p className="text-gray-700 text-sm">
                    Toda informação relacionada à pessoa natural identificada ou identificável, incluindo nome, CPF, 
                    endereço, e-mail, telefone, dados de localização e identificadores eletrônicos.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Dados Pessoais Sensíveis</h3>
                  <p className="text-gray-700 text-sm">
                    Dados sobre origem racial, convicção religiosa, opinião política, dados de saúde, 
                    vida sexual, dados genéticos ou biométricos.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Telemedicina</h3>
                  <p className="text-gray-700 text-sm">
                    Exercício da medicina mediado por tecnologias de informação e comunicação, 
                    para assistência, educação, pesquisa e prevenção.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Teleconsulta</h3>
                  <p className="text-gray-700 text-sm">
                    Consulta médica remota, mediada por tecnologias, com médico e paciente 
                    localizados em diferentes espaços geográficos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Objeto Contratual */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Segunda - Do Objeto Contratual e Natureza dos Serviços</h2>
            </div>
            <div className="ml-16 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Constitui objeto do presente instrumento a prestação de serviços médicos especializados por meio de telemedicina, 
                compreendendo consultas, avaliações clínicas, orientações terapêuticas, prescrições medicamentosas e emissão de 
                documentos médicos, observados os limites éticos, técnicos e legais inerentes à modalidade.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">Os serviços incluem:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Comunicação síncrona por chat</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Comunicação por áudio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Comunicação audiovisual</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Compartilhamento seguro de documentos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Consentimento */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Terceira - Do Consentimento Livre e Esclarecido</h2>
            </div>
            <div className="ml-16 space-y-4">
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200">
                <h3 className="text-lg font-bold text-teal-800 mb-3">O CONTRATANTE manifesta seu CONSENTIMENTO para:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>A realização de consulta médica por telemedicina</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>O tratamento de seus dados pessoais e dados pessoais sensíveis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>O armazenamento seguro de suas informações clínicas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>A utilização dos canais de comunicação digital</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitações */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Quarta - Das Limitações e Contraindicações</h2>
            </div>
            <div className="ml-16 space-y-4">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ IMPORTANTE: A teleconsulta NÃO é adequada para:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Crises suicidas ou ideação suicida ativa</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Risco iminente de auto ou heteroagressão</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Quadros psicóticos agudos</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Emergências psiquiátricas</strong></span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Qualquer condição que exija intervenção médica imediata</strong></span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">Em situações de risco, o profissional poderá:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Interromper imediatamente a teleconsulta</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Orientar encaminhamento para serviço de emergência</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>Acionar serviços de emergência (SAMU - 192)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Direitos e Deveres */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Quinta - Dos Direitos e Deveres das Partes</h2>
            </div>
            <div className="ml-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-3">Direitos do Contratante (LGPD)</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Confirmação da existência de tratamento de dados</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Acesso aos dados pessoais objeto de tratamento</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Correção de dados incompletos ou inexatos</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Portabilidade dos dados</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Revogação do consentimento</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                    <h3 className="text-lg font-bold text-blue-800 mb-3">Deveres do Contratante</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fornecer informações verdadeiras e completas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Manter sigilo sobre dados de contato do médico</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Comparecer pontualmente às consultas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Comunicar cancelamento com 24h antecedência</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-lg font-bold text-purple-800 mb-3">Deveres da Contratada</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Prestar serviços com diligência e ética</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Manter sigilo profissional absoluto</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Implementar medidas de segurança</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Garantir direitos do titular (LGPD)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Notificar incidentes de segurança</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Proteção de Dados */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Sexta - Do Tratamento e Proteção de Dados</h2>
            </div>
            <div className="ml-16 space-y-4">
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                <h3 className="text-lg font-bold text-indigo-800 mb-3">Medidas de Segurança Implementadas:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Criptografia de dados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Autenticação multifator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Logs de auditoria</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm text-gray-700">Backup e recuperação</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Política de Cancelamento */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Cláusula Nona - Política de Cancelamento e Reembolso</h2>
            </div>
            <div className="ml-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-3">Antecedência +24h</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Reembolso integral</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Reagendamento gratuito</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">Antecedência -24h</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Retenção de 30%</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span>Devolução de 70%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Não Comparecimento</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Perda total do valor</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span>Sem reembolso</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Consultas de Retorno</h3>
                <p className="text-gray-700 mb-2">
                  <strong>A CONTRATADA NÃO OFERECE consultas de retorno gratuitas.</strong>
                </p>
                <p className="text-gray-700 text-sm">
                  Desconto promocional de 10% para retornos agendados em até 45 dias da última consulta, condicionado à disponibilidade.
                </p>
              </div>
            </div>
          </div>

          {/* Foro e Aceite */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Disposições Finais</h2>
            </div>
            <div className="ml-16 space-y-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Foro</h3>
                <p className="text-gray-700 text-sm">
                  Fica eleito o foro da Comarca da Capital do Estado onde situada a sede da CONTRATADA, 
                  com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                </p>
              </div>
              
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-3">⚖️ Validade Jurídica</h3>
                <p className="text-gray-700 font-medium">
                  O ACEITE ELETRÔNICO A ESTE DOCUMENTO POSSUI <strong>VALIDADE JURÍDICA PLENA</strong>, 
                  CONSTITUINDO TÍTULO EXECUTIVO EXTRAJUDICIAL NOS TERMOS DO ARTIGO 784, 
                  INCISO III, DO CÓDIGO DE PROCESSO CIVIL.
                </p>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Informações de Contato</h3>
            <div className="text-gray-700 mb-6 space-y-2">
              <p><strong>TeleMeds Brasil LTDA</strong></p>
              <p>Av. Paulista, 1636 - sala, 1504 - Cerqueira César, São Paulo - SP, 01310-200</p>
              <p>Brasil</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@telemeds.com.br"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
              >
                <span>contato@telemeds.com.br</span>
              </a>
              <a
                href="tel:+5511917983233"
                className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <span>+55 (11) 91798-3233</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermosUso;

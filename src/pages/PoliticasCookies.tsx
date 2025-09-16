import React from 'react';
import { Cookie, Shield, Settings, Eye, Info } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const PoliticasCookies: React.FC = () => {
  const cookieServices = [
    {
      name: 'Pagebuilder (Various)',
      type: 'Funcional',
      description: 'Usamos Pagebuilder (Various) para design de sites.',
      cookies: [
        { name: 'tTE', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tMQ', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tnsApp', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tTf', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tADe', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tADu', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tTDu', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tAE', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tC', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 't3D', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tPL', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' },
        { name: 'tTDe', expiry: 'persistente', purpose: 'Proporcionar um site responsivo' }
      ]
    },
    {
      name: 'Google AdSense',
      type: 'Estatísticas, Marketing',
      description: 'Usamos Google AdSense para mostrar anúncios.',
      cookies: [
        { name: '_gcl_ls', expiry: '-', purpose: 'Armazenar e rastrear interação' },
        { name: '_gcl_au', expiry: 'persistente', purpose: 'Armazenar e rastrear conversões' },
        { name: 'google_adsense_settings', expiry: 'persistente', purpose: 'Habilitar entrega de anúncios ou redirecionamento' }
      ]
    },
    {
      name: 'Google Analytics',
      type: 'Estatísticas',
      description: 'Usamos Google Analytics para estatísticas de sites.',
      cookies: [
        { name: '_ga', expiry: '2 anos', purpose: 'Rastreamento e contagem de visualizações de página' },
        { name: '_ga_*', expiry: '1 ano', purpose: 'Rastreamento e contagem de visualizações de página' }
      ]
    },
    {
      name: 'WordPress',
      type: 'Funcional',
      description: 'Usamos WordPress para desenvolvimento de sites.',
      cookies: [
        { name: 'wpEmojiSettingsSupports', expiry: 'sessão', purpose: 'Armazenar detalhes de navegador' },
        { name: 'wp-settings-time-*', expiry: '1 ano', purpose: 'Armazenar preferências de usuário' },
        { name: 'wp-settings-*', expiry: 'persistente', purpose: 'Armazenar preferências de usuário' },
        { name: 'wordpress_test_cookie', expiry: 'sessão', purpose: 'Verificar se cookies podem ser instalados' },
        { name: 'wordpress_logged_in_*', expiry: 'persistente', purpose: 'Manter usuários logados' }
      ]
    },
    {
      name: 'Complianz',
      type: 'Funcional',
      description: 'Usamos Complianz para gerenciamento de consentimento de cookies.',
      cookies: [
        { name: 'cmplz_consented_services', expiry: '365 dias', purpose: 'Salvar preferências de consentimento de cookies' },
        { name: 'cmplz_policy_id', expiry: '365 dias', purpose: 'Armazenar ID de política de cookies aceita' },
        { name: 'cmplz_marketing', expiry: '365 dias', purpose: 'Salvar preferências de consentimento de cookies' },
        { name: 'cmplz_statistics', expiry: '365 dias', purpose: 'Salvar preferências de consentimento de cookies' },
        { name: 'cmplz_preferences', expiry: '365 dias', purpose: 'Salvar preferências de consentimento de cookies' },
        { name: 'cmplz_functional', expiry: '365 dias', purpose: 'Salvar preferências de consentimento de cookies' },
        { name: 'cmplz_banner-status', expiry: '365 dias', purpose: 'Armazenar se o banner de cookies for recusado' }
      ]
    }
  ];

  const typeColors: { [key: string]: string } = {
    'Funcional': 'from-blue-500 to-blue-600',
    'Estatísticas': 'from-green-500 to-green-600',
    'Marketing': 'from-purple-500 to-purple-600',
    'Estatísticas, Marketing': 'from-orange-500 to-red-500',
    'Estatísticas (anônimas)': 'from-teal-500 to-teal-600'
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center gradient-primary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center">
                <Cookie className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Política de <span className="gradient-text">Cookies</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Esta Política de Cookies foi atualizada pela última vez em 27 de junho de 2025 
              e se aplica a cidadãos e residentes legais permanentes do Brasil.
            </p>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0" />
      </section>

      {/* Conteúdo Principal */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Introdução */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">1. Introdução</h2>
            </div>
            <div className="ml-16">
              <p className="text-gray-700 leading-relaxed text-lg">
                Nosso site, https://telemeds.com.br (doravante: "o site") usa cookies e outras tecnologias relacionadas 
                (por conveniência todas as tecnologias são referidas como "cookies"). Os cookies também são inseridos 
                por terceiros que contratamos. No documento abaixo informamos sobre o uso de cookies em nosso site.
              </p>
            </div>
          </div>

          {/* Definições */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
              <Cookie className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">O que são cookies?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Um cookie é um arquivo pequeno e simples que é enviado junto com páginas deste site e armazenado 
                pelo seu navegador no disco rígido do seu computador ou outro dispositivo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
              <Settings className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">O que são scripts?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Um script é uma parte de código de programa usado para fazer nosso site funcionar de forma 
                adequada e interativa. Este código é executado em nosso servidor ou em seu dispositivo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
              <Eye className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">O que é um web beacon?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Um web beacon (ou uma tag pixel) é um pequena e invisível texto ou imagem em um site que é usado 
                para monitorar o tráfego em um site.
              </p>
            </div>
          </div>

          {/* Tipos de Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">5. Tipos de Cookies</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">5.1 Cookies técnicos ou funcionais</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Alguns cookies garantem que certas partes do site funcionem corretamente e que suas preferências 
                    de usuário permaneçam conhecidas. Podemos inserir esses cookies sem o seu consentimento.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-3">5.2 Cookies analíticos</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Usamos cookies analíticos para otimizar a experiência do site para nossos usuários. 
                    Pedimos sua permissão para inserir cookies analíticos.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">5.3 Cookies de publicidade</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Neste site usamos cookies de publicidade, que fornecem informações sobre os resultados de campanhas. 
                    Esses cookies não serão usados para veicular anúncios personalizados.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-800 mb-3">5.4 Cookies de marketing/rastreamento</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    São usados para criar perfis de usuários para exibir publicidade ou para rastrear o usuário. 
                    Pedimos sua permissão para inseri-los.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200">
                  <h3 className="text-xl font-bold text-pink-800 mb-3">5.5 Mídia social</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Incluímos conteúdo de Instagram para promover páginas da web. Este conteúdo é incorporado 
                    com código derivado de Instagram e coloca cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies Inseridos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">6. Cookies Inseridos</h2>
            
            <div className="space-y-8">
              {cookieServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${typeColors[service.type] || 'from-gray-500 to-gray-600'}`}>
                        {service.type}
                      </span>
                    </div>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimento</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Função</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {service.cookies.map((cookie, cookieIndex) => (
                          <tr key={cookieIndex} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {cookie.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {cookie.expiry}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                              {cookie.purpose}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direitos dos Usuários */}
          <div className="mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">8. Seus direitos em relação aos dados pessoais</h2>
            </div>
            <div className="ml-16">
              <p className="text-gray-700 leading-relaxed mb-4">
                Você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>confirmação da existência de processamento;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>acesso aos dados;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>correção de dados incompletos, imprecisos ou desatualizados;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>anonimização, bloqueio ou exclusão de dados desnecessários;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>portabilidade dos dados para outro prestador de serviços;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>eliminação dos dados pessoais tratados com o consentimento do titular;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>informações sobre entidades públicas e privadas com as quais o controlador compartilhou dados;</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>informações sobre a possibilidade de não consentimento e sobre as consequências da negação.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">9. Detalhes de contato</h3>
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
                href="tel:+551151969958"
                className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <span>+55 (11) 5196-9958</span>
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              Esta Política de Cookies foi sincronizada com cookiedatabase.org em 28 de julho de 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticasCookies;

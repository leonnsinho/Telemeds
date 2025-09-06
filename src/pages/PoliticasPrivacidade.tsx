import React from 'react';
import { Shield, Lock, Eye, Database, Share2, Clock, FileText, Users } from 'lucide-react';
import WaveDivider from '../components/WaveDivider';

const PoliticasPrivacidade: React.FC = () => {
  const sections = [
    {
      id: 'quem-somos',
      title: 'Quem somos',
      icon: Users,
      content: 'O endereço do nosso site é: https://telemeds.com.br.'
    },
    {
      id: 'comentarios',
      title: 'Comentários',
      icon: FileText,
      content: `Quando os visitantes deixam comentários no site, coletamos os dados mostrados no formulário de comentários, além do endereço de IP e de dados do navegador do visitante, para auxiliar na detecção de spam.

Uma sequência anonimizada de caracteres criada a partir do seu e-mail (também chamada de hash) poderá ser enviada para o Gravatar para verificar se você usa o serviço. A política de privacidade do Gravatar está disponível aqui: https://automattic.com/privacy/. Depois da aprovação do seu comentário, a foto do seu perfil fica visível publicamente junto de seu comentário.`
    },
    {
      id: 'midia',
      title: 'Mídia',
      icon: Eye,
      content: 'Se você envia imagens para o site, evite enviar as que contenham dados de localização incorporados (EXIF GPS). Visitantes podem baixar estas imagens do site e extrair delas seus dados de localização.'
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: Database,
      content: `Ao deixar um comentário no site, você poderá optar por salvar seu nome, e-mail e site nos cookies. Isso visa seu conforto, assim você não precisará preencher seus dados novamente quando fizer outro comentário. Estes cookies duram um ano.

Se você tem uma conta e acessa este site, um cookie temporário será criado para determinar se seu navegador aceita cookies. Ele não contém nenhum dado pessoal e será descartado quando você fechar seu navegador.

Quando você acessa sua conta no site, também criamos vários cookies para salvar os dados da sua conta e suas escolhas de exibição de tela. Cookies de login são mantidos por dois dias e cookies de opções de tela por um ano. Se você selecionar "Lembrar-me", seu acesso será mantido por duas semanas. Se você se desconectar da sua conta, os cookies de login serão removidos.

Se você editar ou publicar um artigo, um cookie adicional será salvo no seu navegador. Este cookie não inclui nenhum dado pessoal e simplesmente indica o ID do post referente ao artigo que você acabou de editar. Ele expira depois de 1 dia.`
    },
    {
      id: 'midia-incorporada',
      title: 'Mídia incorporada de outros sites',
      icon: Share2,
      content: `Artigos neste site podem incluir conteúdo incorporado como, por exemplo, vídeos, imagens, artigos, etc. Conteúdos incorporados de outros sites se comportam exatamente da mesma forma como se o visitante estivesse visitando o outro site.

Estes sites podem coletar dados sobre você, usar cookies, incorporar rastreamento adicional de terceiros e monitorar sua interação com este conteúdo incorporado, incluindo sua interação com o conteúdo incorporado se você tem uma conta e está conectado com o site.`
    },
    {
      id: 'compartilhamento',
      title: 'Com quem compartilhamos seus dados',
      icon: Shield,
      content: 'Se você solicitar uma redefinição de senha, seu endereço de IP será incluído no e-mail de redefinição de senha.'
    },
    {
      id: 'retencao',
      title: 'Por quanto tempo mantemos os seus dados',
      icon: Clock,
      content: `Se você deixar um comentário, o comentário e os seus metadados são conservados indefinidamente. Fazemos isso para que seja possível reconhecer e aprovar automaticamente qualquer comentário posterior ao invés de retê-lo para moderação.

Para usuários que se registram no nosso site (se houver), também guardamos as informações pessoais que fornecem no seu perfil de usuário. Todos os usuários podem ver, editar ou excluir suas informações pessoais a qualquer momento (só não é possível alterar o seu username). Os administradores de sites também podem ver e editar estas informações.`
    },
    {
      id: 'direitos',
      title: 'Quais os seus direitos sobre seus dados',
      icon: Lock,
      content: 'Se você tiver uma conta neste site ou se tiver deixado comentários, pode solicitar um arquivo exportado dos dados pessoais que mantemos sobre você, inclusive quaisquer dados que nos tenha fornecido. Também pode solicitar que removamos qualquer dado pessoal que mantemos sobre você. Isto não inclui nenhuns dados que somos obrigados a manter para propósitos administrativos, legais ou de segurança.'
    },
    {
      id: 'envio-dados',
      title: 'Para onde seus dados são enviados',
      icon: Database,
      content: 'Comentários de visitantes podem ser marcados por um serviço automático de detecção de spam.'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center gradient-primary pt-0">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 gradient-secondary rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Política de <span className="gradient-text">Privacidade</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transparência e proteção dos seus dados pessoais são fundamentais para nós. 
              Conheça como coletamos, usamos e protegemos suas informações.
            </p>
            
            <div className="text-sm text-gray-600">
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0" />
      </section>

      {/* Conteúdo da Política */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="fade-in">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <div className="prose prose-lg max-w-none">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  {index < sections.length - 1 && (
                    <div className="mt-8 border-b border-gray-200"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contato */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dúvidas sobre nossa Política de Privacidade?
            </h3>
            <p className="text-gray-700 mb-6">
              Entre em contato conosco se tiver alguma questão sobre como tratamos seus dados pessoais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contato@telemeds.com.br"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
              >
                <span>contato@telemeds.com.br</span>
              </a>
              <a
                href="https://wa.me/5511917983233"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticasPrivacidade;

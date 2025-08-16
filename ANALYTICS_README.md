# 📊 Analytics & Tracking Setup

Este projeto está configurado com múltiplas plataformas de analytics e tracking para monitoramento completo do comportamento dos usuários.

## 🛠️ Plataformas Configuradas

### 1. **Google Analytics 4 (GA4)**
- **ID:** `G-TY8CCZXZ7E`
- **Funcionalidade:** Análise de tráfego, comportamento do usuário, conversões
- **Configuração:** Automática via gtag

### 2. **Google Tag Manager (GTM)**
- **ID:** `GTM-MZ6H6GFN`
- **Funcionalidade:** Gerenciamento centralizado de tags e scripts
- **Configuração:** Container carregado no head e body

### 3. **Google Ads (Conversão)**
- **ID:** `AW-17031617120`
- **Funcionalidade:** Tracking de conversões para campanhas do Google Ads
- **Configuração:** Integrado com GA4

### 4. **Meta Pixel (Facebook)**
- **ID:** `6439986205219636`
- **Funcionalidade:** Tracking para campanhas do Facebook/Instagram
- **Configuração:** Pixel base + eventos personalizados

### 5. **Facebook Domain Verification**
- **Code:** `2m5dczn8avbdsdozh71labs073en9`
- **Funcionalidade:** Verificação de domínio para Meta Business
- **Configuração:** Meta tag no head

### 6. **Hotjar**
- **ID:** `6447343`
- **Funcionalidade:** Heatmaps, gravações de sessão, feedback
- **Configuração:** Script assíncrono

## 🎯 Eventos Trackados

### Eventos Automáticos
- **Page Views:** Todas as páginas
- **Scroll:** Profundidade de rolagem
- **Clicks:** Links e botões importantes

### Eventos Personalizados Implementados
```typescript
// Agendamento de consulta
analytics.scheduleAppointment('psiquiatria', 150);

// Clique em botões
analytics.buttonClick('agendar', 'header');

// Seleção de especialidade
analytics.selectSpecialty('psicologia');

// Interação com FAQ
analytics.faqOpen('Como funciona a consulta online?');

// Clique no WhatsApp
analytics.whatsappClick('footer');

// Envio de formulário
analytics.formSubmit('contact_form');
```

## 📋 Como Usar o Tracking

### 1. **Importar o Analytics**
```typescript
import { analytics } from '../utils/analytics';
```

### 2. **Tracking de Botões**
```typescript
<button onClick={() => analytics.buttonClick('nome_botao', 'localizacao')}>
  Clique Aqui
</button>
```

### 3. **Tracking de Formulários**
```typescript
const handleSubmit = (e) => {
  e.preventDefault();
  analytics.formSubmit('contact_form');
  // Lógica do formulário...
};
```

### 4. **Tracking de Navegação**
```typescript
const handleNavigation = (page) => {
  analytics.menuNavigation(page);
  navigate(page);
};
```

## 🔧 Funções Disponíveis

### Eventos Básicos
- `analytics.pageView(pageName)`
- `analytics.buttonClick(buttonName, location)`
- `analytics.formSubmit(formName)`

### Eventos de Negócio
- `analytics.scheduleAppointment(specialty, value)`
- `analytics.selectSpecialty(specialty)`
- `analytics.whatsappClick(location)`

### Eventos de Engagement
- `analytics.faqOpen(question)`
- `analytics.testimonialView(author)`
- `analytics.menuNavigation(menuItem)`

### Eventos de Conversão
- `trackConversion(conversionId, value, currency)`
- `trackFacebookEvent(eventName, parameters)`

## 📊 Métricas Importantes

### Google Analytics
- Sessions
- Page Views
- Bounce Rate
- Conversion Rate
- User Flow

### Facebook Pixel
- Page Views
- Leads
- Purchases
- Custom Events

### Hotjar
- Heatmaps
- Session Recordings
- Conversion Funnels
- Form Analysis

## 🚀 Próximos Passos

1. **Configurar Goals no GA4:**
   - Agendamento de consultas
   - Preenchimento de formulários
   - Tempo de permanência

2. **Configurar Conversões no Google Ads:**
   - Agendamento = Conversão primária
   - Contato via WhatsApp = Conversão secundária

3. **Configurar Eventos Customizados no Facebook:**
   - Lead (formulário de contato)
   - Schedule (agendamento)
   - ViewContent (visualização de especialidades)

4. **Configurar Funnels no Hotjar:**
   - Homepage → Especialidade → Agendamento
   - Homepage → FAQ → Contato

## 🔍 Verificação

Para verificar se o tracking está funcionando:

1. **Google Analytics:** Real-time reports
2. **Facebook Pixel:** Facebook Pixel Helper (extensão Chrome)
3. **Google Tag Manager:** Preview mode
4. **Hotjar:** Recordings section

## 📝 Notas Importantes

- Todos os scripts estão configurados para carregar de forma assíncrona
- GDPR/LGPD compliance pode ser necessário dependendo da localização
- Testes devem ser feitos em ambiente de produção para validação completa
- IDs de conversão específicos devem ser configurados no Google Ads

## 🆘 Troubleshooting

Se algum tracking não estiver funcionando:

1. Verificar se os IDs estão corretos
2. Verificar console do navegador para erros
3. Usar ferramentas de debug específicas de cada plataforma
4. Verificar se não há ad blockers interferindo

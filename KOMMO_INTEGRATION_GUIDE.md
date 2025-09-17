# Guia de Integração: CTAs → Kommo CRM

## 📋 Objetivo
Implementar rastreamento de leads originados dos botões de agendamento das páginas de especialidades, enviando dados estruturados para o Kommo CRM antes do redirecionamento para WhatsApp.

## 🎯 Benefícios Esperados
- ✅ **Rastreamento preciso** de origem dos leads por especialidade
- ✅ **Dados estruturados** no Kommo para automações
- ✅ **ROI mensurado** por área médica específica
- ✅ **UX preservada** - tracking invisível ao usuário
- ✅ **Automações inteligentes** baseadas em especialidade

---

## 📊 Análise da Estrutura Atual

### Especialidades e CTAs Identificados:
1. **Home.tsx**: 4 botões gerais de agendamento
2. **Ginecologia.tsx**: 3 CTAs (hero, perfil médico, footer)
3. **Endocrinologia.tsx**: 3 CTAs (hero, perfil médico, footer)
4. **Medicina.tsx**: 3 CTAs (hero, perfil médico, footer)
5. **Psicologia.tsx**: 3 CTAs (hero, sessão, footer)
6. **Psiquiatria.tsx**: 2 CTAs (hero, footer)

### Posições dos CTAs por Página:
- **Hero Section**: Botão principal de destaque
- **Doctor Profile**: Botão específico do médico
- **Footer/CTA Section**: Chamada final para ação

---

## 🔧 Implementação Técnica

### 1. Configuração do Kommo

#### 1.1 Estrutura de Dados para Leads
```javascript
const leadData = {
  // Identificação da origem
  specialty: 'Ginecologia', // Dinâmico por página
  specialty_id: 1,          // ID numérico para automações
  
  // Contexto da página
  source: 'website_telemedicine',
  page_url: window.location.href,
  page_title: document.title,
  
  // Posicionamento do CTA
  cta_position: 'hero' | 'doctor-profile' | 'footer',
  cta_text: 'Agendar Consulta',
  
  // Dados técnicos
  timestamp: new Date().toISOString(),
  user_agent: navigator.userAgent,
  referrer: document.referrer,
  
  // UTM Parameters (se disponíveis)
  utm_source: null,
  utm_medium: null,
  utm_campaign: null
}
```

#### 1.2 Configuração no Kommo
```javascript
// config/kommo.js
export const KOMMO_CONFIG = {
  // Configuração da API
  apiUrl: 'https://[seu-subdominio].amocrm.com/api/v4',
  webhookUrl: 'https://hooks.amocrm.com/hooks/[seu-webhook-id]',
  accessToken: process.env.KOMMO_ACCESS_TOKEN, // Variável de ambiente
  
  // Mapeamento de especialidades
  specialties: {
    'home': { 
      id: 0, 
      name: 'Geral - Home',
      pipeline_id: 123,
      responsible_user_id: 456 
    },
    'ginecologia': { 
      id: 1, 
      name: 'Ginecologia',
      pipeline_id: 124,
      responsible_user_id: 457 
    },
    'endocrinologia': { 
      id: 2, 
      name: 'Endocrinologia',
      pipeline_id: 125,
      responsible_user_id: 458 
    },
    'medicina': { 
      id: 3, 
      name: 'Medicina Geral',
      pipeline_id: 126,
      responsible_user_id: 459 
    },
    'psicologia': { 
      id: 4, 
      name: 'Psicologia',
      pipeline_id: 127,
      responsible_user_id: 460 
    },
    'psiquiatria': { 
      id: 5, 
      name: 'Psiquiatria',
      pipeline_id: 128,
      responsible_user_id: 461 
    }
  },
  
  // Configurações de tracking
  tracking: {
    enabled: true,
    debug: process.env.NODE_ENV === 'development',
    timeout: 5000 // 5 segundos para envio
  }
}
```

### 2. Serviço de Tracking

#### 2.1 Utilitário Principal
```javascript
// utils/leadTracking.js
import { KOMMO_CONFIG } from '../config/kommo.js'

class LeadTracker {
  constructor() {
    this.isEnabled = KOMMO_CONFIG.tracking.enabled
    this.debug = KOMMO_CONFIG.tracking.debug
  }

  // Função principal para tracking
  async trackLead(specialty, ctaPosition, ctaText = 'Agendar Consulta') {
    if (!this.isEnabled) {
      if (this.debug) console.log('Lead tracking desabilitado')
      return
    }

    try {
      const leadData = this.buildLeadData(specialty, ctaPosition, ctaText)
      
      // Enviar para Kommo (sem bloquear UX)
      this.sendToKommo(leadData)
      
      // Opcional: Google Analytics
      this.sendToAnalytics(leadData)
      
      if (this.debug) {
        console.log('Lead tracked:', leadData)
      }
      
    } catch (error) {
      console.error('Erro no tracking de lead:', error)
      // Não bloquear a UX mesmo com erro
    }
  }

  // Construir dados do lead
  buildLeadData(specialty, ctaPosition, ctaText) {
    const specialtyConfig = KOMMO_CONFIG.specialties[specialty]
    
    return {
      // Dados da especialidade
      specialty: specialtyConfig?.name || specialty,
      specialty_id: specialtyConfig?.id || 0,
      specialty_key: specialty,
      
      // Contexto da página
      source: 'website_telemedicine',
      page_url: window.location.href,
      page_title: document.title,
      page_path: window.location.pathname,
      
      // CTA específico
      cta_position: ctaPosition,
      cta_text: ctaText,
      
      // Dados técnicos
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'direct',
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      
      // UTM Parameters
      ...this.getUTMParameters(),
      
      // Dados para Kommo
      pipeline_id: specialtyConfig?.pipeline_id,
      responsible_user_id: specialtyConfig?.responsible_user_id,
    }
  }

  // Extrair parâmetros UTM da URL
  getUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search)
    return {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    }
  }

  // Enviar para Kommo (assíncrono, não bloqueia UX)
  async sendToKommo(leadData) {
    // Timeout para não bloquear UX
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), KOMMO_CONFIG.tracking.timeout)
    
    try {
      const response = await fetch(KOMMO_CONFIG.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      if (this.debug) {
        console.log('Lead enviado para Kommo:', await response.json())
      }
      
    } catch (error) {
      if (error.name === 'AbortError') {
        console.warn('Timeout no envio para Kommo')
      } else {
        console.error('Erro ao enviar para Kommo:', error)
      }
    }
  }

  // Enviar para Google Analytics (backup)
  sendToAnalytics(leadData) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_generated', {
        event_category: 'telemedicine',
        event_label: leadData.specialty,
        custom_specialty: leadData.specialty_key,
        custom_cta_position: leadData.cta_position,
        custom_page_path: leadData.page_path
      })
    }
  }
}

// Instância singleton
export const leadTracker = new LeadTracker()

// Função helper para uso direto
export const trackLead = (specialty, ctaPosition, ctaText) => {
  return leadTracker.trackLead(specialty, ctaPosition, ctaText)
}
```

#### 2.2 Hook React (Opcional)
```javascript
// hooks/useLeadTracking.js
import { useCallback } from 'react'
import { trackLead } from '../utils/leadTracking'

export const useLeadTracking = (specialty) => {
  const handleCTAClick = useCallback((ctaPosition, ctaText) => {
    trackLead(specialty, ctaPosition, ctaText)
  }, [specialty])

  return { handleCTAClick }
}
```

### 3. Implementação nos Componentes

#### 3.1 Exemplo: Ginecologia.tsx
```jsx
import React, { useState } from 'react'
import { trackLead } from '../utils/leadTracking'
// ... outros imports

const Ginecologia: React.FC = () => {
  // ... código existente

  // Handler para tracking
  const handleCTAClick = (ctaPosition: string, ctaText: string = 'Agendar Consulta') => {
    trackLead('ginecologia', ctaPosition, ctaText)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* ... conteúdo existente ... */}
        
        {/* CTA Hero */}
        <a 
          href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Ginecologia."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCTAClick('hero', 'Agendar Consulta')}
          className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5" />
          <span>Agendar Consulta</span>
        </a>
      </section>

      {/* Doctor Profile Section */}
      <section>
        {/* ... conteúdo existente ... */}
        
        {/* CTA Doctor Profile */}
        <a 
          href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Ginecologia com a Dra. Marina."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCTAClick('doctor-profile', 'Agendar com Dra. Marina')}
          className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-base lg:text-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
        >
          <Calendar className="w-4 lg:w-5 h-4 lg:h-5" />
          <span>Agendar com Dra. Marina</span>
        </a>
      </section>

      {/* Footer CTA Section */}
      <section>
        {/* ... conteúdo existente ... */}
        
        {/* CTA Footer */}
        <a 
          href="https://wa.me/551151969958?text=Olá! Gostaria de agendar uma consulta de Ginecologia."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleCTAClick('footer', 'Agendar Consulta Agora')}
          className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
        >
          <Calendar className="w-5 h-5" />
          <span>Agendar Consulta Agora</span>
        </a>
      </section>
    </div>
  )
}

export default Ginecologia
```

### 4. Parâmetros UTM nos Links WhatsApp

#### 4.1 Estrutura UTM Sugerida
```javascript
// utils/whatsappUtils.js
import { KOMMO_CONFIG } from '../config/kommo'

export const generateWhatsAppURL = (specialty, ctaPosition, message) => {
  const baseURL = 'https://wa.me/551151969958'
  const specialtyConfig = KOMMO_CONFIG.specialties[specialty]
  
  // Parâmetros UTM para tracking
  const utmParams = new URLSearchParams({
    utm_source: 'website',
    utm_medium: 'cta_button',
    utm_campaign: 'telemedicine_booking',
    utm_content: `${specialty}_${ctaPosition}`,
    utm_term: specialtyConfig?.name || specialty
  })
  
  // URL completa com mensagem e UTMs
  const fullURL = `${baseURL}?text=${encodeURIComponent(message)}&${utmParams.toString()}`
  
  return fullURL
}

// Exemplo de uso:
// const url = generateWhatsAppURL('ginecologia', 'hero', 'Olá! Gostaria de agendar uma consulta de Ginecologia.')
```

### 5. Configuração do Google Analytics (Backup)

#### 5.1 Events Customizados
```javascript
// utils/analytics.js
export const trackSpecialtyLead = (specialty, ctaPosition, ctaText) => {
  if (typeof gtag !== 'undefined') {
    // Event principal
    gtag('event', 'lead_generated', {
      event_category: 'telemedicine_booking',
      event_label: specialty,
      custom_specialty: specialty,
      custom_cta_position: ctaPosition,
      custom_cta_text: ctaText,
      custom_page_url: window.location.href
    })
    
    // Event por especialidade
    gtag('event', `${specialty}_lead`, {
      event_category: 'specialty_leads',
      event_label: ctaPosition,
      cta_text: ctaText
    })
  }
}
```

---

## 🧪 Plano de Testes

### Fase 1: Teste Individual por Especialidade
1. **Ginecologia**: Testar os 3 CTAs
2. **Endocrinologia**: Testar os 3 CTAs  
3. **Medicina**: Testar os 3 CTAs
4. **Psicologia**: Testar os 3 CTAs
5. **Psiquiatria**: Testar os 2 CTAs

### Fase 2: Validação de Dados
- [ ] Lead recebido no Kommo
- [ ] Especialidade correta identificada
- [ ] Posição do CTA registrada
- [ ] Timestamp preciso
- [ ] Dados de origem (URL, referrer)
- [ ] UTM parameters (se aplicável)

### Fase 3: Teste de Performance
- [ ] Tempo de resposta não impacta UX
- [ ] Fallback em caso de erro
- [ ] Timeout funcionando
- [ ] Logs de debug apropriados

---

## 📋 Checklist de Implementação

### Setup Inicial
- [ ] Configurar webhook no Kommo
- [ ] Definir pipeline específico para leads WhatsApp
- [ ] Criar campos customizados para especialidade
- [ ] Configurar usuários responsáveis por especialidade

### Desenvolvimento
- [ ] Criar arquivo de configuração (`config/kommo.js`)
- [ ] Implementar serviço de tracking (`utils/leadTracking.js`)
- [ ] Criar utilitário para URLs WhatsApp (`utils/whatsappUtils.js`)
- [ ] Implementar backup Analytics (`utils/analytics.js`)

### Integração
- [ ] Modificar `Home.tsx` com tracking
- [ ] Modificar `Ginecologia.tsx` com tracking
- [ ] Modificar `Endocrinologia.tsx` com tracking
- [ ] Modificar `Medicina.tsx` com tracking
- [ ] Modificar `Psicologia.tsx` com tracking  
- [ ] Modificar `Psiquiatria.tsx` com tracking

### Validação
- [ ] Testar cada CTA individualmente
- [ ] Verificar dados no Kommo
- [ ] Validar performance/tempo de resposta
- [ ] Testar fallbacks de erro
- [ ] Documentar métricas e KPIs

---

## 📊 KPIs e Métricas

### Métricas Primárias
1. **Taxa de Conversão por Especialidade**
   - Leads gerados / Visitantes únicos da página
   - Meta: >2% conversão geral

2. **Distribuição de CTAs Mais Efetivos**
   - Hero vs Doctor Profile vs Footer
   - Meta: Identificar padrão por especialidade

3. **Quality Score dos Leads**
   - Leads que viram agendamentos reais
   - Meta: >60% leads qualificados

### Métricas Secundárias
4. **Tempo de Resposta do Tracking**
   - Latência do envio para Kommo
   - Meta: <2 segundos (95% dos casos)

5. **Taxa de Sucesso do Tracking**
   - Envios bem-sucedidos / Total de cliques
   - Meta: >98% sucesso

6. **Origem dos Leads**
   - Tráfego orgânico vs pago vs direto
   - Meta: Otimizar canais mais efetivos

---

## 🚀 Roadmap de Evolução

### Fase 1 (Semana 1-2): Setup Básico
- Implementação core do tracking
- Integração com Kommo
- Testes unitários

### Fase 2 (Semana 3): Otimizações
- Analytics backup
- UTM parameters
- Performance tuning

### Fase 3 (Semana 4): Análise
- Coleta de dados iniciais
- Ajustes baseados em performance
- Documentação final

### Futuro (Mês 2+): Automações
- Automações no Kommo por especialidade
- A/B testing de CTAs
- Integração com calendário de agendamentos
- Chat automation por especialidade

---

## 📞 Próximos Passos Imediatos

1. **Configurar Kommo**
   - Criar webhook endpoint
   - Definir campos customizados
   - Configurar pipelines por especialidade

2. **Implementar Código**
   - Começar pela estrutura base (`config/kommo.js`)
   - Implementar serviço de tracking
   - Testar com uma especialidade primeiro

3. **Validar Integração**
   - Teste manual completo
   - Verificação de dados no Kommo
   - Performance testing

**Quer que eu comece implementando alguma parte específica deste plano?**
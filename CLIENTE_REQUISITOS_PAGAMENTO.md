# Requisitos do Cliente - Integração de Pagamentos

## 📋 O que o Cliente Precisa Fornecer

Este documento lista **exclusivamente** os itens que o cliente deve providenciar para que eu possa implementar o sistema de pagamentos nos planos mensais da Telemeds.

---

## 🏢 **1. Informações da Empresa**

### Dados Obrigatórios:
- [ ] **Razão Social** completa da empresa
- [ ] **CNPJ** (necessário para ativação das contas)
- [ ] **Endereço comercial** completo
- [ ] **Telefone comercial** para contato
- [ ] **E-mail corporativo** do responsável financeiro
- [ ] **Dados bancários** (banco, agência, conta) para recebimento

### Documentação Necessária:
- [ ] **Contrato Social** ou documento equivalente
- [ ] **Cartão CNPJ** atualizado
- [ ] **Comprovante de endereço** da empresa
- [ ] **RG e CPF** do representante legal

---

## 💳 **2. Conta Mercado Pago (Recomendado)**

### O Cliente Deve:
- [ ] **Criar conta** em [www.mercadopago.com.br/developers](https://www.mercadopago.com.br/developers)
- [ ] **Validar a conta** com os documentos da empresa
- [ ] **Ativar recebimento** configurando dados bancários
- [ ] **Fornecer credenciais** após aprovação:

```
Credenciais Necessárias:
- Access Token (Produção): APP_USR-xxxxx
- Public Key (Produção): APP_USR-xxxxx
- Access Token (Teste): TEST-xxxxx  
- Public Key (Teste): TEST-xxxxx
```

### Processo:
1. Cliente cria a conta
2. Cliente envia documentos para validação
3. Mercado Pago aprova (3-5 dias úteis)
4. Cliente me fornece as credenciais
5. Eu configuro no sistema

---

## 🌍 **3. Conta Stripe (Alternativa)**

### O Cliente Deve:
- [ ] **Criar conta** em [dashboard.stripe.com](https://dashboard.stripe.com)
- [ ] **Verificar identidade** com documentos da empresa
- [ ] **Ativar conta** para recebimento no Brasil
- [ ] **Fornecer credenciais** após ativação:

```
Credenciais Necessárias:
- Secret Key (Produção): sk_live_xxxxx
- Publishable Key (Produção): pk_live_xxxxx
- Secret Key (Teste): sk_test_xxxxx
- Publishable Key (Teste): pk_test_xxxxx
```

### Observação:
- Stripe pode demorar mais para ativar contas brasileiras
- Recomendo Mercado Pago para facilitar o processo

---

## 🏦 **4. Informações Financeiras**

### Definições Necessárias:
- [ ] **Valor dos planos** (confirmar se mantém os atuais):
  - Plano Básico: R$ 99/mês
  - Plano Cuidar: R$ 179/mês  
  - Plano Familiar: R$ 299/mês

- [ ] **Política de cobrança**:
  - [ ] Dia de vencimento preferido
  - [ ] Tolerância para pagamento em atraso
  - [ ] Ação após inadimplência (pausar/cancelar)

- [ ] **Política de cancelamento**:
  - [ ] Cancelamento imediato ou no fim do período?
  - [ ] Reembolso em caso de cancelamento?
  - [ ] Período de carência para reativação?

---

## 📞 **5. Informações de Contato**

### Para Configuração:
- [ ] **WhatsApp** para suporte (se diferente do atual)
- [ ] **E-mail** para notificações de pagamento
- [ ] **URL do site** para configurar redirects
- [ ] **Logo da empresa** para checkout (formato PNG/SVG)

---

## ⚙️ **6. Preferências Técnicas**

### O Cliente Deve Definir:
- [ ] **Provedor preferido**: Mercado Pago ou Stripe?
- [ ] **Métodos de pagamento** aceitos:
  - [ ] Cartão de crédito
  - [ ] PIX (apenas Mercado Pago)
  - [ ] Boleto (apenas Mercado Pago)
  - [ ] Débito automático

- [ ] **Notificações desejadas**:
  - [ ] E-mail para cliente após pagamento
  - [ ] E-mail para empresa sobre novos pagamentos
  - [ ] WhatsApp para cobranças em atraso

---

## 📧 **7. Acesso para Configuração**

### O Cliente Deve Fornecer:
- [ ] **Acesso admin** ao painel do provedor escolhido
- [ ] **Permissões** para configurar webhooks
- [ ] **Autorização** para realizar testes com a conta

### Usuário Temporário (Recomendado):
- Criar usuário temporário com permissões limitadas
- Remover acesso após implementação concluída

---

## 📅 **8. Timeline de Fornecimento**

### Cronograma Ideal:
- **Dia 1-2**: Cliente cria conta no provedor
- **Dia 3-7**: Validação de documentos pelo provedor  
- **Dia 8**: Cliente fornece credenciais
- **Dia 9-10**: Implementação e testes
- **Dia 11**: Deploy e ativação

### Fatores que Podem Atrasar:
- Demora na validação de documentos
- Problemas com dados bancários
- Documentação incompleta

---

## ⚠️ **Importante - O que NÃO Preciso**

### Não é Necessário Fornecer:
- ❌ Código de implementação
- ❌ Detalhes técnicos do sistema
- ❌ Configurações de servidor
- ❌ Banco de dados
- ❌ Hospedagem

### Eu Vou Implementar:
- ✅ Todo o código de integração
- ✅ Interface de checkout
- ✅ Webhook de sincronização
- ✅ Dashboard administrativo
- ✅ Testes e validações

---

## 📋 **Checklist Final para o Cliente**

### Antes de Começar:
- [ ] Documentos da empresa separados
- [ ] Dados bancários confirmados
- [ ] Valores dos planos definidos
- [ ] Política de cobrança decidida
- [ ] Provedor de pagamento escolhido

### Durante o Processo:
- [ ] Conta criada no provedor
- [ ] Documentos enviados para validação
- [ ] Acompanhar aprovação por e-mail
- [ ] Credenciais fornecidas assim que disponíveis

### Após Implementação:
- [ ] Teste de pagamento aprovado
- [ ] Acesso ao dashboard funcionando
- [ ] Webhooks configurados e testados
- [ ] Treinamento sobre o sistema

---

## 🚨 **Prazos Críticos**

### Para Não Atrasar o Projeto:
1. **Criação da conta**: Fazer HOJE
2. **Envio de documentos**: Máximo 1 dia após criação
3. **Fornecimento de credenciais**: Imediatamente após aprovação
4. **Aprovação de testes**: Máximo 1 dia

### Contatos para Dúvidas:
- **Implementação técnica**: Comigo
- **Problemas com conta**: Suporte do provedor
- **Documentação**: Suporte do provedor

---

**⏰ Tempo total estimado: 5-10 dias úteis**
**👥 Dependências: 80% cliente, 20% implementação**

*Este documento deve ser preenchido e devolvido antes do início da implementação.*

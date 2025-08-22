# Requisitos do Cliente - Integração Mercado Pago

## 📋 O que Você Precisa Fazer para Ativar os Pagamentos Online

Este documento lista **exclusivamente** os passos que você deve seguir e as informações que deve nos enviar para implementarmos o sistema de pagamentos mensais da Telemeds usando **Mercado Pago**.

---

## 🏢 **1. Informações da Sua Empresa**

### Dados Obrigatórios para o Mercado Pago:
- [ ] **Razão Social** completa da empresa
- [ ] **CNPJ** (obrigatório para empresas)
- [ ] **Endereço comercial** completo (com CEP)
- [ ] **Telefone comercial** da empresa
- [ ] **E-mail corporativo** do responsável financeiro
- [ ] **Dados bancários** completos:
  - Nome do banco
  - Agência (com dígito)
  - Conta corrente (com dígito)
  - Tipo de conta (corrente/poupança)

### Documentos que Você Deve Ter em Mãos:
- [ ] **Contrato Social** atualizado
- [ ] **Cartão CNPJ** (gerado nos últimos 90 dias)
- [ ] **Comprovante de endereço** da empresa (últimos 3 meses)
- [ ] **RG e CPF** do sócio administrador/representante legal
- [ ] **Comprovante de endereço pessoal** do representante legal

---

## 💳 **2. Criação da Conta Mercado Pago - PASSO A PASSO**

### **PASSO 1**: Criar a Conta
1. Acesse: [www.mercadopago.com.br](https://www.mercadopago.com.br)
2. Clique em **"Criar conta"**
3. Escolha **"Quero vender"** 
4. Selecione **"Pessoa Jurídica"**
5. Preencha os dados da empresa

### **PASSO 2**: Validar a Conta
1. Faça upload dos documentos listados acima
2. Aguarde a análise (3-5 dias úteis)
3. Configure os dados bancários para recebimento
4. Ative o recebimento de pagamentos

### **PASSO 3**: Obter as Credenciais
Após aprovação, você deve acessar:
1. **Mercado Pago** → **Seu negócio** → **Configurações** → **Credenciais**
2. **Copiar e nos enviar estas 4 informações**:

```
🔑 CREDENCIAIS NECESSÁRIAS:
Access Token (Produção): APP_USR-xxxxxxxx...
Public Key (Produção): APP_USR-xxxxxxxx...
Access Token (Sandbox/Teste): TEST-xxxxxxxx...
Public Key (Sandbox/Teste): TEST-xxxxxxxx...
```

### **⚠️ IMPORTANTE**: 
- **NÃO compartilhe** essas credenciais publicamente
- **Envie apenas para nós** por e-mail ou WhatsApp
- **Guarde** essas informações em local seguro

---

## 💰 **3. Configuração dos Planos e Valores**

### Confirme os Valores dos Planos:
- [ ] **Plano Básico**: R$ 99,00/mês ✅
- [ ] **Plano Cuidar**: R$ 179,00/mês ✅
- [ ] **Plano Familiar**: R$ 299,00/mês ✅

*(Se quiser alterar algum valor, nos informe)*

### Formas de Pagamento que Você Terá:
✅ **Cartão de Crédito** (Visa, Master, Elo, etc.)  
✅ **PIX** (aprovação instantânea)  
✅ **Boleto Bancário** (aprovação em 1-2 dias úteis)  

### Defina Suas Políticas:
- [ ] **Dia de vencimento**: Que dia do mês prefere? (ex: dia 5, 10, 15...)
- [ ] **Tolerância para atraso**: Quantos dias após vencimento? (recomendado: 5 dias)
- [ ] **Ação após inadimplência**: 
  - [ ] Pausar acesso aos serviços
  - [ ] Cancelar assinatura
  - [ ] Enviar cobrança via WhatsApp

### Política de Cancelamento:
- [ ] **Cancelamento**: Imediato ou só no fim do período pago?
- [ ] **Reembolso**: Oferece reembolso proporcional?
- [ ] **Reativação**: Cliente pode reativar depois de cancelar?

---

## 📞 **4. Informações Adicionais**

### Para Personalização do Checkout:
- [ ] **Logo da empresa** (formato PNG ou SVG, fundo transparente)
- [ ] **Cores da marca** (se quiser personalizar o checkout)
- [ ] **Nome fantasia** (como aparecerá para os clientes)

### Para Notificações:
- [ ] **E-mail** para receber avisos de novos pagamentos
- [ ] **WhatsApp** para envio de cobranças automáticas
- [ ] **Site/URL** da empresa (para redirects após pagamento)

### Suporte ao Cliente:
- [ ] **WhatsApp de suporte** (para clientes com dúvidas sobre pagamento)
- [ ] **E-mail de suporte** (alternativo ao WhatsApp)
- [ ] **Horário de atendimento** (para informar no checkout)

---

## ⏱️ **5. Cronograma - O que Acontece Quando**

### **HOJE** (Você deve fazer):
- [ ] Criar conta no Mercado Pago
- [ ] Separar todos os documentos listados
- [ ] Enviar documentos para validação

### **Dias 1-5** (Mercado Pago analisa):
- Aguardar aprovação da conta
- Acompanhar e-mails do Mercado Pago
- Responder se solicitarem documentos adicionais

### **Após Aprovação** (Você deve fazer):
- [ ] Configurar dados bancários no Mercado Pago
- [ ] Copiar as 4 credenciais (Access Token e Public Key)
- [ ] **Enviar credenciais para nós IMEDIATAMENTE**

### **Após Recebermos as Credenciais** (Nós fazemos):
- Implementar integração no site (1-2 dias)
- Configurar webhooks e notificações
- Realizar testes de pagamento
- Ativar sistema em produção

### **Timeline Total**: 7-10 dias úteis

---

## � **6. ATENÇÃO - O que Você NÃO Precisa Se Preocupar**

### ❌ **Você NÃO precisa**:
- Entender de programação ou código
- Configurar sistemas técnicos
- Instalar nada no computador
- Contratar desenvolvedores
- Pagar taxas extras para nós

### ✅ **Nós cuidamos de TUDO**:
- Integração técnica completa
- Páginas de pagamento
- Sistema de notificações
- Dashboard administrativo
- Testes e validações
- Suporte técnico

### 💸 **Custos do Mercado Pago**:
- **Cartão de Crédito**: 4,99% + R$ 0,39 por transação
- **PIX**: 0,99% (sem taxa fixa)
- **Boleto**: R$ 3,49 por boleto
- **Sem mensalidade** ou taxas de adesão

*Essas taxas são padrão do Mercado Pago e são descontadas automaticamente antes do dinheiro cair na sua conta.*

---

## ✅ **7. CHECKLIST FINAL - Marque Conforme For Fazendo**

### **ANTES DE COMEÇAR** (Prepare tudo):
- [ ] Documentos da empresa separados e digitalizados
- [ ] Dados bancários em mãos (agência, conta, etc.)
- [ ] CPF e RG do representante legal
- [ ] E-mail corporativo funcionando
- [ ] Definir valores e políticas dos planos

### **CRIAÇÃO DA CONTA** (Faça hoje):
- [ ] Acessar www.mercadopago.com.br
- [ ] Criar conta como "Pessoa Jurídica"
- [ ] Preencher todos os dados solicitados
- [ ] Fazer upload de todos os documentos

### **APÓS APROVAÇÃO** (Assim que receber e-mail):
- [ ] Acessar as credenciais no painel
- [ ] Copiar Access Token de Produção
- [ ] Copiar Public Key de Produção  
- [ ] Copiar Access Token de Teste
- [ ] Copiar Public Key de Teste
- [ ] **ENVIAR TODAS AS 4 CREDENCIAIS PARA NÓS**

### **INFORMAÇÕES EXTRAS** (Enviar junto):
- [ ] Logo da empresa
- [ ] Políticas definidas (vencimento, cancelamento, etc.)
- [ ] Contatos para suporte (WhatsApp, e-mail)

---

## � **8. CONTATOS PARA DÚVIDAS**

### **Para Problemas Técnicos da Integração**:
📧 **E-mail**: [SEU_EMAIL_AQUI]  
📱 **WhatsApp**: [SEU_WHATSAPP_AQUI]

### **Para Problemas com a Conta Mercado Pago**:
📞 **Suporte MP**: 0800 633 4000  
📧 **E-mail MP**: suporte@mercadopago.com.br  
🌐 **Central de Ajuda**: help.mercadopago.com.br

### **Para Dúvidas sobre Documentação**:
📞 **Mercado Pago**: Mesmo contato acima  
⏰ **Horário**: Segunda a sexta, 8h às 20h

---

## 🎯 **RESUMO DO QUE VOCÊ DEVE FAZER AGORA**

### **AÇÃO IMEDIATA** (hoje mesmo):
1. **Criar conta** no Mercado Pago (pessoa jurídica)
2. **Enviar documentos** para validação
3. **Aguardar aprovação** (3-5 dias úteis)

### **ASSIM QUE APROVADO**:
1. **Copiar credenciais** do painel
2. **Enviar para nós** por WhatsApp ou e-mail
3. **Aguardar implementação** (2-3 dias)

### **PRAZO TOTAL**: 7-10 dias úteis para tudo funcionar

---

**🚀 Vamos começar? Acesse www.mercadopago.com.br agora mesmo!**

# Guia de Integração de Pagamentos - Mercado Pago e Stripe

## 📋 Visão Geral

Este documento detalha os requisitos e passos necessários para integrar sistemas de pagamento (Mercado Pago e Stripe) no projeto Telemeds para permitir que usuários assinem planos mensais.

## 🎯 Objetivos

- Permitir assinatura de planos mensais (Plano Básico R$ 99/mês, Plano Cuidar R$ 179/mês, Plano Familiar R$ 299/mês)
- Cobrança recorrente automática
- Gestão de assinaturas (pausar, cancelar, reativar)
- Webhook para sincronização de status de pagamento
- Dashboard para acompanhamento de pagamentos

---

## 🔄 Mercado Pago - Integração Recomendada (Brasil)

### 1. Pré-requisitos

#### 1.1 Conta Mercado Pago
- [ ] Criar conta no [Mercado Pago Developers](https://www.mercadopago.com.br/developers)
- [ ] Validar conta (documentos, dados bancários)
- [ ] Configurar webhook URLs
- [ ] Obter credenciais de produção e sandbox

#### 1.2 Credenciais Necessárias
```env
# .env
MERCADOPAGO_ACCESS_TOKEN_SANDBOX=TEST-xxxx
MERCADOPAGO_ACCESS_TOKEN_PROD=APP_USR-xxxx
MERCADOPAGO_PUBLIC_KEY_SANDBOX=TEST-xxxx
MERCADOPAGO_PUBLIC_KEY_PROD=APP_USR-xxxx
MERCADOPAGO_WEBHOOK_SECRET=xxxx
```

### 2. Dependências

```json
{
  "dependencies": {
    "mercadopago": "^2.0.9",
    "@mercadopago/sdk-react": "^0.0.19"
  }
}
```

### 3. Estrutura Backend Necessária

#### 3.1 Modelo de Dados

```typescript
// models/Subscription.ts
interface Subscription {
  id: string;
  userId: string;
  planId: string;
  mpSubscriptionId: string; // ID da assinatura no Mercado Pago
  status: 'active' | 'cancelled' | 'paused' | 'pending';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// models/Plan.ts
interface Plan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year';
  features: string[];
  mpPlanId: string; // ID do plano no Mercado Pago
}

// models/Payment.ts
interface Payment {
  id: string;
  subscriptionId: string;
  mpPaymentId: string;
  amount: number;
  status: 'approved' | 'pending' | 'rejected';
  paymentDate: Date;
  dueDate: Date;
}
```

#### 3.2 Endpoints Backend

```typescript
// routes/subscriptions.ts
POST /api/subscriptions/create
POST /api/subscriptions/cancel/:id
POST /api/subscriptions/pause/:id
POST /api/subscriptions/resume/:id
GET /api/subscriptions/user/:userId
POST /api/webhooks/mercadopago

// routes/plans.ts
GET /api/plans
GET /api/plans/:id
```

### 4. Implementação Frontend

#### 4.1 Componente de Checkout

```typescript
// components/MercadoPagoCheckout.tsx
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const MercadoPagoCheckout = ({ planId, userId }) => {
  const [preferenceId, setPreferenceId] = useState<string>('');

  useEffect(() => {
    initMercadoPago(process.env.REACT_APP_MP_PUBLIC_KEY);
  }, []);

  const createSubscription = async () => {
    const response = await fetch('/api/subscriptions/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planId, userId })
    });
    
    const { preferenceId } = await response.json();
    setPreferenceId(preferenceId);
  };

  return (
    <div>
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId }}
          customization={{ texts: { valueProp: 'smart_option' } }}
        />
      )}
    </div>
  );
};
```

#### 4.2 Página de Planos Atualizada

```typescript
// pages/PlansPage.tsx
const PlansPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handlePlanSelection = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowCheckout(true);
  };

  return (
    <div>
      {/* Lista de planos */}
      {plans.map(plan => (
        <PlanCard 
          key={plan.id}
          plan={plan}
          onSelect={() => handlePlanSelection(plan)}
        />
      ))}

      {/* Modal de Checkout */}
      {showCheckout && selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </div>
  );
};
```

### 5. Configuração Webhook

```typescript
// routes/webhooks/mercadopago.ts
export const mercadoPagoWebhook = async (req: Request, res: Response) => {
  const { type, data } = req.body;

  switch (type) {
    case 'subscription':
      await handleSubscriptionUpdate(data.id);
      break;
    case 'payment':
      await handlePaymentUpdate(data.id);
      break;
  }

  res.status(200).send('OK');
};

const handleSubscriptionUpdate = async (subscriptionId: string) => {
  const mpSubscription = await mercadopago.preapproval.get(subscriptionId);
  
  await updateSubscriptionStatus({
    mpSubscriptionId: subscriptionId,
    status: mapMPStatusToInternal(mpSubscription.status)
  });
};
```

---

## 💳 Stripe - Alternativa Internacional

### 1. Pré-requisitos

#### 1.1 Conta Stripe
- [ ] Criar conta no [Stripe Dashboard](https://dashboard.stripe.com)
- [ ] Ativar conta (verificação de identidade)
- [ ] Configurar webhooks
- [ ] Obter chaves API

#### 1.2 Credenciais Necessárias
```env
# .env
STRIPE_SECRET_KEY_TEST=sk_test_xxxx
STRIPE_SECRET_KEY_PROD=sk_live_xxxx
STRIPE_PUBLISHABLE_KEY_TEST=pk_test_xxxx
STRIPE_PUBLISHABLE_KEY_PROD=pk_live_xxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxx
```

### 2. Dependências

```json
{
  "dependencies": {
    "stripe": "^14.17.0",
    "@stripe/stripe-js": "^2.4.0",
    "@stripe/react-stripe-js": "^2.4.0"
  }
}
```

### 3. Implementação Stripe

#### 3.1 Configuração Inicial

```typescript
// lib/stripe.ts
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Frontend
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!
);
```

#### 3.2 Componente de Checkout

```typescript
// components/StripeCheckout.tsx
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ planId, userId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    // Criar assinatura
    const { clientSecret } = await createSubscription(planId, userId);

    // Confirmar pagamento
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      }
    });

    if (!error) {
      // Redirecionar para página de sucesso
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Assinar Plano</button>
    </form>
  );
};

export const StripeCheckout = ({ planId, userId }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm planId={planId} userId={userId} />
  </Elements>
);
```

---

## 🗄️ Estrutura de Banco de Dados

### Tabelas Necessárias

```sql
-- Tabela de Planos
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'BRL',
  interval VARCHAR(20) DEFAULT 'month',
  features JSON,
  mp_plan_id VARCHAR(100),
  stripe_price_id VARCHAR(100),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Assinaturas
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  plan_id UUID NOT NULL REFERENCES plans(id),
  provider VARCHAR(20) NOT NULL, -- 'mercadopago' ou 'stripe'
  provider_subscription_id VARCHAR(100) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tabela de Pagamentos
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID NOT NULL REFERENCES subscriptions(id),
  provider_payment_id VARCHAR(100) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'BRL',
  status VARCHAR(20) NOT NULL,
  payment_date TIMESTAMP,
  due_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_provider ON subscriptions(provider, provider_subscription_id);
CREATE INDEX idx_payments_subscription ON payments(subscription_id);
```

---

## 🔒 Segurança e Validações

### 1. Validações Backend

```typescript
// middleware/auth.ts
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// middleware/validateWebhook.ts
const validateMercadoPagoWebhook = (req, res, next) => {
  const signature = req.headers['x-signature'];
  const expectedSignature = generateMPSignature(req.body);
  
  if (signature !== expectedSignature) {
    return res.status(400).json({ error: 'Invalid signature' });
  }
  next();
};
```

### 2. Tratamento de Erros

```typescript
// utils/errorHandler.ts
export const handlePaymentError = (error: any) => {
  switch (error.code) {
    case 'card_declined':
      return 'Cartão recusado. Tente outro cartão.';
    case 'insufficient_funds':
      return 'Saldo insuficiente.';
    case 'expired_card':
      return 'Cartão expirado.';
    default:
      return 'Erro no pagamento. Tente novamente.';
  }
};
```

---

## 🎛️ Dashboard Administrativo

### 1. Métricas Importantes

```typescript
// components/admin/PaymentsDashboard.tsx
const PaymentsDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalRevenue: 0,
    activeSubscriptions: 0,
    churnRate: 0,
    averageRevenue: 0
  });

  return (
    <div className="dashboard-grid">
      <MetricCard title="Receita Total" value={metrics.totalRevenue} />
      <MetricCard title="Assinaturas Ativas" value={metrics.activeSubscriptions} />
      <MetricCard title="Taxa de Churn" value={`${metrics.churnRate}%`} />
      <MetricCard title="Receita Média" value={metrics.averageRevenue} />
    </div>
  );
};
```

---

## 📋 Checklist de Implementação

### Fase 1 - Configuração Inicial
- [ ] Criar contas Mercado Pago/Stripe
- [ ] Configurar credenciais
- [ ] Criar estrutura de banco de dados
- [ ] Implementar modelos de dados

### Fase 2 - Backend
- [ ] Implementar endpoints de assinatura
- [ ] Configurar webhooks
- [ ] Implementar lógica de cobrança recorrente
- [ ] Testes de integração

### Fase 3 - Frontend
- [ ] Criar componentes de checkout
- [ ] Integrar com backend
- [ ] Implementar fluxo de pagamento
- [ ] Página de gerenciamento de assinatura

### Fase 4 - Testes
- [ ] Testes com cartões de teste
- [ ] Validar webhooks
- [ ] Testar cenários de erro
- [ ] Testes de performance

### Fase 5 - Deploy
- [ ] Configurar ambiente de produção
- [ ] Ativar webhooks em produção
- [ ] Monitoramento e logs
- [ ] Documentação final

---

## 🚀 Próximos Passos

1. **Escolher o provedor principal** (Recomendo Mercado Pago para Brasil)
2. **Configurar ambiente de desenvolvimento** com credenciais de sandbox
3. **Implementar estrutura de banco de dados**
4. **Desenvolver backend para criação de assinaturas**
5. **Criar componentes frontend de checkout**
6. **Configurar webhooks para sincronização**
7. **Implementar dashboard administrativo**
8. **Testes completos antes do deploy**

---

## 📞 Suporte e Documentação

### Mercado Pago
- [Documentação Oficial](https://www.mercadopago.com.br/developers/pt/docs)
- [SDK React](https://github.com/mercadopago/sdk-react)
- [Suporte](https://www.mercadopago.com.br/developers/pt/support)

### Stripe
- [Documentação Oficial](https://stripe.com/docs)
- [React Stripe.js](https://github.com/stripe/react-stripe-js)
- [Suporte](https://support.stripe.com/)

---

*Este documento deve ser atualizado conforme o progresso da implementação e surgimento de novos requisitos.*

# Guia de Deploy - Projeto Telemed

## 🚀 Deploy Automatizado no Netlify

### Configuração Inicial (fazer apenas uma vez)

1. **Conectar o repositório ao Netlify:**
   - Faça login no [Netlify](https://netlify.com)
   - Clique em "New site from Git"
   - Conecte seu repositório GitHub
   - O Netlify detectará automaticamente o arquivo `netlify.toml`

2. **Configuração automática:**
   - O Netlify usará as configurações do `netlify.toml`
   - Comando de build: `npm run deploy:netlify`
   - Diretório de publicação: `dist`

### Deploy Manual (método atual)

Se preferir continuar com upload manual da pasta `dist`:

```bash
# 1. Build para produção (com todos os scripts de tracking)
npm run build:prod

# 2. Faça upload da pasta 'dist' no Netlify
```

### Deploy Automatizado (recomendado)

```bash
# Método 1: Para deploy local e upload manual
npm run deploy:netlify

# Método 2: Push para GitHub (se conectado ao Netlify)
git add .
git commit -m "Deploy com analytics"
git push origin main
```

## 📊 Scripts de Tracking Incluídos

O build de produção inclui automaticamente:

- **Google Analytics GA4**: `G-TY8CCZXZ7E`
- **Google Tag Manager**: `GTM-MZ6H6GFN`
- **Google Ads**: `AW-17031617120`
- **Meta Pixel**: `6439986205219636`
- **Hotjar**: `6447343`
- **Facebook Domain Verification**: `2m5dczn8avbdsdozh71labs073en9`

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento (sem tracking scripts)
npm run dev

# Build para desenvolvimento
npm run build:dev

# Build para produção (com todos os tracking scripts)
npm run build:prod

# Deploy completo (build + preparação)
npm run deploy:netlify

# Reverter para versão de desenvolvimento
npm run build:revert

# Lint do código
npm run lint

# Preview do build
npm run preview
```

## ✅ Verificação do Deploy

Após o deploy, verifique se os scripts estão funcionando:

1. **Google Analytics**: Acesse [Google Analytics](https://analytics.google.com) e verifique tráfego em tempo real
2. **Google Tag Manager**: Use o [Tag Assistant](https://tagassistant.google.com)
3. **Meta Pixel**: Use o [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper)
4. **Hotjar**: Verifique no painel do Hotjar

## 🔧 Solução de Problemas

### Erro no desenvolvimento
Se `npm run dev` não funcionar, use:
```bash
npm run build:revert
npm run dev
```

### Scripts de tracking não funcionam
Verifique se usou o build de produção:
```bash
npm run build:prod
```

### Deploy falhou no Netlify
1. Verifique os logs de build no painel do Netlify
2. Confirme que todas as dependências estão no `package.json`
3. Execute `npm install` localmente para testar

## 📁 Estrutura de Arquivos

```
project/
├── index.html              # Versão desenvolvimento (sem tracking)
├── index.production.html    # Versão produção (com tracking)
├── netlify.toml            # Configuração do Netlify
├── package.json            # Scripts de build
└── src/
    └── utils/
        └── analytics.ts    # Funções de tracking
```

## 🎯 Variáveis de Ambiente (opcional)

Para maior segurança, você pode usar variáveis de ambiente no Netlify:

1. No painel do Netlify: Site settings > Environment variables
2. Adicione as IDs dos tracking scripts
3. Modifique o código para usar `process.env.VITE_GA_ID` etc.

---

**Dica**: Para deploys automáticos, conecte o repositório ao Netlify. Cada push para `main` fará deploy automático usando `npm run deploy:netlify`.

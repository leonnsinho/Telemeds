# Sistema de Backup - Projeto Luximedi

## 🎯 Como Usar

### 📦 Fazer Backup
1. **Duplo clique em `backup.bat`**
2. **Digite uma mensagem descritiva** das mudanças feitas
3. **Pressione Enter** e aguarde a confirmação

### 🔄 Restaurar Versão Anterior
1. **Duplo clique em `restaurar.bat`**
2. **Visualize o histórico** de commits disponíveis
3. **Digite o ID do commit** que deseja restaurar
4. **Confirme a operação** digitando "sim"

## 📋 Exemplos de Mensagens de Backup

### ✅ Boas práticas:
- "Adicionado sistema de pagamento PIX"
- "Corrigido bug no formulário de agendamento"
- "Atualizado design da página home"
- "Implementado sistema de notificações"

### ❌ Evite:
- "mudanças"
- "updates"
- "fix"

## 🛠 Comandos Git Úteis

Se precisar usar Git diretamente:

```bash
# Ver status atual
git status

# Ver histórico completo
git log --oneline

# Ver diferenças não salvas
git diff

# Voltar para o último commit
git reset --hard HEAD
```

## 📁 Estrutura do Projeto

```
projeto/
├── backup.bat              # 🔄 Script de backup
├── restaurar.bat           # ⏮️ Script de restauração
├── .gitignore              # 🚫 Arquivos ignorados
├── src/                    # 💻 Código fonte
├── public/                 # 🌐 Arquivos públicos
└── README_BACKUP.md        # 📖 Este arquivo
```

## ⚠️ Importante

- **Sempre faça backup** antes de mudanças importantes
- **Use mensagens descritivas** para facilitar localização
- **Confirme bem** antes de restaurar versões antigas
- **Não delete** os arquivos `.bat` - são essenciais para o sistema

## 🆘 Problemas Comuns

### "Este não é um repositório Git válido"
- **Solução**: O sistema já está configurado, reinicie o terminal

### "Não há mudanças para fazer backup"
- **Solução**: Normal! Significa que não houve alterações

### "Commit não encontrado"
- **Solução**: Verifique o ID do commit no histórico

## 📞 Suporte

Em caso de dúvidas sobre o sistema de backup, consulte o arquivo `SISTEMA_BACKUP_GIT.md` para documentação completa.

---
**Sistema implementado em 16/08/2025 por Leon Rodrigues**

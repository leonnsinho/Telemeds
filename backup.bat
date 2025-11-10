@echo off
chcp 65001 >nul
echo ================================
echo    SISTEMA DE BACKUP LUXIMEDI
echo ================================
echo.

:: Verificar se há mudanças
git status --porcelain >nul 2>&1
if errorlevel 1 (
    echo ❌ Erro: Este não é um repositório Git válido.
    echo    Execute 'git init' primeiro.
    pause
    exit /b 1
)

:: Verificar se há mudanças para commit
git diff-index --quiet HEAD 2>nul
if %errorlevel% equ 0 (
    echo ✅ Não há mudanças para fazer backup.
    echo    Todos os arquivos estão atualizados.
    pause
    exit /b 0
)

echo 📂 Mudanças detectadas no projeto...
echo.
echo 📝 Digite uma mensagem para este backup:
set /p "commit_message="

if "%commit_message%"=="" (
    echo ❌ Mensagem de commit não pode estar vazia.
    pause
    exit /b 1
)

echo.
echo 🔄 Fazendo backup...

:: Adicionar todos os arquivos
git add .

:: Criar commit com timestamp
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set mydate=%%c-%%b-%%a
for /f "tokens=1-2 delims=: " %%a in ('time /t') do set mytime=%%a:%%b
git commit -m "[%mydate% %mytime%] %commit_message%"

if %errorlevel% equ 0 (
    echo.
    echo ✅ Backup realizado com sucesso!
    echo 📅 Data/Hora: %mydate% %mytime%
    echo 💬 Mensagem: %commit_message%
    echo.
    echo 📊 Status atual do repositório:
    git log --oneline -5
) else (
    echo ❌ Erro ao fazer backup.
)

echo.
pause

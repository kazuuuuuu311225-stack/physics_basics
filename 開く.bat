@echo off
chcp 65001 >nul
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js / npm が見つかりません。
  echo https://nodejs.org/ からインストール後、以下を実行してください：
  echo   npm install
  echo   npm run dev
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo 初回セットアップ: npm install ...
  call npm install
)

echo 開発サーバーを起動します...
echo ブラウザで表示された URL を開いてください。
call npm run dev
pause

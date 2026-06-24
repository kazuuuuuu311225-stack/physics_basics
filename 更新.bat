@echo off
chcp 65001 >nul
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js / npm が見つかりません。
  pause
  exit /b 1
)

if not exist "node_modules\" (
  call npm install
)

echo ビルド中...
call npm run build
echo dist フォルダに出力しました。
pause

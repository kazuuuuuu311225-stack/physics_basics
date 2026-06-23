$ErrorActionPreference = 'Stop'
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$cssPath = Join-Path $dir 'style.css'
$jsPath = Join-Path $dir 'main.js'
$templatePath = Join-Path $dir 'index.template.html'
$outputPath = Join-Path $dir 'index.html'

$css = [System.IO.File]::ReadAllText($cssPath, $utf8NoBom)
$js = [System.IO.File]::ReadAllText($jsPath, $utf8NoBom)
$template = [System.IO.File]::ReadAllText($templatePath, $utf8NoBom)

$html = $template.Replace('{{CSS}}', $css).Replace('{{JS}}', $js)
[System.IO.File]::WriteAllText($outputPath, $html, $utf8NoBom)

Write-Host 'index.html rebuilt (UTF-8 without BOM)'

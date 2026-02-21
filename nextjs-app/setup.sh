#!/bin/bash

# ProMakler Digital - Setup Script
# Installiert Dependencies und konfiguriert das Projekt

set -e

echo "🚀 ProMakler Digital - Setup"
echo "================================"
echo ""

# Check if we're in the nextjs-app directory
if [ ! -f "package.json" ]; then
  echo "❌ Fehler: package.json nicht gefunden"
  echo "Bitte führen Sie dieses Script im nextjs-app/ Verzeichnis aus:"
  echo "  cd nextjs-app"
  echo "  ./setup.sh"
  exit 1
fi

# Install dependencies
echo "📦 Installiere Dependencies..."
npm install

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
  echo ""
  echo "⚙️  Erstelle .env.local aus .env.example..."
  cp .env.example .env.local
  echo "✅ .env.local erstellt"
  echo ""
  echo "⚠️  WICHTIG: Bitte fügen Sie Ihren Resend API-Key in .env.local ein:"
  echo "   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  echo ""
  echo "   API-Key erhalten: https://resend.com/api-keys"
else
  echo "✅ .env.local existiert bereits"
fi

echo ""
echo "✅ Setup abgeschlossen!"
echo ""
echo "Nächste Schritte:"
echo "1. Resend API-Key in .env.local eintragen (falls noch nicht geschehen)"
echo "2. Dev-Server starten:  npm run dev"
echo "3. Build erstellen:     npm run build"
echo ""
echo "📖 Weitere Infos zur Lighthouse-Integration: ./LIGHTHOUSE_SETUP.md"

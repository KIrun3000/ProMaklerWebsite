/**
 * ProMakler PDF Generator
 * Verwendung: node pdf-templates/generate-pdf.cjs
 * Ausgabe:    pdf-templates/konzept-a.pdf / -b.pdf / -c.pdf
 */
const { chromium } = require('playwright');
const path = require('path');

const TEMPLATES = [
  { file: 'konzept-a.html', out: 'konzept-a.pdf', name: 'Konzept A – Split Sidebar (Architektur)' },
  { file: 'konzept-b.html', out: 'konzept-b.pdf', name: 'Konzept B – Brief Modern (Klassisch)'    },
  { file: 'konzept-c.html', out: 'konzept-c.pdf', name: 'Konzept C – Premium Cover (Full Navy)'   },
];

(async () => {
  console.log('\n🖨  ProMakler PDF Generator\n' + '─'.repeat(48));

  const browser = await chromium.launch();
  const page    = await browser.newPage();

  for (const tpl of TEMPLATES) {
    const htmlPath = path.resolve(__dirname, tpl.file);
    const pdfPath  = path.resolve(__dirname, tpl.out);

    process.stdout.write(`  Rendering ${tpl.name} ...`);

    // networkidle stellt sicher, dass Google Fonts vollständig geladen sind
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    await page.pdf({
      path: pdfPath,
      printBackground: true,   // Hintergrundfarben & -bilder
      preferCSSPageSize: true,  // respektiert @page { size: A4 } im CSS
    });

    console.log(' ✓');
  }

  await browser.close();

  console.log('─'.repeat(48));
  console.log('✅  Alle PDFs generiert!\n');
  console.log('📁  Ausgabe: pdf-templates/');
  TEMPLATES.forEach(t => console.log(`    → ${t.out}`));
  console.log('');
})();

/**
 * ProMakler Social Media PNG Generator
 * Verwendung: node pdf-templates/social/generate-social.cjs
 * Ausgabe:    pdf-templates/social/*.png
 *
 * Formate pro Konzept:
 *   square    → 1080×1080  (Instagram · LinkedIn · Facebook)
 *   landscape → 1200×628   (LinkedIn · Facebook · X / Twitter)
 *   story     → 1080×1920  (Instagram Stories · Facebook Stories)
 */

const { chromium } = require('playwright');
const path = require('path');

const CONCEPTS = [
  { key: 'a', name: 'Konzept A – Split Sidebar' },
  { key: 'b', name: 'Konzept B – Brief Modern'  },
  { key: 'c', name: 'Konzept C – Full Navy'     },
];

const FORMATS = [
  { key: 'square',    label: 'Square    1080×1080  (Instagram · LinkedIn · Facebook)',  w: 1080, h: 1080  },
  { key: 'landscape', label: 'Landscape 1200×628   (LinkedIn · Facebook · X)',          w: 1200, h: 628   },
  { key: 'story',     label: 'Story     1080×1920  (Instagram · Facebook Stories)',     w: 1080, h: 1920  },
];

(async () => {
  console.log('\n📸  ProMakler Social Media Generator\n' + '─'.repeat(56));

  const browser = await chromium.launch();

  for (const concept of CONCEPTS) {
    const htmlPath = path.resolve(__dirname, `konzept-${concept.key}-social.html`);
    console.log(`\n  ${concept.name}:`);

    // Eigenes Context/Page pro Konzept – setzt Viewport auf max. benötigte Größe
    const context = await browser.newContext({
      viewport: { width: 1400, height: 2200 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    // networkidle = Google Fonts vollständig geladen
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    for (const fmt of FORMATS) {
      const outPath = path.resolve(__dirname, `konzept-${concept.key}-${fmt.key}.png`);
      const el = page.locator(`[data-format="${fmt.key}"]`);

      process.stdout.write(`    ${fmt.label} ...`);

      await el.screenshot({
        path: outPath,
        type: 'png',
      });

      console.log(' ✓');
    }

    await context.close();
  }

  await browser.close();

  console.log('\n' + '─'.repeat(56));
  console.log('✅  Alle 9 Social-Media-Vorlagen generiert!\n');
  console.log('📁  Ausgabe: pdf-templates/social/\n');

  console.log('  Platform-Guide:');
  console.log('  ├─ *-square.png    → Instagram-Post · LinkedIn-Post · Facebook-Post');
  console.log('  ├─ *-landscape.png → LinkedIn-Artikel · Facebook-Post · X-Tweet');
  console.log('  └─ *-story.png     → Instagram Story · Facebook Story\n');
})();

/**
 * ProMakler Agrar – Social Media PNG Generator
 * Verwendung: node pdf-templates/social/generate-agrar.cjs
 * Ausgabe:    pdf-templates/social/agrar-*.png
 *
 * Agrar-Farbpalette:
 *   --forest:      #1a3028  (statt navy #1a2744)
 *   --forest-dark: #0f1e18
 *   --gold:        #c9a962  (identisch)
 *   --cream:       #f8f6f1  (identisch)
 *
 * Formate pro Konzept:
 *   square    → 1080×1080  (Instagram · LinkedIn · Facebook)
 *   landscape → 1200×628   (LinkedIn · Facebook · X / Twitter)
 *   story     → 1080×1920  (Instagram Stories · Facebook Stories)
 */

const { chromium } = require('playwright');
const path = require('path');

const CONCEPTS = [
  { key: 'a', name: 'Konzept A – Split Sidebar (Waldgrün)' },
  { key: 'b', name: 'Konzept B – Header Bar (Waldgrün)'   },
  { key: 'c', name: 'Konzept C – Full Forest (Waldgrün)'  },
];

const FORMATS = [
  { key: 'square',    label: 'Square    1080×1080  (Instagram · LinkedIn · Facebook)', w: 1080, h: 1080  },
  { key: 'landscape', label: 'Landscape 1200×628   (LinkedIn · Facebook · X)',         w: 1200, h: 628   },
  { key: 'story',     label: 'Story     1080×1920  (Instagram · Facebook Stories)',    w: 1080, h: 1920  },
];

(async () => {
  console.log('\n🌿  ProMakler Agrar – Social Media Generator\n' + '─'.repeat(56));

  const browser = await chromium.launch();

  for (const concept of CONCEPTS) {
    const htmlPath = path.resolve(__dirname, `konzept-${concept.key}-agrar.html`);
    console.log(`\n  ${concept.name}:`);

    const context = await browser.newContext({
      viewport: { width: 1400, height: 2200 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    for (const fmt of FORMATS) {
      const outPath = path.resolve(__dirname, `agrar-${concept.key}-${fmt.key}.png`);
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
  console.log('✅  Alle 9 Agrar-Vorlagen generiert!\n');
  console.log('📁  Ausgabe: pdf-templates/social/  (Prefix: agrar-*)\n');

  console.log('  Platform-Guide:');
  console.log('  ├─ agrar-*-square.png    → Instagram · LinkedIn · Facebook Post');
  console.log('  ├─ agrar-*-landscape.png → LinkedIn · Facebook · X / Twitter');
  console.log('  └─ agrar-*-story.png     → Instagram Story · Facebook Story\n');

  console.log('  Agrar-Farbpalette:');
  console.log('  ├─ Waldgrün (Primary):  #1a3028');
  console.log('  ├─ Dunkelgrün (Dark):   #0f1e18');
  console.log('  ├─ Gold (Accent):       #c9a962');
  console.log('  └─ Cream (Background):  #f8f6f1\n');
})();

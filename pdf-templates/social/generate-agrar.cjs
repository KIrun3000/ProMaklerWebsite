/**
 * ProMakler Agrar – Designbrief A4 PDF Generator
 * Verwendung: node pdf-templates/social/generate-agrar.cjs
 * Ausgabe:    pdf-templates/social/agrar-*.png
 *
 * Alle Formate sind A4-druckbar:
 *   A4 Hochformat  → 794×1123 px  (Portrait)
 *   A4 Querformat  → 1123×794 px  (Landscape)
 *
 * Agrar-Farbpalette:
 *   --forest:      #1a3028  (Waldgrün)
 *   --forest-dark: #0f1e18
 *   --gold:        #c9a962
 *   --cream:       #f8f6f1
 */

const { chromium } = require('playwright');
const path = require('path');

const CONCEPTS = [
  { key: 'a', name: 'Konzept A – Split Sidebar (Waldgrün)', formats: 'all' },
  { key: 'b', name: 'Konzept B – Header Bar (Waldgrün)',    formats: 'base' },
  { key: 'c', name: 'Konzept C – Full Forest (Waldgrün)',   formats: 'base' },
];

// Basis-Formate (alle Konzepte) – alle A4
const BASE_FORMATS = [
  { key: 'square',    label: 'Deckblatt A4 Hoch   794×1123  (Portrait – Übersicht)',           w: 794,  h: 1123 },
  { key: 'landscape', label: 'Intro A4 Quer       1123×794  (Landscape – 3 Gründe)',           w: 1123, h: 794  },
  { key: 'story',     label: 'Kompakt A4 Hoch     794×1123  (Portrait – Katasterentwurf)',      w: 794,  h: 1123 },
];

// Erweiterte Formate (nur Konzept A als Standard-Template) – alle A4
const EXTENDED_FORMATS = [
  ...BASE_FORMATS,
  // Dunkle Varianten
  { key: 'mockup-landscape',          label: 'Device Mockup A4 Quer  1123×794  (Vorher/Nachher – dunkel)',      w: 1123, h: 794  },
  { key: 'branded-docs-square',       label: 'Brand-System A4 Hoch   794×1123  (Brand-Docs – dunkel)',          w: 794,  h: 1123 },
  { key: 'pakete-square',             label: 'Pakete A4 Hoch         794×1123  (Preisübersicht)',               w: 794,  h: 1123 },
  { key: 'testimonial-landscape',     label: 'Testimonial A4 Quer    1123×794  (Case Study)',                   w: 1123, h: 794  },
  // Helle Varianten (Druck-optimiert)
  { key: 'mockup-light-v1-landscape', label: 'Mockup Hell V1 A4 Quer 1123×794  (Cream + Sidebar)',             w: 1123, h: 794  },
  { key: 'mockup-light-v2-landscape', label: 'Mockup Hell V2 A4 Quer 1123×794  (Weiß, 2-Spalten)',             w: 1123, h: 794  },
  { key: 'mockup-light-v3-a4',        label: 'Mockup Hell V3 A4 Hoch 794×1123  (Hochformat – Druck)',          w: 794,  h: 1123 },
  { key: 'branded-light-v1-landscape',label: 'Branded Hell V1 A4 Quer 1123×794 (Cream, 4-Doc-Row)',            w: 1123, h: 794  },
  { key: 'branded-light-v2-square',   label: 'Branded Hell V2 A4 Hoch 794×1123 (Weiß, Cards)',                 w: 794,  h: 1123 },
  { key: 'branded-light-v3-a4',       label: 'Branded Hell V3 A4 Hoch 794×1123 (Hochformat – Druck)',          w: 794,  h: 1123 },
  // devices.css Geräteschablonen
  { key: 'devices-compare-landscape', label: 'Devices A4 Quer        1123×794  (Vorher/Nachher, 3 Geräte)',    w: 1123, h: 794  },
  { key: 'devices-triple-light-a4',   label: 'Devices A4 Hoch        794×1123  (Druckschablone, 4 Geräte)',    w: 794,  h: 1123 },
];

(async () => {
  console.log('\n🌿  ProMakler Agrar – Designbrief A4 Generator\n' + '─'.repeat(56));

  const browser = await chromium.launch();

  for (const concept of CONCEPTS) {
    const htmlPath = path.resolve(__dirname, `konzept-${concept.key}-agrar.html`);
    const fmts = concept.formats === 'all' ? EXTENDED_FORMATS : BASE_FORMATS;
    console.log(`\n  ${concept.name} (${fmts.length} Formate):`);

    const context = await browser.newContext({
      viewport: { width: 1400, height: 1300 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

    for (const fmt of fmts) {
      const outPath = path.resolve(__dirname, `agrar-${concept.key}-${fmt.key}.png`);
      const el = page.locator(`[data-format="${fmt.key}"]`);

      const count = await el.count();
      if (count === 0) {
        console.log(`    ${fmt.label} ... ⚠ nicht vorhanden`);
        continue;
      }

      process.stdout.write(`    ${fmt.label} ...`);
      await el.screenshot({ path: outPath, type: 'png' });
      console.log(' ✓');
    }

    await context.close();
  }

  await browser.close();

  console.log('\n' + '─'.repeat(56));
  const totalA = EXTENDED_FORMATS.length;
  const totalBC = BASE_FORMATS.length * 2;
  console.log(`✅  Alle ${totalA + totalBC} Agrar-Designbriefe generiert! (alle A4-druckbar)\n`);
  console.log('📁  Ausgabe: pdf-templates/social/  (Prefix: agrar-*)\n');

  console.log('  Konzept A – Standard-Template (alle Formate):');
  console.log('  ─── A4 Hochformat (794×1123):');
  console.log('  ├─ agrar-a-square.png                     → Deckblatt / Übersicht');
  console.log('  ├─ agrar-a-story.png                      → Kompakt-Seite Katasterentwurf');
  console.log('  ├─ agrar-a-branded-docs-square.png        → Brand-System Showcase (dunkel)');
  console.log('  ├─ agrar-a-pakete-square.png              → Preisübersicht Pakete');
  console.log('  ├─ agrar-a-mockup-light-v3-a4.png         → Relaunch Mockup (hell)');
  console.log('  ├─ agrar-a-branded-light-v2-square.png    → Brand-System (hell, Cards)');
  console.log('  ├─ agrar-a-branded-light-v3-a4.png        → Brand-System (hell, Hochformat)');
  console.log('  └─ agrar-a-devices-triple-light-a4.png    → Geräteschablone (4 Geräte)');
  console.log('  ─── A4 Querformat (1123×794):');
  console.log('  ├─ agrar-a-landscape.png                  → Intro / 3 Gründe');
  console.log('  ├─ agrar-a-mockup-landscape.png           → Device Mockup (dunkel)');
  console.log('  ├─ agrar-a-testimonial-landscape.png      → Case Study / Testimonial');
  console.log('  ├─ agrar-a-mockup-light-v1-landscape.png  → Relaunch Mockup V1 (hell)');
  console.log('  ├─ agrar-a-mockup-light-v2-landscape.png  → Relaunch Mockup V2 (hell)');
  console.log('  ├─ agrar-a-branded-light-v1-landscape.png → Brand-System V1 (hell)');
  console.log('  └─ agrar-a-devices-compare-landscape.png  → Vorher/Nachher 3 Geräte\n');

  console.log('  Konzept B & C – Basis-Formate (je 3 A4-Seiten):');
  console.log('  ├─ agrar-{b,c}-square.png    → A4 Hochformat Deckblatt');
  console.log('  ├─ agrar-{b,c}-landscape.png → A4 Querformat Intro');
  console.log('  └─ agrar-{b,c}-story.png     → A4 Hochformat Kompakt\n');

  console.log('  Agrar-Farbpalette:');
  console.log('  ├─ Waldgrün (Primary):  #1a3028');
  console.log('  ├─ Dunkelgrün (Dark):   #0f1e18');
  console.log('  ├─ Gold (Accent):       #c9a962');
  console.log('  └─ Cream (Background):  #f8f6f1\n');
})();

/**
 * ProMakler Agrar – Designbrief PDF Builder
 * Fügt alle A4-PNGs von Konzept A zu einem druckbaren PDF zusammen
 */
const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Seitenreihenfolge für den Designbrief (Konzept A)
// Hochformat: 794×1123 px → A4 Portrait
// Querformat: 1123×794 px → A4 Landscape
const PAGES = [
  // ─── Teil 1: Einleitung & Überblick ───────────────────────────
  { file: 'agrar-a-square.png',                  title: '01 · Deckblatt',              orientation: 'portrait'  },
  { file: 'agrar-a-story.png',                   title: '02 · Kompakt-Übersicht',      orientation: 'portrait'  },
  { file: 'agrar-a-landscape.png',               title: '03 · Intro / 3 Gründe',       orientation: 'landscape' },
  // ─── Teil 2: Ihr digitaler Relaunch ───────────────────────────
  { file: 'agrar-a-mockup-landscape.png',        title: '04 · Device Mockup (dunkel)', orientation: 'landscape' },
  { file: 'agrar-a-mockup-light-v1-landscape.png', title: '05 · Relaunch Mockup V1',  orientation: 'landscape' },
  { file: 'agrar-a-mockup-light-v2-landscape.png', title: '06 · Relaunch Mockup V2',  orientation: 'landscape' },
  { file: 'agrar-a-mockup-light-v3-a4.png',     title: '07 · Relaunch Mockup A4',     orientation: 'portrait'  },
  // ─── Teil 3: Geräteschablonen ─────────────────────────────────
  { file: 'agrar-a-devices-compare-landscape.png', title: '08 · Vorher/Nachher Geräte', orientation: 'landscape' },
  { file: 'agrar-a-devices-triple-light-a4.png', title: '09 · Geräteschablone A4',    orientation: 'portrait'  },
  // ─── Teil 4: Brand-System ─────────────────────────────────────
  { file: 'agrar-a-branded-docs-square.png',     title: '10 · Brand-System (dunkel)',  orientation: 'portrait'  },
  { file: 'agrar-a-branded-light-v1-landscape.png', title: '11 · Brand-System V1',    orientation: 'landscape' },
  { file: 'agrar-a-branded-light-v2-square.png', title: '12 · Brand-System V2',       orientation: 'portrait'  },
  { file: 'agrar-a-branded-light-v3-a4.png',    title: '13 · Brand-System V3',        orientation: 'portrait'  },
  // ─── Teil 5: Pakete & Testimonial ─────────────────────────────
  { file: 'agrar-a-testimonial-landscape.png',   title: '14 · Case Study',             orientation: 'landscape' },
  { file: 'agrar-a-pakete-square.png',           title: '15 · Preisübersicht',         orientation: 'portrait'  },
];

// A4 in Points (1 pt = 1/72 inch, A4 = 210×297 mm)
const A4_PT = { w: 595.28, h: 841.89 };

(async () => {
  console.log('\n📄  ProMakler Agrar – PDF Builder\n' + '─'.repeat(44));

  const pdfDoc = await PDFDocument.create();
  pdfDoc.setTitle('ProMakler Agrar – Designbrief');
  pdfDoc.setAuthor('ProMakler');
  pdfDoc.setSubject('Designbrief für Agrar-Makler Website-Relaunch');
  pdfDoc.setCreator('ProMakler Designbrief Generator');

  const dir = __dirname;

  for (const page of PAGES) {
    const filePath = path.join(dir, page.file);
    if (!fs.existsSync(filePath)) {
      console.log(`  ⚠ nicht gefunden: ${page.file}`);
      continue;
    }

    const pngBytes = fs.readFileSync(filePath);
    const pngImage = await pdfDoc.embedPng(pngBytes);

    // A4-Seitengröße je nach Orientierung
    const pageWidth  = page.orientation === 'landscape' ? A4_PT.h : A4_PT.w;
    const pageHeight = page.orientation === 'landscape' ? A4_PT.w : A4_PT.h;

    const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);

    // Bild auf volle Seite skalieren (mit korrektem Seitenverhältnis)
    const imgW = pngImage.width;
    const imgH = pngImage.height;
    const scaleX = pageWidth  / imgW;
    const scaleY = pageHeight / imgH;
    const scale  = Math.min(scaleX, scaleY); // Seitenverhältnis erhalten

    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const offsetX = (pageWidth  - drawW) / 2;
    const offsetY = (pageHeight - drawH) / 2;

    pdfPage.drawImage(pngImage, {
      x: offsetX,
      y: offsetY,
      width:  drawW,
      height: drawH,
    });

    process.stdout.write(`  ✓ ${page.title}\n`);
  }

  const outPath = path.join(dir, 'ProMakler-Agrar-Designbrief.pdf');
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outPath, pdfBytes);

  const sizeMB = (pdfBytes.byteLength / 1024 / 1024).toFixed(1);
  console.log(`\n${'─'.repeat(44)}`);
  console.log(`✅  PDF erstellt: ${sizeMB} MB`);
  console.log(`📁  ${outPath}\n`);
})();

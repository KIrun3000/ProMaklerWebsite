const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, ImageRun, PageBreak } = require('docx');
const fs = require('fs');
const sharp = require('sharp');

// CI-Farben
const NAVY = "1a2744";
const NAVY_DARK = "0f1829";
const GOLD = "c9a962";
const CREAM = "f8f6f1";

// Keine Rahmen
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// Goldene Linie
const goldBorder = { style: BorderStyle.SINGLE, size: 12, color: GOLD };
const navyBorder = { style: BorderStyle.SINGLE, size: 24, color: NAVY };

async function createDocument() {
  // Logo SVG in PNG konvertieren
  const logoSvg = fs.readFileSync('/Users/lucaingenbleek/Documents/ProMaklerWebsite/logo.svg');
  const logoPng = await sharp(logoSvg).resize(80, 80).png().toBuffer();

  // Device Mockups als SVG erstellen und konvertieren
  const desktopSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Monitor -->
    <rect x="20" y="10" width="360" height="220" rx="8" fill="#1a2744" stroke="#c9a962" stroke-width="2"/>
    <rect x="30" y="20" width="340" height="190" fill="#0f1829"/>
    <!-- Website Content -->
    <rect x="40" y="30" width="80" height="12" fill="#c9a962"/>
    <rect x="40" y="50" width="320" height="60" fill="#1a2744"/>
    <text x="50" y="85" font-family="Arial" font-size="14" fill="#f8f6f1">ProMakler Website</text>
    <rect x="40" y="120" width="150" height="8" fill="#c9a962" opacity="0.5"/>
    <rect x="40" y="135" width="200" height="6" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="148" width="180" height="6" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="161" width="160" height="6" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="180" width="100" height="20" rx="2" fill="#c9a962"/>
    <!-- Stand -->
    <rect x="160" y="230" width="80" height="15" fill="#1a2744"/>
    <rect x="130" y="245" width="140" height="8" rx="2" fill="#1a2744"/>
    <text x="200" y="290" font-family="Arial" font-size="16" fill="#1a2744" text-anchor="middle" font-weight="bold">Desktop</text>
  </svg>`;

  const tabletSvg = `<svg width="220" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Tablet Frame -->
    <rect x="20" y="10" width="180" height="250" rx="12" fill="#1a2744" stroke="#c9a962" stroke-width="2"/>
    <rect x="30" y="25" width="160" height="210" fill="#0f1829"/>
    <!-- Website Content -->
    <rect x="40" y="35" width="60" height="10" fill="#c9a962"/>
    <rect x="40" y="52" width="140" height="45" fill="#1a2744"/>
    <text x="50" y="78" font-family="Arial" font-size="10" fill="#f8f6f1">ProMakler</text>
    <rect x="40" y="105" width="100" height="6" fill="#c9a962" opacity="0.5"/>
    <rect x="40" y="118" width="130" height="5" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="128" width="120" height="5" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="138" width="110" height="5" fill="#f8f6f1" opacity="0.3"/>
    <rect x="40" y="155" width="80" height="16" rx="2" fill="#c9a962"/>
    <!-- Home Button -->
    <circle cx="110" cy="248" r="8" fill="none" stroke="#c9a962" stroke-width="1"/>
    <text x="110" y="295" font-family="Arial" font-size="16" fill="#1a2744" text-anchor="middle" font-weight="bold">Tablet</text>
  </svg>`;

  const mobileSvg = `<svg width="140" height="300" xmlns="http://www.w3.org/2000/svg">
    <!-- Phone Frame -->
    <rect x="20" y="10" width="100" height="200" rx="14" fill="#1a2744" stroke="#c9a962" stroke-width="2"/>
    <rect x="28" y="30" width="84" height="160" fill="#0f1829"/>
    <!-- Notch -->
    <rect x="50" y="15" width="40" height="8" rx="4" fill="#0f1829"/>
    <!-- Website Content -->
    <rect x="35" y="38" width="40" height="8" fill="#c9a962"/>
    <rect x="35" y="52" width="70" height="35" fill="#1a2744"/>
    <text x="40" y="72" font-family="Arial" font-size="7" fill="#f8f6f1">ProMakler</text>
    <rect x="35" y="94" width="60" height="5" fill="#c9a962" opacity="0.5"/>
    <rect x="35" y="104" width="70" height="4" fill="#f8f6f1" opacity="0.3"/>
    <rect x="35" y="112" width="65" height="4" fill="#f8f6f1" opacity="0.3"/>
    <rect x="35" y="120" width="60" height="4" fill="#f8f6f1" opacity="0.3"/>
    <rect x="35" y="135" width="50" height="14" rx="2" fill="#c9a962"/>
    <!-- Home Indicator -->
    <rect x="55" y="195" width="30" height="4" rx="2" fill="#c9a962"/>
    <text x="70" y="250" font-family="Arial" font-size="16" fill="#1a2744" text-anchor="middle" font-weight="bold">Mobil</text>
  </svg>`;

  const desktopPng = await sharp(Buffer.from(desktopSvg)).png().toBuffer();
  const tabletPng = await sharp(Buffer.from(tabletSvg)).png().toBuffer();
  const mobilePng = await sharp(Buffer.from(mobileSvg)).png().toBuffer();

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: "DM Sans", size: 22 }
        }
      }
    },
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1440,  // Mehr Platz für Header
            right: 1080,
            bottom: 1200,  // Mehr Platz für Footer
            left: 1080,
            header: 0,  // Header direkt am oberen Rand
            footer: 0   // Footer direkt am unteren Rand
          }
        }
      },
      headers: {
        default: new Header({
          children: [
            // Navy-Balken oben - volle Breite bis zum Seitenrand
            new Table({
              columnWidths: [11880],  // Volle Seitenbreite (A4 = 11906 TWIPs - minimaler Rand)
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      borders: noBorders,
                      shading: { fill: NAVY, type: ShadingType.CLEAR },
                      width: { size: 11880, type: WidthType.DXA },
                      children: [
                        new Paragraph({
                          children: [new TextRun({ text: " ", size: 24 })]
                        })
                      ]
                    })
                  ]
                })
              ],
              indent: { size: -1080, type: WidthType.DXA }  // Negativer Einzug zum linken Rand
            }),
            new Paragraph({ spacing: { after: 200 } }),
            // Briefkopf-Tabelle
            new Table({
              columnWidths: [1200, 4200, 4320],
              rows: [
                new TableRow({
                  children: [
                    // Logo
                    new TableCell({
                      borders: noBorders,
                      width: { size: 1200, type: WidthType.DXA },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new ImageRun({
                              type: "png",
                              data: logoPng,
                              transformation: { width: 50, height: 50 },
                              altText: { title: "Logo", description: "ProMakler Logo", name: "Logo" }
                            })
                          ]
                        })
                      ]
                    }),
                    // Firmenname
                    new TableCell({
                      borders: noBorders,
                      width: { size: 4200, type: WidthType.DXA },
                      verticalAlign: VerticalAlign.CENTER,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({ text: "Pro", font: "Cormorant Garamond", size: 44, bold: true, color: NAVY }),
                            new TextRun({ text: "Makler", font: "Cormorant Garamond", size: 44, bold: true, color: GOLD })
                          ]
                        }),
                        new Paragraph({
                          spacing: { before: 20 },
                          children: [
                            new TextRun({ text: "DIGITALE RENDITE-IMMOBILIEN", font: "DM Sans", size: 14, color: NAVY, smallCaps: true })
                          ]
                        })
                      ]
                    }),
                    // Kontaktdaten
                    new TableCell({
                      borders: noBorders,
                      width: { size: 4320, type: WidthType.DXA },
                      verticalAlign: VerticalAlign.CENTER,
                      shading: { fill: NAVY, type: ShadingType.CLEAR },
                      margins: { top: 100, bottom: 100, left: 150, right: 150 },
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          children: [
                            new TextRun({ text: "hi@makler-websites.immo", font: "DM Sans", size: 18, color: CREAM })
                          ]
                        }),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          spacing: { before: 30 },
                          children: [
                            new TextRun({ text: "+49 123 456 78", font: "DM Sans", size: 18, color: CREAM })
                          ]
                        }),
                        new Paragraph({
                          alignment: AlignmentType.RIGHT,
                          spacing: { before: 30 },
                          children: [
                            new TextRun({ text: "www.promakler.de", font: "DM Sans", size: 18, color: GOLD })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            // Goldene Trennlinie
            new Paragraph({
              spacing: { before: 200, after: 300 },
              border: { bottom: goldBorder }
            })
          ]
        })
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              border: { top: goldBorder },
              spacing: { before: 100, after: 100 }
            }),
            // Navy-Balken mit Infos - volle Breite bis zum Seitenrand
            new Table({
              columnWidths: [11880],  // Volle Seitenbreite
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      borders: noBorders,
                      shading: { fill: NAVY, type: ShadingType.CLEAR },
                      width: { size: 11880, type: WidthType.DXA },
                      margins: { top: 120, bottom: 120, left: 1230, right: 1230 },  // Innerer Abstand für Text
                      children: [
                        new Paragraph({
                          alignment: AlignmentType.CENTER,
                          children: [
                            new TextRun({ text: "ProMakler Digital GmbH", font: "DM Sans", size: 16, color: CREAM, bold: true }),
                            new TextRun({ text: "  |  ", font: "DM Sans", size: 16, color: GOLD }),
                            new TextRun({ text: "Musterstraße 123, 12345 Musterstadt", font: "DM Sans", size: 16, color: CREAM })
                          ]
                        }),
                        new Paragraph({
                          alignment: AlignmentType.CENTER,
                          spacing: { before: 30 },
                          children: [
                            new TextRun({ text: "Geschäftsführer: Max Mustermann", font: "DM Sans", size: 14, color: "aaaaaa" }),
                            new TextRun({ text: "  |  ", font: "DM Sans", size: 14, color: GOLD }),
                            new TextRun({ text: "HRB 12345 AG Musterstadt", font: "DM Sans", size: 14, color: "aaaaaa" }),
                            new TextRun({ text: "  |  ", font: "DM Sans", size: 14, color: GOLD }),
                            new TextRun({ text: "USt-IdNr. DE123456789", font: "DM Sans", size: 14, color: "aaaaaa" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ],
              indent: { size: -1080, type: WidthType.DXA }  // Negativer Einzug zum linken Rand
            })
          ]
        })
      },
      children: [
        // Absenderzeile mit Navy-Hintergrund
        new Paragraph({
          spacing: { after: 400 },
          children: [
            new TextRun({ text: "ProMakler Digital GmbH · Musterstraße 123 · 12345 Musterstadt", font: "DM Sans", size: 14, color: "666666" })
          ]
        }),
        // Empfängeradresse
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "Firma / Name", font: "DM Sans", size: 22, color: NAVY })]
        }),
        new Paragraph({
          children: [new TextRun({ text: "Straße und Hausnummer", font: "DM Sans", size: 22, color: NAVY })]
        }),
        new Paragraph({
          spacing: { after: 500 },
          children: [new TextRun({ text: "PLZ Ort", font: "DM Sans", size: 22, color: NAVY })]
        }),
        // Datum
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          spacing: { after: 500 },
          children: [new TextRun({ text: "Musterstadt, den 03. Februar 2026", font: "DM Sans", size: 22, color: NAVY })]
        }),
        // Betreff mit Navy-Akzent
        new Paragraph({
          spacing: { after: 300 },
          border: { left: { style: BorderStyle.SINGLE, size: 24, color: NAVY } },
          indent: { left: 200 },
          children: [new TextRun({ text: "Betreff: Ihr Anliegen", font: "Cormorant Garamond", size: 28, bold: true, color: NAVY })]
        }),
        // Anrede
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "Sehr geehrte Damen und Herren,", font: "DM Sans", size: 22, color: NAVY })]
        }),
        // Brieftext
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "hier steht Ihr Brieftext. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", font: "DM Sans", size: 22, color: NAVY })]
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.", font: "DM Sans", size: 22, color: NAVY })]
        }),
        // Grußformel
        new Paragraph({
          spacing: { before: 400, after: 500 },
          children: [new TextRun({ text: "Mit freundlichen Grüßen", font: "DM Sans", size: 22, color: NAVY })]
        }),
        // Unterschrift
        new Paragraph({
          children: [new TextRun({ text: "Max Mustermann", font: "Cormorant Garamond", size: 26, bold: true, color: NAVY })]
        }),
        new Paragraph({
          children: [new TextRun({ text: "Geschäftsführer", font: "DM Sans", size: 18, color: GOLD })]
        }),

        // === SEITE 2: MOCKUPS ===
        new Paragraph({ children: [new PageBreak()] }),

        // Überschrift Seite 2
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 400, after: 100 },
          shading: { fill: NAVY, type: ShadingType.CLEAR },
          children: [new TextRun({ text: "  ", size: 20 })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({ text: "Ihre ", font: "Cormorant Garamond", size: 48, color: NAVY }),
            new TextRun({ text: "digitale Rendite-Immobilie", font: "Cormorant Garamond", size: 48, color: GOLD, italics: true })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Responsive Design für alle Endgeräte", font: "DM Sans", size: 24, color: NAVY })
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          border: { bottom: goldBorder }
        }),

        // Mockups nebeneinander
        new Table({
          columnWidths: [4000, 2800, 2000],
          rows: [
            new TableRow({
              children: [
                // Desktop
                new TableCell({
                  borders: noBorders,
                  width: { size: 4000, type: WidthType.DXA },
                  verticalAlign: VerticalAlign.BOTTOM,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new ImageRun({
                          type: "png",
                          data: desktopPng,
                          transformation: { width: 220, height: 165 },
                          altText: { title: "Desktop", description: "Desktop Mockup", name: "Desktop" }
                        })
                      ]
                    })
                  ]
                }),
                // Tablet
                new TableCell({
                  borders: noBorders,
                  width: { size: 2800, type: WidthType.DXA },
                  verticalAlign: VerticalAlign.BOTTOM,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new ImageRun({
                          type: "png",
                          data: tabletPng,
                          transformation: { width: 110, height: 150 },
                          altText: { title: "Tablet", description: "Tablet Mockup", name: "Tablet" }
                        })
                      ]
                    })
                  ]
                }),
                // Mobile
                new TableCell({
                  borders: noBorders,
                  width: { size: 2000, type: WidthType.DXA },
                  verticalAlign: VerticalAlign.BOTTOM,
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      children: [
                        new ImageRun({
                          type: "png",
                          data: mobilePng,
                          transformation: { width: 70, height: 150 },
                          altText: { title: "Mobil", description: "Mobile Mockup", name: "Mobil" }
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // Beschreibung unter Mockups
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 600, after: 200 },
          children: [
            new TextRun({ text: "Eine Website – perfekt optimiert für jeden Bildschirm", font: "DM Sans", size: 22, color: NAVY, bold: true })
          ]
        }),

        // Feature-Boxen
        new Table({
          columnWidths: [3240, 3240, 3240],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders: noBorders,
                  width: { size: 3240, type: WidthType.DXA },
                  margins: { top: 100, bottom: 100, left: 100, right: 100 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: NAVY, type: ShadingType.CLEAR },
                      spacing: { after: 0 },
                      children: [new TextRun({ text: " ", size: 8 })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { before: 150, after: 100 },
                      children: [new TextRun({ text: "Mobile First", font: "Cormorant Garamond", size: 24, bold: true, color: NAVY })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { after: 150 },
                      children: [new TextRun({ text: "Optimiert für Smartphones & Tablets", font: "DM Sans", size: 18, color: NAVY })]
                    })
                  ]
                }),
                new TableCell({
                  borders: noBorders,
                  width: { size: 3240, type: WidthType.DXA },
                  margins: { top: 100, bottom: 100, left: 100, right: 100 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: GOLD, type: ShadingType.CLEAR },
                      spacing: { after: 0 },
                      children: [new TextRun({ text: " ", size: 8 })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { before: 150, after: 100 },
                      children: [new TextRun({ text: "Blitzschnell", font: "Cormorant Garamond", size: 24, bold: true, color: NAVY })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { after: 150 },
                      children: [new TextRun({ text: "Ladezeiten unter 0,8 Sekunden", font: "DM Sans", size: 18, color: NAVY })]
                    })
                  ]
                }),
                new TableCell({
                  borders: noBorders,
                  width: { size: 3240, type: WidthType.DXA },
                  margins: { top: 100, bottom: 100, left: 100, right: 100 },
                  children: [
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: NAVY, type: ShadingType.CLEAR },
                      spacing: { after: 0 },
                      children: [new TextRun({ text: " ", size: 8 })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { before: 150, after: 100 },
                      children: [new TextRun({ text: "SEO-Optimiert", font: "Cormorant Garamond", size: 24, bold: true, color: NAVY })]
                    }),
                    new Paragraph({
                      alignment: AlignmentType.CENTER,
                      shading: { fill: CREAM, type: ShadingType.CLEAR },
                      spacing: { after: 150 },
                      children: [new TextRun({ text: "Top-Platzierung bei Google", font: "DM Sans", size: 18, color: NAVY })]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // CTA am Ende
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 400 },
          children: [
            new TextRun({ text: "Fordern Sie jetzt Ihr kostenloses Exposé an: ", font: "DM Sans", size: 22, color: NAVY }),
            new TextRun({ text: "hi@makler-websites.immo", font: "DM Sans", size: 22, color: GOLD, bold: true })
          ]
        })
      ]
    }]
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync("/Users/lucaingenbleek/Documents/ProMaklerWebsite/ProMakler_Briefkopf_v2.docx", buffer);
  console.log("Briefkopf v2 erstellt: ProMakler_Briefkopf_v2.docx");
}

createDocument().catch(console.error);

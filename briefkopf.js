const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer, AlignmentType, BorderStyle, WidthType, TabStopType, TabStopPosition, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

// CI-Farben
const NAVY = "1a2744";
const GOLD = "c9a962";
const CREAM = "f8f6f1";

// Keine Rahmen
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// Goldene Linie
const goldBorder = { style: BorderStyle.SINGLE, size: 12, color: GOLD };

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "DM Sans", size: 22 } // 11pt
      }
    },
    paragraphStyles: [
      {
        id: "Normal",
        name: "Normal",
        run: { font: "DM Sans", size: 22, color: NAVY }
      },
      {
        id: "CompanyName",
        name: "Company Name",
        run: { font: "Cormorant Garamond", size: 40, bold: true, color: NAVY }
      },
      {
        id: "ContactInfo",
        name: "Contact Info",
        run: { font: "DM Sans", size: 18, color: NAVY }
      },
      {
        id: "Footer",
        name: "Footer",
        run: { font: "DM Sans", size: 16, color: "666666" }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 720, right: 1080, bottom: 720, left: 1080 } // 0.5" top/bottom, 0.75" sides
      }
    },
    headers: {
      default: new Header({
        children: [
          // Briefkopf-Tabelle: Logo links, Kontakt rechts
          new Table({
            columnWidths: [5400, 4320],
            rows: [
              new TableRow({
                children: [
                  // Linke Zelle: Logo/Firmenname
                  new TableCell({
                    borders: noBorders,
                    width: { size: 5400, type: WidthType.DXA },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: "Pro", font: "Cormorant Garamond", size: 48, bold: true, color: NAVY }),
                          new TextRun({ text: "Makler", font: "Cormorant Garamond", size: 48, bold: true, color: GOLD })
                        ]
                      }),
                      new Paragraph({
                        spacing: { before: 40 },
                        children: [
                          new TextRun({ text: "Digital", font: "DM Sans", size: 20, color: NAVY, smallCaps: true })
                        ]
                      })
                    ]
                  }),
                  // Rechte Zelle: Kontaktdaten
                  new TableCell({
                    borders: noBorders,
                    width: { size: 4320, type: WidthType.DXA },
                    verticalAlign: VerticalAlign.CENTER,
                    children: [
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        children: [
                          new TextRun({ text: "hi@makler-websites.immo", font: "DM Sans", size: 18, color: NAVY })
                        ]
                      }),
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 40 },
                        children: [
                          new TextRun({ text: "+49 123 456 78", font: "DM Sans", size: 18, color: NAVY })
                        ]
                      }),
                      new Paragraph({
                        alignment: AlignmentType.RIGHT,
                        spacing: { before: 40 },
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
            spacing: { before: 200, after: 400 },
            border: { bottom: goldBorder }
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          // Goldene Trennlinie oben
          new Paragraph({
            border: { bottom: goldBorder },
            spacing: { after: 120 }
          }),
          // Rechtliche Angaben
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "ProMakler Digital GmbH", font: "DM Sans", size: 16, color: "666666" }),
              new TextRun({ text: "  |  ", font: "DM Sans", size: 16, color: GOLD }),
              new TextRun({ text: "Musterstraße 123, 12345 Musterstadt", font: "DM Sans", size: 16, color: "666666" })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 40 },
            children: [
              new TextRun({ text: "Geschäftsführer: Max Mustermann", font: "DM Sans", size: 14, color: "999999" }),
              new TextRun({ text: "  |  ", font: "DM Sans", size: 14, color: GOLD }),
              new TextRun({ text: "HRB 12345 AG Musterstadt", font: "DM Sans", size: 14, color: "999999" }),
              new TextRun({ text: "  |  ", font: "DM Sans", size: 14, color: GOLD }),
              new TextRun({ text: "USt-IdNr. DE123456789", font: "DM Sans", size: 14, color: "999999" })
            ]
          })
        ]
      })
    },
    children: [
      // Absenderzeile
      new Paragraph({
        spacing: { after: 400 },
        children: [
          new TextRun({ text: "ProMakler Digital GmbH · Musterstraße 123 · 12345 Musterstadt", font: "DM Sans", size: 14, color: "999999" })
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
        spacing: { after: 600 },
        children: [new TextRun({ text: "PLZ Ort", font: "DM Sans", size: 22, color: NAVY })]
      }),
      // Datum rechtsbündig
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        spacing: { after: 600 },
        children: [new TextRun({ text: "Musterstadt, den 03. Februar 2026", font: "DM Sans", size: 22, color: NAVY })]
      }),
      // Betreff
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: "Betreff: Ihr Anliegen", font: "Cormorant Garamond", size: 28, bold: true, color: NAVY })]
      }),
      // Anrede
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Sehr geehrte Damen und Herren,", font: "DM Sans", size: 22, color: NAVY })]
      }),
      // Beispieltext
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "hier steht Ihr Brieftext. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", font: "DM Sans", size: 22, color: NAVY })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", font: "DM Sans", size: 22, color: NAVY })]
      }),
      // Grußformel
      new Paragraph({
        spacing: { before: 400, after: 600 },
        children: [new TextRun({ text: "Mit freundlichen Grüßen", font: "DM Sans", size: 22, color: NAVY })]
      }),
      // Unterschrift
      new Paragraph({
        children: [new TextRun({ text: "Max Mustermann", font: "Cormorant Garamond", size: 24, bold: true, color: NAVY })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Geschäftsführer", font: "DM Sans", size: 18, color: "666666" })]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/Users/lucaingenbleek/Documents/ProMaklerWebsite/ProMakler_Briefkopf.docx", buffer);
  console.log("Briefkopf erstellt: ProMakler_Briefkopf.docx");
});

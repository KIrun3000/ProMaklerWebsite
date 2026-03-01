# ProMakler Digital – Brand Guidelines & Assets
## Für Claude Skills (Dokument-, PDF-, DOCX-, PPTX-Erstellung)

**Version:** 1.0  
**Datum:** 4. Februar 2026  
**Status:** Production-Ready  

---

## 🎯 Executive Summary

Diese Brand Guidelines dienen als zentrale Referenz für die Erstellung aller ProMakler-Dokumente via Claude Skills (docx, pdf, pptx, canvas-design, etc.). Sie enthalten alle visuellen Markenelemente, Farbcodes, Typografie, Logo-Spezifikationen und Design-Patterns der ProMakler-Website.

---

## 📐 Brand Essence

### Positionierung
**"Digitale Projektentwicklung für Immobilienmakler"**

ProMakler überträgt die Prinzipien der Immobilien-Projektentwicklung auf Webdesign:
- **Solide Bausubstanz** = Sauberer Code
- **Beste Lage** = Top-Positionen bei Google
- **Nachhaltigkeit** = Systeme, die wachsen

### Tone of Voice
- **Fachlich, aber zugänglich** – Keine Agentur-Floskeln
- **Konkret statt abstrakt** – Messbare Ergebnisse (+47% Anfragen, nicht "mehr Leads")
- **Immobilien-Metaphern** – Bausubstanz-Analyse, Schlüsselübergabe, Rendite-Rechnung
- **Direkt & ehrlich** – "Ihre Website ist ein Sanierungsfall" statt "Optimierungspotenzial"

### Zielgruppe
- Immobilienmakler (Einzelkämpfer bis mittelgroße Büros)
- Nutzer von onOffice, FlowFact, JustImmo
- 35-55 Jahre alt
- Suchen professionelle, aber bezahlbare Lösungen

---

## 🎨 Farbpalette

### Primärfarben

#### **Navy (Hauptfarbe – Seriosität)**
```
--navy: #1a2744
RGB: 26, 39, 68
```
- **Verwendung:** Haupthintergründe, Headlines, Buttons (Outline)
- **Kontrast:** Weiß/Cream als Text darauf

#### **Navy Dark (Dunkel-Variante)**
```
--navy-dark: #0f1829
RGB: 15, 24, 41
```
- **Verwendung:** Gradients, Dark Sections, Background-Overlays

#### **Gold (Akzent – Premium)**
```
--gold: #c9a962
RGB: 201, 169, 98
```
- **Verwendung:** CTAs, Icons, Hervorhebungen, Logo-Akzent
- **Kontrast:** Funktioniert auf Navy und Cream

### Sekundärfarben

#### **Gold Light (Hover-States)**
```
--gold-light: #dbc78a
RGB: 219, 199, 138
```

#### **Gold Dark (Text auf hellem Grund)**
```
--gold-dark: #a68a4a
RGB: 166, 138, 74
```

#### **Anthrazit (Text auf hellem Grund)**
```
--anthrazit: #2d3436
RGB: 45, 52, 54
```

#### **Anthrazit Light**
```
--anthrazit-light: #3d4446
RGB: 61, 68, 70
```

### Hintergrundfarben

#### **Cream (Light Sections)**
```
--cream: #f8f6f1
RGB: 248, 246, 241
```
- **Verwendung:** Light Sections, Dokumenten-Hintergründe

#### **Cream Dark (Borders/Boxes)**
```
--cream-dark: #e8e4db
RGB: 232, 228, 219
```

#### **White (Cards)**
```
--white: #ffffff
RGB: 255, 255, 255
```

### Spezialfarben

#### **Blueprint (Overlay-Pattern)**
```
--blueprint: #1e3a5f
RGB: 30, 58, 95
--blueprint-line: rgba(255, 255, 255, 0.08)
```

---

## ✍️ Typografie

### Display Font (Headlines)
**Cormorant Garamond**
- Weights: 400, 500, 600, 700
- Styles: Normal, Italic
- Fallback: Georgia, serif

**Verwendung:**
- H1, H2 (große Headlines)
- Testimonial-Zitate
- Logo-Text "ProMakler"
- Preisangaben

**Charakteristik:**
- Elegante Serifen-Schrift
- Vermittelt Seriosität & Tradition
- Immobilien-typisch (wie klassische Makler-Schilder)

### Body Font (Fließtext)
**DM Sans**
- Weights: 300, 400, 500, 600
- Fallback: -apple-system, sans-serif

**Verwendung:**
- Fließtext, Paragraphen
- Buttons, CTAs
- UI-Elemente
- Navigation

**Charakteristik:**
- Modern & lesbar
- Optimale Bildschirm-Lesbarkeit
- Professionell ohne übermäßig technisch zu wirken

### Typografie-Hierarchie

```
H1: 
  - Font: Cormorant Garamond
  - Size: clamp(2.5rem, 5vw, 4rem)
  - Weight: 600
  - Line-Height: 1.15
  - Color: --cream (auf Navy) / --navy (auf Cream)

H2:
  - Font: Cormorant Garamond
  - Size: clamp(2rem, 4vw, 3rem)
  - Weight: 600
  - Line-Height: 1.2
  - Color: --cream / --navy

H3:
  - Font: Cormorant Garamond
  - Size: 1.5rem
  - Weight: 600
  - Color: --cream / --navy

Body Text:
  - Font: DM Sans
  - Size: 1rem (16px)
  - Weight: 400
  - Line-Height: 1.6-1.8
  - Color: rgba(248, 246, 241, 0.8) auf Navy
           var(--anthrazit) auf Cream

Section Tag (Kleingedrucktes über H2):
  - Font: DM Sans
  - Size: 0.75rem
  - Weight: 600
  - Letter-Spacing: 0.1em
  - Text-Transform: uppercase
  - Color: --gold / --gold-dark
  - Mit dekorativen Linien links/rechts
```

---

## 🏢 Logo

### Logo-Konstruktion

Das Logo besteht aus **2 Komponenten**:

#### 1. Logo-Icon (44x44px SVG)
```svg
<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Äußerer Rahmen (Navy/Cream) -->
  <rect x="2" y="2" width="40" height="40" 
        stroke="currentColor" stroke-width="1.5" fill="none"/>
  
  <!-- Innerer Rahmen (Gold) -->
  <rect x="8" y="8" width="28" height="28" 
        stroke="#c9a962" stroke-width="1" fill="none"/>
  
  <!-- Vertikale Linie (Gold) -->
  <line x1="22" y1="8" x2="22" y2="36" 
        stroke="#c9a962" stroke-width="0.75"/>
  
  <!-- Horizontale Linie (Gold) -->
  <line x1="8" y1="22" x2="36" y2="22" 
        stroke="#c9a962" stroke-width="0.75"/>
  
  <!-- Zentrum (Gold, transparent) -->
  <rect x="14" y="14" width="16" height="16" 
        fill="#c9a962" fill-opacity="0.2"/>
</svg>
```

**Bedeutung:**
- **Bauplan-Raster** – Referenz zur Projektentwicklung
- **Gold-Akzente** – Premium-Positionierung
- **Geometrisch** – Präzision, Struktur, Fundament

#### 2. Logo-Text
```
Pro<span>Makler</span>
```

**Styling:**
- Font: Cormorant Garamond, 600
- Size: 1.5rem
- "Pro" in --cream (weiß/beige)
- "Makler" in --gold (hervorgehoben)
- Letter-Spacing: -0.02em (enger)

### Logo-Varianten

#### Horizontal (Standard)
```
[Icon] Pro[Makler]
```
- Gap: 0.75rem zwischen Icon und Text
- Verwendung: Navigation, Footer, Dokument-Header

#### Icon-Only
Nur Icon ohne Text für:
- Favicons
- Social Media Profilbilder
- Wasserzeichen

### Logo-Schutzraum
- Mindestabstand um das Logo: 1x Icon-Höhe (44px)
- Nicht auf unruhigen Hintergründen platzieren

### Logo-Farbvarianten

| Variante | Icon Rahmen | Gold-Elemente | Text "Pro" | Text "Makler" | Hintergrund |
|----------|-------------|---------------|------------|---------------|-------------|
| **Standard (Dark)** | --cream | --gold | --cream | --gold | --navy / transparent |
| **Light** | --navy | --gold | --navy | --gold | --cream / transparent |
| **Monochrome** | currentColor | currentColor | currentColor | currentColor | variabel |

---

## 🎨 Design-Patterns & UI-Elemente

### Sections

#### Dark Section
```css
background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
padding: 6rem 0;
```

#### Light Section
```css
background: var(--cream);
padding: 6rem 0;
```

### Section-Header (zentriert)
```html
<span class="section-tag">Überschrift</span>
<h2>Haupt-Headline</h2>
<p class="section-intro">Intro-Text...</p>
```

**Section-Tag:**
- Uppercase, 0.75rem, --gold/--gold-dark
- Mit dekorativen Linien (30px) links & rechts

### Cards

#### Standard Card (auf Cream-Background)
```css
background: var(--white);
border: 1px solid var(--cream-dark);
padding: 2rem;
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

#### Card Hover
```css
transform: translateY(-4px) bis translateY(-8px);
box-shadow: 0 10px 30px rgba(26, 39, 68, 0.1) bis 0.15;
border-color: var(--gold); /* optional */
```

#### Card auf Dark-Background
```css
background: rgba(248, 246, 241, 0.03);
border: 1px solid rgba(248, 246, 241, 0.1);
```

### Buttons

#### Primary Button (CTA)
```css
background: var(--gold);
color: var(--navy-dark);
padding: 1rem 2rem;
border: none;
font: DM Sans, 600, 0.85rem;
text-transform: uppercase;
letter-spacing: 0.05em;
```

**Hover:**
```css
background: var(--gold-light);
transform: translateY(-2px);
```

#### Secondary Button (Outline)
```css
background: transparent;
border: 1px solid var(--gold);
color: var(--gold);
```

**Hover:**
```css
background: var(--gold);
color: var(--navy-dark);
```

### Icons & Badges

#### Trust Badges
- Icon: 40x40px Kreis, --gold background (15% opacity)
- Icon Color: --gold
- Text: Strong (600), mit Subtitle (0.8rem, opacity 0.6)

#### Checkmarks (Feature-Listen)
```svg
<svg width="16" height="16" viewBox="0 0 24 24" 
     fill="none" stroke="var(--gold)" stroke-width="2">
  <polyline points="20 6 9 17 4 12"/>
</svg>
```

### Spacing & Layout

#### Container
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 2rem;
```

#### Grid-Layouts
```css
/* 2 Spalten Desktop, 1 Mobile */
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;

@media (max-width: 768px) {
  grid-template-columns: 1fr;
}
```

---

## 📝 Textbausteine & Messaging

### Tagline
**"Digitale Rendite-Immobilien für Makler"**
**"Wir entwickeln Ihre digitale Rendite-Immobilie"**

### Key Messages
1. **"Von Makler für Makler"** – Wir sprechen Ihre Sprache (Farming, Off-Market, Courtage)
2. **"Messbare Ergebnisse"** – +47% Anfragen, -60% Admin-Arbeit (konkrete Zahlen)
3. **"Bezugsfertig in 14 Tagen"** – Schnelle Umsetzung
4. **"100% onOffice & FlowFact kompatibel"** – CRM-Integration als USP

### Immobilien-Metaphern (durchgängig nutzen!)
- **Bausubstanz-Analyse** statt "Website-Audit"
- **Schlüsselübergabe** statt "Go-Live"
- **Rendite-Rechnung** statt "ROI-Kalkulation"
- **Sanierungsfall** statt "veraltete Website"
- **Digitale Projektentwicklung** statt "Webdesign"
- **Mehrfamilienhaus-Modell** statt "Paket-Angebote"

### Call-to-Actions
- ✅ "Kostenloses Beratungsgespräch"
- ✅ "Jetzt Erstgespräch vereinbaren"
- ✅ "Website-Audit anfragen"
- ❌ NICHT: "Kontakt", "Mehr erfahren" (zu generisch)

---

## 🖼️ Visuelle Elemente

### Blueprint Grid Pattern (Hintergrund)
- 20x20px Raster
- Farbe: rgba(255, 255, 255, 0.08) auf --navy
- Opacity: 0.4
- Fixed Position, z-index: 0

### Fade-In Animations
```css
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Trigger:** IntersectionObserver bei 10% Sichtbarkeit

**Respektiert:** `prefers-reduced-motion: reduce`

### Easing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 📄 Dokument-Templates

### Dokumenten-Header
```
[Logo: Icon + Text]                    [Datum]
──────────────────────────────────────────────
```

### Seiten-Aufbau (PDFs, DOCX)

#### Cover Page
- **Background:** Gradient --navy → --navy-dark
- **Logo:** Zentriert, groß
- **Titel:** H1, Cormorant, --cream
- **Subtitle/Datum:** DM Sans, --gold
- **Dekorative Elemente:** Gold-Linien

#### Content Pages
- **Background:** --cream
- **Margins:** 2cm rundum
- **Header:** Logo (klein, links) + Seitenzahl (rechts)
- **Footer:** "ProMakler Digital | promakler.de" zentriert

#### Section-Trenner
```
────────────────────────────────────────
  [Section Tag in Gold]
────────────────────────────────────────
```

### Tabellen-Styling
- **Header:** --navy background, --cream Text, Bold
- **Rows:** Alternierend --cream / --white
- **Border:** 1px solid --cream-dark
- **Padding:** 0.75rem

### Listen
- **Bullets:** Gold Checkmarks (✓) oder Gold Dots (•)
- **Spacing:** 0.5rem zwischen Items

---

## 🎯 Anwendungsbeispiele für Claude Skills

### 1. **docx Skill** – Angebotsdokument
```markdown
# Cover:
- Background: Navy Gradient
- Logo: Zentriert, groß
- Titel: "Website-Angebot für [Kunde]"
- Datum: [Aktuelles Datum]

# Seite 2: Executive Summary
- Section-Tag: "Projektübersicht"
- H2: "Ihre digitale Rendite-Immobilie"
- Body: DM Sans, --anthrazit auf --cream

# Seite 3: Leistungsübersicht
- Tabelle mit 3 Spalten: Leistung | Details | Preis
- Checkmark-Liste für Features

# Letzte Seite: Kontakt
- CTA-Box mit Gold-Rand
- Button-Styling (simuliert als farbiger Kasten)
```

### 2. **pdf Skill** – Case Study
```markdown
# Cover:
- Full-Bleed Navy Background
- Gold-Akzente (Linien)
- Testimonial-Zitat prominent

# Content:
- 2-Spalten Layout
- Icons in Gold
- Hervorgehobene Kennzahlen (+47%, -60%) in großer Cormorant-Schrift
```

### 3. **pptx Skill** – Pitch Deck
```markdown
# Slide 1 (Cover):
- Navy Background
- Logo + Tagline

# Slide 2 (Problem):
- Section-Tag: "Bausubstanz-Analyse"
- 3 Problem-Cards mit Icons

# Slide 3 (Solution):
- Cream Background
- Feature-Grid mit Checkmarks

# Slide 4 (Pricing):
- 3-Spalten Tabelle
- Middle Column hervorgehoben (Gold-Border)
```

### 4. **canvas-design Skill** – Social Media Post
```markdown
# Instagram Post (1080x1080):
- Background: Navy Gradient
- Logo: Top-Left
- Headline: Cormorant, groß, zentriert
- Gold-Akzent: Underline oder Rahmen
- CTA: Gold Button unten
```

---

## ✅ Checkliste für Dokument-Erstellung

Vor der Erstellung mit Claude Skills sicherstellen:

- [ ] **Farben:** Primär Navy + Gold, Sekundär Cream
- [ ] **Fonts:** Cormorant (Headlines), DM Sans (Body)
- [ ] **Logo:** Icon + Text, korrekte Farben
- [ ] **Section-Tags:** Uppercase, Gold, mit Linien
- [ ] **Buttons/CTAs:** Gold Background, Navy Text, Uppercase
- [ ] **Spacing:** Ausreichend Weißraum (min. 2rem between sections)
- [ ] **Icons:** Gold Stroke, 2px, auf Navy/Cream
- [ ] **Metaphern:** Immobilien-Sprache verwenden
- [ ] **Tone:** Fachlich, ehrlich, konkret (keine Floskeln)

---

## 🔗 Kontakt & Brand-Verantwortung

**ProMakler Digital**  
Web: https://promakler.de  
E-Mail: hi@makler-websites.immo  
Telefon: +49 123 456 78 (Placeholder)

**Brand Guidelines Version:** 1.0  
**Letzte Aktualisierung:** 4. Februar 2026  

---

## 🎨 Anhang: Farb-Referenzkarte

```
████ Navy          #1a2744  RGB(26,39,68)
████ Navy Dark     #0f1829  RGB(15,24,41)
████ Gold          #c9a962  RGB(201,169,98)
████ Gold Light    #dbc78a  RGB(219,199,138)
████ Gold Dark     #a68a4a  RGB(166,138,74)
████ Anthrazit     #2d3436  RGB(45,52,54)
████ Cream         #f8f6f1  RGB(248,246,241)
████ Cream Dark    #e8e4db  RGB(232,228,219)
████ White         #ffffff  RGB(255,255,255)
```

---

**Ende des Dokuments**

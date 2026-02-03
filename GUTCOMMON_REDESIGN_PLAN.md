# GutCommon Mini-Site Redesign Plan

## Executive Summary

Transform the GutCommon section from a simple informational block into an immersive, story-driven mini-site experience that captures the soul of the project—connecting discerning global consumers with exceptional artisanal products from Yunnan's ethnic minority communities.

---

## Brand Understanding

### Mission
**"Good for Your Gut. Good for Communities."**

GutCommon bridges two worlds:
1. **Remote artisans** in Yunnan who craft exceptional products using generations-old methods
2. **Global consumers** seeking authentic, natural, gut-healthy foods with provenance and purpose

### Brand Pillars
1. **Heritage** - Preserving traditional craftsmanship
2. **Quality** - Meeting and exceeding global standards
3. **Community** - Supporting ethnic minority farmers
4. **Sustainability** - Responsible sourcing and production
5. **Wellness** - Natural foods that nourish body and soul

### Tone of Voice
- **Warm & Inviting** - Like sharing a meal with friends
- **Authentic** - Real stories, real people, real places
- **Premium** - Quality without pretension
- **Purposeful** - Every product has meaning

---

## Visual Design Concept

### Design Philosophy: "Where Mountains Meet Markets"

Create a visual journey from the misty peaks of Yunnan to the dining tables of the world. The design should feel:
- **Cinematic** - Full-width imagery that transports
- **Textured** - Earthy, organic, handcrafted
- **Elegant** - Premium without being cold
- **Narrative** - Each scroll reveals more of the story

### Color Palette

```css
/* Primary Colors - Earthy & Warm */
--gc-earth: #5D4E37;        /* Rich earth brown - heritage, soil */
--gc-wine: #722F37;         /* Deep burgundy - wine accent */
--gc-gold: #C9A962;         /* Warm gold - premium highlights */
--gc-ham: #8B4513;          /* Saddle brown - ham/cured meat */

/* Secondary Colors - Yunnan Nature */
--gc-mountain: #3D5A6C;     /* Blue-gray - mountain mist */
--gc-forest: #4A5D4A;       /* Forest green - pine forests */
--gc-cream: #F5F0E6;        /* Warm cream - backgrounds */
--gc-mist: #E8E4DD;         /* Light mist - subtle accents */

/* Accent Colors */
--gc-sunset: #D4856A;       /* Sunset orange - warmth */
--gc-cloud: #FDFBF7;        /* Cloud white - clean space */
```

### Typography
- **Headlines**: Playfair Display (elegant serif) - for premium feel
- **Body**: Inter (clean sans-serif) - for readability
- **Chinese**: Noto Serif SC - for product names

---

## Section Architecture

### 1. HERO: "The Journey Begins"
**Full-viewport cinematic hero with parallax**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Full-screen: Stunning Yunnan valley dinner scene]        │
│                                                            │
│           谷共 · GutCommon                                  │
│                                                            │
│    "Where Ancient Traditions Meet Modern Tables"           │
│                                                            │
│         [Scroll indicator animation]                       │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Photo**: `943bb49a7e19e8e4d29bd4bc19b17fa3.JPG` (mountain valley dinner)
or `15be851f90fbb5101ccc4e6492f80964.jpg` (stunning view with wine glasses)

### 2. MANIFESTO: "Our Story"
**Split-screen with scrolling text reveal**

```
┌─────────────────────┬──────────────────────────────────────┐
│                     │                                      │
│  [Vertical photo    │  In the remote mountains of Yunnan,  │
│   of stream         │  where clouds kiss ancient peaks,    │
│   crossing]         │  ethnic minority farmers have        │
│                     │  perfected their craft for           │
│                     │  generations.                        │
│                     │                                      │
│                     │  GutCommon exists to honor their     │
│                     │  traditions while opening doors      │
│                     │  to the world.                       │
│                     │                                      │
│                     │  Every product tells a story.        │
│                     │  Every purchase supports a family.   │
│                     │  Every bite connects you to the land.│
│                     │                                      │
└─────────────────────┴──────────────────────────────────────┘
```

**Photo**: `c5afaafaf8d30912953722afdf6406ab.jpg` (crossing stream)

### 3. IMPACT METRICS: "Our Impact"
**Horizontal scroll counter animation**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│     5+              50+             2,600m          36     │
│  Communities      Families        Elevation       Months   │
│   Supported       Partnered       Vineyards       Aging    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 4. PRODUCT STORY 1: "The Wine"
**Full-width immersive product showcase**

```
┌────────────────────────────────────────────────────────────┐
│ [Background: Wine bottles display - elegant setting]       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                    水乳大地                                 │
│              Shui Ru Da Di                                 │
│         Cabernet Sauvignon 2020                            │
│                                                            │
│  ─────────────────────────────────────────                 │
│                                                            │
│  At 2,600 meters above sea level, where the air is        │
│  thin and the sun intense, Lisu minority farmers          │
│  tend vineyards that produce grapes of remarkable         │
│  concentration and character.                              │
│                                                            │
│  Each bottle captures the essence of Yunnan's unique      │
│  terroir—bold yet balanced, complex yet approachable.     │
│                                                            │
│  [Feature icons: Altitude | Organic | Small-batch]        │
│                                                            │
└────────────────────────────────────────────────────────────┘

┌─────────────────────┬──────────────────────────────────────┐
│ [Photo: Winery      │ [Photo: Wine tasting event           │
│  terracotta pots]   │  with ethnic dress]                  │
└─────────────────────┴──────────────────────────────────────┘
```

**Photos**:
- `66440b9302ae8f675cb4345ee19ae840.JPG` (wine bottles)
- `8efaae6e5ae0d39b107826248d5d8896.jpg` (wine display)
- `3219985555a732eba71fa8e902ace161.jpg` (tasting event)
- `IMG_9399.JPG` (winery barrels)

### 5. PRODUCT STORY 2: "The Ham"
**Alternating layout with texture focus**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│                      诺邓火腿                               │
│               Nuodeng Heritage Ham                         │
│          36-Month Farm-Cured Delicacy                      │
│                                                            │
├──────────────────────────────┬─────────────────────────────┤
│                              │                             │
│  In the village of Nuodeng,  │  [Photo: Ham curing         │
│  where the Bai minority has  │   facility with hams        │
│  cured ham for over 1,000    │   hanging]                  │
│  years, time moves slowly.   │                             │
│                              │                             │
│  36 months. That's how long  │                             │
│  each ham ages in the unique │                             │
│  Nuodeng microclimate—       │                             │
│  developing flavors that     │                             │
│  rival the finest European   │                             │
│  prosciuttos.                │                             │
│                              │                             │
│  [Feature: Traditional |     │                             │
│   Natural | Heritage]        │                             │
│                              │                             │
└──────────────────────────────┴─────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│ [Full-width: Person slicing ham with wine glasses nearby]  │
└────────────────────────────────────────────────────────────┘
```

**Photos**:
- `IMG_9658.jpg` (ham curing facility)
- `72b09628-67a3-4983-a4dd-01f0d72624f2.jpg` (ham slicing)

### 6. JOURNEY GALLERY: "Behind the Scenes"
**Masonry grid with lightbox and captions**

```
┌────────────────────────────────────────────────────────────┐
│                   The GutCommon Journey                    │
│         Following the path from farm to table              │
├────────┬────────┬────────┬────────┬────────┬──────────────┤
│ [img]  │ [img]  │ [img]  │ [img]  │ [img]  │    [img]     │
│        │        │        │        │        │              │
│Meeting │Forest  │Outdoor │Team    │Local   │ Wine         │
│locals  │hike    │dining  │selfie  │elder   │ event        │
└────────┴────────┴────────┴────────┴────────┴──────────────┘
```

**Photos**:
- `23961c68-75c4-4fa4-a443-ef2df1ac81e5.jpg` (with local elder)
- `IMG_0015.jpg` (forest exploration)
- `5ddc891ceb6b39837f4e57790b8933ee.jpg` (outdoor dining setup)
- `5eafaac55f53f002a66bd00fae77c98e.jpg` (table in forest)
- `07fc1ab65f64a1d47ea7b610f9c7e77a.jpg` (team selfie)
- `4f24cef7ef967b492781a368e2cecafc.jpg` (wine celebration)

### 7. OUR APPROACH: "How We Work"
**Horizontal timeline or icon grid**

```
┌────────────────────────────────────────────────────────────┐
│                    How GutCommon Works                     │
├────────────┬────────────┬────────────┬────────────────────┤
│    🤝      │    🏔️      │    ✈️      │       📦          │
│            │            │            │                    │
│  CONNECT   │ UNDERSTAND │   VISIT    │   DELIVER          │
│            │            │            │                    │
│ Partner    │ Study      │ Regular    │ Bring products     │
│ with local │ geography, │ site visits│ to global          │
│ farmers &  │ climate &  │ to ensure  │ markets with       │
│ artisans   │ challenges │ quality    │ full compliance    │
│            │            │            │                    │
└────────────┴────────────┴────────────┴────────────────────┘
```

### 8. GUT HEALTH: "Good For You"
**New section highlighting health benefits**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              Why "GutCommon"?                              │
│                                                            │
│  Natural, traditionally-prepared foods that support        │
│  gut health and overall wellness.                          │
│                                                            │
│  ┌──────────────────┐  ┌──────────────────┐               │
│  │  🍷 Red Wine      │  │  🥓 Cured Ham     │               │
│  │                  │  │                  │               │
│  │  Rich in         │  │  Natural         │               │
│  │  polyphenols &   │  │  fermentation    │               │
│  │  antioxidants    │  │  probiotics      │               │
│  │  that support    │  │  from 36-month   │               │
│  │  gut microbiome  │  │  aging process   │               │
│  └──────────────────┘  └──────────────────┘               │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 9. INSTAGRAM FEED: "Follow the Journey"
**Live Instagram embed or curated grid**

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  📸 Follow @gutcommon on Instagram                         │
│                                                            │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │
│  │     │ │     │ │     │ │     │ │     │ │     │         │
│  │     │ │     │ │     │ │     │ │     │ │     │         │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘         │
│                                                            │
│            [ Follow @gutcommon → ]                         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Copywriting Strategy

### Headlines (Emotional, Evocative)

| Section | Current | Proposed |
|---------|---------|----------|
| Hero | "Project GutCommon" | "谷共 · Where Ancient Traditions Meet Modern Tables" |
| Mission | "Good for Your Gut..." | "Every Bite Tells a Story" |
| Wine | "Shui Ru Da Di..." | "Born at 2,600 Meters, Destined for Your Glass" |
| Ham | "Nuodeng Heritage Ham" | "36 Months of Patience. Generations of Craft." |
| Gallery | "Our Journey in Pictures" | "The Faces Behind the Flavors" |

### Key Copy Themes

1. **Place & Origin**
   - "From the misty peaks of Yunnan..."
   - "Where clouds meet ancient traditions..."
   - "2,600 meters above sea level..."

2. **People & Community**
   - "Lisu minority farmers who've tended these vines for generations..."
   - "Bai artisans who've perfected this craft over 1,000 years..."
   - "Supporting families, preserving heritage..."

3. **Time & Patience**
   - "36 months of slow, natural aging..."
   - "Traditions passed down through generations..."
   - "Good things take time..."

4. **Quality & Authenticity**
   - "Meeting and exceeding global standards..."
   - "No shortcuts, no compromises..."
   - "Authentic flavors, verified provenance..."

5. **Wellness & Purpose**
   - "Good for your gut, good for communities..."
   - "Natural fermentation, traditional methods..."
   - "Nourishment with meaning..."

---

## Image Selection & Processing

### Required Images (to be processed)

| Purpose | Source File | Target Name | Notes |
|---------|-------------|-------------|-------|
| Hero | 943bb49...JPG or 15be851...jpg | hero-valley.jpg | Full-width, 1920px |
| Wine Product | 66440b93...JPG | wine-bottles.jpg | Product showcase |
| Wine Event | 8efaae6e...jpg | wine-tasting.jpg | Elegant setting |
| Wine Presentation | 3219985...jpg | wine-event.jpg | With ethnic dress |
| Winery | IMG_9399.JPG | winery.jpg | Barrel room |
| Ham Facility | IMG_9658.jpg | ham-curing.jpg | Hanging hams |
| Ham Slicing | 72b09628...jpg | ham-slicing.jpg | Preparation |
| Community 1 | 23961c68...jpg | community-elder.jpg | With local |
| Community 2 | IMG_0015.jpg | community-forest.jpg | Exploration |
| Dining 1 | 5ddc891c...jpg | dining-forest.jpg | Forest dining |
| Dining 2 | 5eafaac5...jpg | dining-table.jpg | Table setup |
| Team | 07fc1ab6...jpg | team-selfie.jpg | Group photo |
| Celebration | 4f24cef7...jpg | wine-celebration.jpg | Group event |
| Stream | c5afaafa...jpg | stream-crossing.jpg | Adventure |

### Image Processing Steps
1. Convert HEIC files to JPG
2. Resize to max 1920px width (hero) or 1200px (gallery)
3. Optimize for web (80% quality)
4. Create WebP versions for modern browsers

---

## Technical Implementation

### Animation & Interactions

1. **Scroll-triggered fade-ins** (IntersectionObserver)
2. **Parallax hero** (subtle background movement)
3. **Counter animations** (stats count up on scroll)
4. **Image lazy loading** (native loading="lazy")
5. **Gallery lightbox** (click to enlarge)
6. **Hover effects** (subtle scale on cards)

### Performance Considerations

- Use `loading="lazy"` for below-fold images
- Implement responsive images with `srcset`
- Preload hero image
- Use CSS transforms for animations (GPU-accelerated)

### Accessibility

- Proper heading hierarchy (h2 → h3 → h4)
- Alt text for all images
- Sufficient color contrast
- Keyboard-navigable gallery

---

## Implementation Phases

### Phase 1: Asset Preparation
- [x] Process and optimize all images
- [x] Create new image directory structure
- [x] Convert HEIC files to JPG (not needed — all target images are JPG)

### Phase 2: Structure & Content
- [x] Update data arrays in about.astro
- [x] Rewrite all copy with new tone (bilingual EN + CN editorial style)
- [x] Add new sections: Brand Story, Wine Details (7 sub-sections), Sticky Nav

### Phase 3: Visual Design
- [x] Update CSS variables with new palette
- [x] Implement new section layouts (editorial split layouts, aroma wheel, data cards)
- [x] Add Playfair Display font (via Google Fonts in global.css)
- [x] Create responsive breakpoints (1024px, 768px, 480px)

### Phase 4: Interactions
- [x] Add scroll animations (IntersectionObserver — existing gc-animate system reused)
- [x] Implement sticky mini-nav (IntersectionObserver — shows/hides with scroll)
- [x] Gallery lightbox (preserved from original)
- [x] Parallax hero (preserved from original)

### Phase 5: Polish & QA
- [x] Build verification — `npm run build` passes with 0 errors
- [x] Mobile responsiveness — breakpoints added for all new sections
- [x] 68/68 automated checks passed on live dev server
- [x] Section ordering verified end-to-end

---

## Success Metrics

- **Engagement**: Time spent on GutCommon section
- **Scroll Depth**: Percentage reaching Instagram CTA
- **Clicks**: Instagram profile visits
- **Perception**: Premium, authentic, purposeful brand feel

---

## Appendix: Mood Board References

### Design Inspiration
- **Patagonia Provisions** - Storytelling for food with purpose
- **Aesop** - Premium minimalism with warmth
- **Oatly** - Bold copy, human brand voice
- **Rapha** - Journey/adventure storytelling

### Photography Style
- Natural lighting
- Authentic moments (not overly staged)
- Landscape context (showing the place)
- Human connection (faces, hands, community)

---

---

## Implementation Notes (February 2026)

### Actual Approach — Vitaly Friedman Editorial Style
The final implementation adopted a **Vitaly Friedman editorial** design philosophy over the original cinematic/immersive concept:
- Typography-driven hierarchy (Playfair Display serif headings, system sans-serif body)
- Generous whitespace, single-column narrative flow for Brand Story
- Left-border citation lines on narrative blocks (gold `--gc-gold`)
- Asymmetric split layouts for Wine Detail sub-sections
- Minimal decoration — images serve the story, not the other way around

### Section Structure (as built)
```
#gutcommon
├── Sticky Mini-Nav          — logo + 3 jump links, backdrop-blur cream bar
├── Hero                     — logo shrunk to 180px, no shadow, signature feel
├── Brand Story              — pull quote → 5 bilingual narrative blocks → RADICA credit
├── Wine Details (水乳大地)
│     ├── Wine Hero          — full-bleed 66440b93.JPG, title overlay
│     ├── About the Wine     — left/right split, 943bb49a.JPG
│     ├── The Winemakers     — Yves & Helene story, 3219985.jpg
│     ├── Tasting Notes      — 4-node aroma wheel (CSS grid), poetry-style notes
│     ├── Uniqueness         — 3 data cards (5,000 / 2,360 / 16), clay pot note
│     ├── Where to Buy       — MyiCellar CTA + 12 venue list + 4f24cef7.jpg
│     └── Testimonial        — Leo Lo quote, large serif italic
├── Five Pillars             (preserved)
├── Products Showcase        (preserved)
├── Photo Album + Slideshow  (preserved)
├── Discovery Tour           (preserved)
├── Rosewood Case Study      (preserved)
└── Social CTA               (preserved)
```

### Image Substitutions
Four images referenced in the plan (`cba02162`, `c141ab7a`, `c4699ef3`, `d76af86c`) were not present in the album. Substituted with best-match available images:

| Planned | Substituted | Reason |
|---------|-------------|--------|
| `cba02162` (Tasting Notes) | `8efaae6e` | Wine Tasting Setup at Rosewood — professional, elegant |
| `c141ab7a` (Winemaker) | `3219985` | Cultural Wine Presentation in traditional dress |
| `c4699ef3` (Where to Taste) | `4f24cef7` | Wine Dinner Event — restaurant atmosphere |
| `d76af86c` (Brand Story) | `IMG_9471` | Village Community — warm, human connection |

### Language Strategy
- Bilingual interleaved (EN primary, CN in smaller muted text beneath)
- No language toggle — editorial flow keeps both languages as a single reading experience
- CN text styled at ~88% of EN font-size, `rgba(93,78,55,0.55)` color

### Files Modified
- `src/styles/global.css` — added Playfair Display Google Font import
- `src/pages/about.astro` — HTML (new nav + brand story + wine details), CSS (new styles + updated logo + responsive), JS (sticky nav IntersectionObserver)

*Plan created: January 2026*
*Implementation completed: February 2026*

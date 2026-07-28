
---
name: luxury-hospitality-website
description: Build an industry-level premium catering and hospitality website using modern frontend architecture, cinematic UI systems, smooth motion design, and conversion-focused UX. Use when creating high-end brand websites that must feel handcrafted by a senior frontend engineer and luxury UI/UX designer.
---

## Development Approach

### Project Understanding First
Before writing any code:
1. Understand the brand identity, target audience, and emotional goals
2. Analyze reference websites from Awwwards, Godly Website Gallery, and luxury hospitality leaders
3. Plan component architecture and motion strategy on paper
4. Select libraries purposefully — each must justify its bundle cost
5. Prototype critical interactions (cursor, hero, scroll) before full build

### Library Selection Philosophy
- **Prefer native over library** when performance difference is marginal
- **One primary animation library** (Framer Motion for UI, GSAP for scroll)
- **Tree-shake all imports** — never import entire libraries
- **Justify every dependency** — if it doesn't elevate luxury perception, remove it

---

## Tech Stack

### Core Framework
- **Next.js App Router** — Server components, streaming, ISR
- **TypeScript** — Strict mode, comprehensive types
- **Tailwind CSS** — Utility-first with design tokens
- **shadcn/ui** — Accessible primitives, customizable

### Animation Stack
| Library | Purpose | When to Use |
|---------|---------|-------------|
| **Framer Motion** | Primary UI animation | Page transitions, hover states, layout animations, reveal effects |
| **GSAP + ScrollTrigger** | Advanced scroll animation | Parallax, pinning, scrub animations, complex timelines |
| **Lenis** | Smooth scrolling | Foundation scroll layer, butter-smooth experience |

### Backend
- **MongoDB** with Mongoose — Inquiries, menu items, events

---

## UI Inspiration & Reference Sources

### Component & Layout Inspiration
| Source | Best For | Use When |
|--------|----------|----------|
| **21st.dev** | Modern AI-era components, animated UI blocks | Building hero sections, feature cards, bento layouts |
| **React Bits** | Advanced motion UI, interactive components | Cursor effects, magnetic interactions, hover states |
| **Magic UI** | AI startup style, glow effects | Dark theme sections, gradient animations |
| **Aceternity UI** | Beautiful animated components | Portfolio showcases, gallery sections |

### Design Inspiration
| Source | Best For | Use When |
|--------|----------|----------|
| **Awwwards** | Cinematic websites, premium interactions | Hero section concepts, scroll storytelling |
| **Godly Website Gallery** | Clean modern websites, startup aesthetics | Layout planning, minimal UI patterns |
| **Mobbin** | SaaS UI, onboarding flows | Form design, booking flow, dashboard (if admin) |

### Reference Benchmarks
Study and extract patterns from:
- Apple product pages — Scaling, clipping, product storytelling
- Stripe — Gradient use, card layouts, developer-focused design
- Linear — Dark theme, keyboard navigation, minimal chrome
- Vercel — Motion design, geometric layouts, speed aesthetics
- Michelin-star restaurant sites — Food photography, ambiance, reservation UX

---

## Design System Libraries

### Icons
| Library | Style | Use Case |
|---------|-------|----------|
| **Lucide Icons** | Clean, modern, minimal | Primary icon system (install: `npm install lucide-react`) |
| **Phosphor Icons** | Elegant, flexible | Alternative icon styles, animated interfaces |
| **Tabler Icons** | Premium outline | Dashboard, admin panels |

### Animated Icons
| Library | Format | Use Case |
|---------|--------|----------|
| **Lordicon** | Lottie/SVG | Hover animations, loading states, premium micro-interactions |
| **LottieFiles** | Lottie JSON | Hero animations, loading screens, animated illustrations (install: `npm install lottie-react`) |

### Illustrations
| Source | Style | Use Case |
|--------|-------|----------|
| **unDraw** | Clean SVG, customizable | Service explanations, process steps |
| **Storyset** | Animated illustrations | Onboarding sections, empty states |
| **Blush Design** | Modern customizable | Premium section accents |

### Imagery
| Source | Type | Use Case |
|--------|------|----------|
| **Unsplash** | Professional photography | Food photography, catering, luxury events |
| **Pexels** | Modern images + video | Hero backgrounds, ambiance shots |
| **Freepik** | Vectors, PSD, AI assets | Supporting graphics, texture overlays |

---

## Typography

### Font Sources
- **Google Fonts** — Inter, Geist, Poppins, Manrope
- **Fontshare** — Premium free fonts for luxury feel

### Typography System
```css
/* Recommended Luxury Pairing */
--font-display: 'Geist' or 'Fontshare premium'  /* Headlines */
--font-body: 'Inter' or 'Manrope'               /* Body text */
```

### Typography Scaling (Responsive)
```css
--text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
--text-h3: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);
--text-h2: clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem);
--text-h1: clamp(2rem, 1.5rem + 2.5vw, 4rem);
--text-hero: clamp(2.5rem, 1.8rem + 3.5vw, 6rem);
```

---

## Color & Gradient Tools

### Palette Generation
- **Coolors** — Generate luxury color palettes
- **Gradient Hunt** — Modern gradient inspiration

### Color System (Luxury Dark Theme)
```css
--bg-primary: #0a0a0a;       /* Deep black */
--bg-secondary: #111111;     /* Elevated surfaces */
--bg-glass: rgba(255,255,255,0.03);  /* Glass panels */
--text-primary: #fafafa;     /* High contrast text */
--text-secondary: #a1a1a1;   /* Muted text */
--accent-gold: #d4a853;      /* Luxury accent */
--accent-warm: #c8946e;      /* Warm highlight */
--glow-subtle: rgba(212,168,83,0.08); /* Gold glow */
```

---

## 3D & Advanced Visuals (Optional, Use Sparingly)

| Library | Purpose | When to Use |
|---------|---------|-------------|
| **React Three Fiber** | React 3D renderer | Hero product showcase, immersive backgrounds |
| **Three.js** | 3D engine | Complex 3D scenes, custom shaders |

**Rule:** 3D must enhance storytelling, not distract. Use only if it elevates luxury perception.

---

## Build Vision

### Platform Identity
The platform should feel like:
- A luxury hospitality brand
- A cinematic digital experience
- A premium modern startup website
- A handcrafted designer portfolio
- A high-conversion event platform

### Must Avoid
- Generic AI-generated layouts
- Overcrowded sections
- Template-like appearance
- Excessive animation overload
- Outdated UI patterns

---

## UI/UX Design Philosophy

### Design Language
- Sleek
- Premium
- Luxury
- Minimal
- Cinematic
- Elegant
- High-end hospitality aesthetic

### Visual Direction

**Glassmorphism & Liquid Glass UI:**
- Frosted glass panels with subtle backdrop blur
- Translucent cards with soft borders
- Layered transparency creating depth
- Liquid-like smooth transitions between states

**Lighting & Depth:**
- Soft gradient glows at section boundaries
- Floating panels with premium box shadows
- Smooth depth layers (z-index hierarchy: background < content < overlay < cursor)
- Dark luxury theme as primary palette
- High spacing consistency (8px base grid, 24px-120px section gaps)

**Core Visual Principles:**
- Every element must feel intentional and placed
- Negative space is a design feature, not emptiness
- Depth is created through shadow, not heavy borders
- Light is used sparingly as a highlight mechanism

---

### Experience Goals

**Emotional Targets:**
- Emotional storytelling through visual sequencing
- Premium hospitality feel in every interaction
- Trust-building visuals (clean, transparent, professional)
- Non-generic UI experience — nothing cookie-cutter

**Interaction Quality:**
- Smooth interactions at 60fps minimum
- Fast responsive transitions (150ms-400ms range)
- No jarring jumps or layout shifts
- Hover states must feel magnetic and responsive

---

## Strict Design Rules

### Must Do
1. Use proper visual hierarchy
2. Maintain large consistent spacing
3. Create smooth section transitions
4. Use immersive typography
5. Build storytelling layouts
6. Use modern glassmorphism carefully
7. Add subtle glowing gradients
8. Implement premium hover interactions
9. Create elegant motion systems
10. Use responsive bento layouts
11. Focus heavily on mobile experience
12. Use premium shadows and depth
13. Apply liquid glass UI on cards and panels
14. Maintain dark luxury theme consistency
15. Float key UI elements for dimensional depth

### Never Do
1. Avoid generic AI website layouts
2. Avoid excessive gradients
3. Avoid crowded sections
4. Avoid outdated bootstrap styles
5. Avoid random animations
6. Avoid template-like hero sections
7. Avoid poor typography scaling
8. Avoid overusing glass blur (max 2-3 layered glass elements per viewport)
9. Avoid cheap neon aesthetics
10. Avoid slow rendering
11. Avoid flat design without depth cues
12. Avoid breaking the dark luxury theme

---

## Hero Section Architecture

### Reference Inspiration
Study hero sections from:
- **Apple** — Product scaling into position, cinematic pacing
- **Stripe** — Gradient geometry, confident minimalism
- **Linear** — Dark theme depth, purposeful motion
- **Awwwards winners** — Scroll-triggered storytelling, parallax mastery
- **21st.dev / React Bits** — Modern component patterns, animated UI blocks
- **Magic UI** — Glow effects, gradient spotlights

### Must Include
- Immediately feel premium (within 0.5s of load)
- Cinematic typography (large scale, tight tracking, elegant weight)
- Immersive motion (parallax + scaling combination from Scroll Type 3)
- Communicate value proposition quickly (1 headline + 1 subheadline max)
- Strong CTA hierarchy (1 primary liquid glass, 1 secondary ghost)
- Mouse-follow glow effect for interactive depth
- Magnetic hover on all CTAs

### Hero Motion Blueprint
```
Layer 1 (Background): Subtle parallax (0.3x), ambient glow
Layer 2 (Image/Visual): Scale 1.1x → 1x on scroll, clip-path reveal
Layer 3 (Typography): Text stagger (word-by-word, 60ms delay)
Layer 4 (CTA): Fade up + magnetic cursor interaction
Layer 5 (Cursor): Spotlight glow + smooth lerp follow
```

### Avoid
- Generic centered layouts
- Excessive text walls
- Cluttered buttons
- Static, non-interactive backgrounds
- Slow-loading hero media blocking LCP

---

## Premium Cursor System

### Cursor Philosophy
The cursor is an extension of the brand's luxury identity. Every interaction through the cursor must feel intentional, smooth, and premium.

### Reference Inspiration
- **React Bits** — Advanced cursor interactions, magnetic effects
- **Awwwards featured sites** — Custom cursor implementations
- **Linear** — Subtle, performant, never distracting

### Cursor States
Implement distinct cursor modes for different contexts:

| State | Behavior | Use Case |
|-------|----------|----------|
| `default` | Soft spotlight glow, smooth lerp follow | General browsing |
| `hover` | Scale up 1.5x, glow intensifies | Interactive elements |
| `drag` | Slight scale down, grab icon | Draggable galleries |
| `clickable` | Magnetic pull toward element center | Buttons, CTAs |
| `loading` | Subtle pulse animation | Data fetching |
| `video-play` | Play icon reveal, ring animation | Video thumbnails |

### Core Cursor Setup (Recommended)

**Combination:**
1. **Soft Spotlight Glow** — Radial gradient following cursor (300px-500px, opacity 0.04-0.08)
2. **Magnetic Buttons** — CTAs pull cursor within 30px radius with spring physics
3. **Elegant Hover Scaling** — Scale custom cursor 1.3x-1.5x on interactive elements
4. **Smooth Delayed Movement** — Lerp interpolation (0.08-0.12 factor) for buttery trailing
5. **Subtle Gold/White Glow** — Warm accent glow matching brand palette

**Smooth Interpolation (Lerp):**
```
cursor.x += (mouse.x - cursor.x) * 0.1
cursor.y += (mouse.y - cursor.y) * 0.1
```
This creates cinematic, buttery movement with natural delay.

### Implementation Library Selection
| Library | Purpose |
|---------|---------|
| `framer-motion` | Smooth cursor movement, spring physics (`useMotionValue`, `useSpring`) |
| `gsap` | Magnetic interaction, advanced easing for cursor trail |

### Cursor Rules
- Hide native cursor (`cursor: none`) on desktop only
- Keep native cursor on mobile/tablet (touch devices)
- Use GPU-accelerated positioning (`transform: translate3d()`)
- Maximum cursor element size: 40px-60px diameter
- Glow radius must not interfere with content readability
- Respect `prefers-reduced-motion` (fallback to native cursor)

### What to Avoid
- Too many particles
- Gaming-style cursor
- Laggy effects
- Extreme neon glow
- Overly large cursor elements
- Cursor effects that block click targets

---

## Motion System

### Motion Philosophy
Animations must feel:
- Smooth
- Premium
- Intentional
- Elegant
- Cinematic

Every animation must answer: *"Does this enhance the luxury perception?"* If not, remove it.

### Motion Effects Library

**Scroll Reveal Animations:**
- Elements fade + translate up (40px-60px) on scroll entry
- Stagger children with 80ms-150ms delays
- Once revealed, stay visible (no re-trigger)
- Use Framer Motion `useInView` or GSAP ScrollTrigger

**Text Stagger Effects:**
- Headlines animate word-by-word or character-by-character
- Stagger timing: 40ms-80ms per element
- Combine with subtle Y translation (10px-20px)
- Apply only to hero and key section headings

**Magnetic Buttons:**
- Buttons follow cursor within a 20px-30px radius
- Smooth spring physics (no abrupt snapping)
- Scale up 1.02-1.05x when cursor proximity detected
- Apply to primary CTAs and navigation items
- **Reference:** React Bits magnetic button patterns

**Smooth Page Transitions:**
- Crossfade or slide transitions between routes
- Duration: 400ms-600ms
- Use Framer Motion `AnimatePresence`
- Maintain scroll position where logical

**Mouse-Follow Glow Effects:**
- Soft radial gradient spotlight follows cursor
- 300px-500px radius with low opacity (0.03-0.08)
- Apply to hero section and feature areas
- GPU-accelerated via `transform: translate3d()`
- **Reference:** Magic UI glow components

**Gradient Spotlight Interactions:**
- Cards and panels reveal subtle gradient shift on hover
- Gradient follows mouse position within element bounds
- Smooth transition (200ms-300ms easing)
- Creates "alive" premium surface feel

**Floating Card Motion:**
- Cards hover 4px-8px above surface with shadow elevation
- Subtle Y-axis float animation (6px-10px range, 3s-4s duration)
- Parallax float on mouse movement within card bounds
- Combine with glassmorphism for ethereal effect

**Section Fade Transitions:**
- Sections fade into view as a cohesive unit
- Background elements fade slightly before foreground
- Apply to major layout sections (not every div)
- Opacity range: 0 → 1 over 400px-600px scroll distance

**Premium Hover States:**
- Scale: 1.02x-1.05x on cards and interactive elements
- Shadow elevation increase on hover
- Border glow subtle pulse
- Duration: 200ms-300ms with ease-out
- Always provide visual feedback within 100ms
- **Reference:** 21st.dev interactive components

### Motion Rules
- Never animate `width`, `height`, `top`, `left` (use `transform`)
- Prefer `opacity` and `transform` for all animations
- Respect `prefers-reduced-motion` media query
- Maximum 3 simultaneous animations per viewport
- Remove `will-change` after animation completes

---

## Professional Scroll Effects

All scroll effects must tie layout animations to native scroll mechanics, ensuring fluid responsiveness and high performance across all devices.

### Type 1 — Parallax and Sticky Effects

**Concept:** Foreground and background elements move at different speeds, creating depth. Hero sections or background images remain pinned (sticky) while text or foreground imagery smoothly scales and slides across the screen.

**Implementation:**
- CSS `position: sticky` with `transform` for lightweight parallax
- GSAP ScrollTrigger with `pin` and `scrub` properties for complex sequences
- Lenis smooth scroll as the foundation for butter-smooth movement
- Multi-layer parallax: 3-4 depth layers moving at staggered speeds (0.2x, 0.5x, 0.8x, 1x)

**Use Cases:**
- Hero section depth layering
- Gallery showcase with sticky frames
- Service cards that stack and reveal
- Testimonial sections with pinned quotes

**Rules:**
- Never exceed 4 parallax layers (performance)
- Maintain `will-change: transform` on animated elements
- Disable parallax on mobile if it impacts scroll performance
- Keep parallax ratio subtle (0.2x-0.8x, never inverted)

### Type 2 — Scroll-Triggered Reveals

**Concept:** Elements stay hidden, blurred, or masked until scroll progress reaches a specific trigger point. The animation then plays synchronously with the scrollbar before releasing control back to the browser.

**Implementation:**
- GSAP ScrollTrigger with `toggleActions` or `scrub` based on need
- CSS `clip-path` reveals for image unveiling
- Opacity + Y-translation staggered reveals for text/content blocks
- `backdrop-filter: blur()` transitioning to `blur(0px)` on reveal

**Use Cases:**
- Section entrance animations
- Image reveal sequences in portfolio/gallery
- Text block staggered reveals
- Before/after slider reveals
- Menu item unveiling

**Rules:**
- Always use `trigger` with `start` and `end` markers
- Reveal distance: 40-80px (subtle, not dramatic)
- Duration tied to scroll distance, not time
- Stagger children by 80-150ms
- Once revealed, elements must not re-hide (unless intentional loop)
- Group reveals in batches of 3-5 elements maximum

### Type 3 — Dynamic Scaling and Clipping

**Concept:** Objects scale down, up, or morph via CSS `clip-path` or `transform: scale()` as the user scrolls through a defined segment. High-end effect inspired by Apple product pages.

**Implementation:**
- Calculate exact progress percentage of the current scroll segment using GSAP ScrollTrigger `onUpdate`
- Apply `transform: scale()` from 1.5x → 1x or 1x → 0.85x based on direction
- CSS `clip-path: inset()` or `circle()` transitioning with scroll progress
- Container masking for image/frame containment during scale

**Use Cases:**
- Hero image scaling into position
- Logo/brand mark reveal
- Featured dish/image zoom-out on scroll
- Venue photo transitioning from full-bleed to contained frame
- Section transition with content "settling" into place

**Rules:**
- Always use `transform-origin: center center` for symmetric scaling
- Scale range: 0.7x to 1.3x maximum (avoid distortion)
- Clip-path transitions must use percentage values (responsive)
- Bind to a defined scroll segment (200vh-400vh), not infinite scroll
- Combine with opacity fade for smoother perception
- Apply `will-change: transform, clip-path` during animation only
- Disable on devices with `prefers-reduced-motion`

---

## Accessibility Standards

### Core Requirements
- **Keyboard Navigation:** All interactive elements must be focusable and operable via keyboard (Tab, Enter, Escape, Arrow keys)
- **ARIA Labels:** All non-text interactive elements must have descriptive `aria-label` attributes
- **Proper Contrast Ratio:** Minimum 4.5:1 for normal text, 3:1 for large text (WCAG AA)
- **Screen Reader Optimization:** Semantic HTML, `aria-live` regions for dynamic content, `alt` text on all images
- **Responsive Typography:** Fluid type scaling using `clamp()` or viewport units with sensible bounds

### Implementation Checklist
- [ ] Focus visible indicator on all interactive elements (custom, visible, elegant)
- [ ] Skip-to-content link as first focusable element
- [ ] `aria-current="page"` on active navigation items
- [ ] `role` attributes on custom interactive components
- [ ] Form inputs with associated `<label>` elements
- [ ] Error messages linked via `aria-describedby`
- [ ] Reduced motion fallback for all animations
- [ ] Minimum touch target size: 44px × 44px (mobile)
- [ ] Heading hierarchy never skips levels
- [ ] Color is never the sole indicator of meaning

---

## SEO + GEO + AEO Strategy

### SEO (Search Engine Optimization)

**Technical SEO:**
- Dynamic metadata generation per route
- Structured schema markup (Organization, LocalBusiness, WebSite, FAQ, BreadcrumbList)
- Open Graph optimization for social sharing
- Twitter Cards with large image summaries
- Sitemap generation (static + dynamic routes)
- robots.txt optimization
- Canonical URLs on all pages
- Semantic HTML5 document structure

**On-Page SEO:**
- Proper heading hierarchy (h1 → h2 → h3, never skip levels)
- Alt text on all images (descriptive, contextual)
- Internal linking with descriptive anchor text
- Mobile-first responsive design
- Fast load times (Core Web Vitals)

### GEO (Generative Engine Optimization)

**AI-Readable Content Structure:**
- Clear, descriptive headings that summarize section content
- Structured content hierarchy with predictable patterns
- FAQ sections targeting long-tail generative queries
- Rich business metadata (services, location, specialties, pricing range)
- Contextual section descriptions that define purpose
- AI-friendly semantic formatting (lists, tables, definitions where appropriate)

**Implementation:**
- Wrap key business info in structured `<section>` elements with `aria-label`
- Include "What we offer", "Who we serve", "Why choose us" patterns
- Use definition lists for service-feature pairings
- Maintain consistent naming conventions across pages

### AEO (Answer Engine Optimization)

**Conversational Content Design:**
- Headings phrased as natural questions ("What catering services do you offer?")
- FAQ schema markup on relevant pages
- Direct-answer content structure (question → concise answer → elaboration)
- Search-intent-focused copywriting targeting informational and commercial queries

**Answer Formatting:**
- Lead with 1-2 sentence direct answers before expanding
- Use bullet points for scannable answer components
- Include location + service in answer text for local AEO
- Format pricing and process information clearly for featured snippets

---

## Performance Optimization

### Targets
- Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)
- Fast First Paint (< 1.5s)
- First Input Delay < 100ms
- Cumulative Layout Shift < 0.1
- Minimal JS blocking time

### Implementation Strategy

**Rendering:**
- Server-side rendering for dynamic content
- Static site generation for marketing pages
- Incremental Static Regeneration where hybrid needed

**Asset Loading:**
- Lazy image loading (native `loading="lazy"` + blur placeholders)
- Code splitting at route and component level
- Dynamic imports for below-fold and interaction-dependent components
- Font subsetting and `font-display: swap`

**Animation Performance:**
- GPU-accelerated animations (transform + opacity only)
- Optimized motion rendering with `requestAnimationFrame`
- Reduced layout shifts (reserve space for dynamic content)
- `will-change` applied before animation, removed after
- Scroll event throttling (passive listeners)

**Asset Optimization:**
- Compressed images (WebP/AVIF with fallbacks)
- SVG optimization for icons and illustrations
- Minified CSS/JS bundles
- CDN delivery for all static assets
- Preconnect to critical origins

---

## Development Standards

### Architecture
- **Scalable:** Feature-based folder structure, separation of concerns
- **Reusable:** Component library with props-driven customization
- **Clean:** Consistent naming conventions, no dead code
- **Modular:** Design system tokens for colors, spacing, typography, shadows
- **Optimized:** Tree-shakeable imports, minimal bundle size
- **Maintainable:** TypeScript strict mode, documented component APIs

### Folder Structure (Recommended)
```
src/
├── app/                    # Next.js App Router routes
│   ├── layout.tsx
│   ├── page.tsx
│   └── (routes)/
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, Footer, Navigation
│   ├── sections/           # Hero, Services, Gallery, Testimonials
│   ├── motion/             # Animation wrappers, scroll reveals
│   ├── cursor/             # Custom cursor system
│   └── shared/             # Cards, Buttons, Badges
├── lib/
│   ├── utils.ts
│   ├── animations.ts       # Shared animation variants
│   └── constants.ts
├── hooks/                  # Custom React hooks
├── styles/
│   └── globals.css
├── types/                  # TypeScript type definitions
└── content/                # MDX or content files (if applicable)
```

---

## UX Philosophy

### Emotional Communication
The website must communicate:
- Trust
- Celebration
- Luxury
- Professionalism
- Hospitality
- Premium service quality

### Experience Quality
The experience should feel:
- Immersive
- Memorable
- Premium
- Modern
- Emotionally engaging

### Psychological Design Principles
- **First impression (0-3s):** Visual prestige, clear value proposition
- **Engagement (3s-30s):** Smooth exploration, storytelling pull
- **Trust building (30s+):** Testimonials, process transparency, brand consistency
- **Conversion moment:** Effortless inquiry, welcoming CTA language

---

## Component Standards

Every component must include:
- Responsive layout (mobile, tablet, desktop, ultrawide)
- Elegant spacing (adhere to 8px grid)
- Smooth hover states (200ms-300ms transitions)
- Animation consistency (match motion system rules)
- Accessibility support (ARIA labels, keyboard navigation, focus states)
- Scalable structure (props-driven, composable)

---

## Content Direction

### Tone
- Confident
- Elegant
- Premium
- Welcoming
- Hospitality-focused

### Voice Characteristics
- Warm but polished
- Expert but approachable
- Aspirational but genuine
- Detailed but scannable

### Avoid
- Robotic marketing copy
- Generic AI wording
- Keyword stuffing
- Exaggerated claims without substance
- Overly casual or overly formal extremes

---

## Production Goals

- Industry-level UI/UX
- Premium hospitality branding
- AI search visibility (SEO + GEO + AEO)
- High conversion rate
- Ultra-fast loading (Lighthouse 90+)
- Modern digital identity

---

## Final Goal

The website should look like it was created by:
- A senior product designer
- An award-winning frontend engineer
- A luxury branding agency

### Deliverable Qualities
- Production ready
- Visually elite
- Technically optimized
- Emotionally engaging
- Conversion focused

### Benchmark Comparison
The final output must be indistinguishable from:
- Apple product launch pages
- Stripe marketing surfaces
- Linear app landing
- Vercel brand pages
- Michelin-star restaurant websites
- Luxury wedding and event brands

### Final Experience Goal
Create a website experience that emotionally communicates:
- Trust
- Luxury
- Professionalism
- Hospitality
- Celebration
- Premium service quality

while maintaining:
- Elite performance
- Modern UI systems
- AI-friendly architecture
- World-class frontend execution

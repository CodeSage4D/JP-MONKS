# JP Monks Elite Corporate Platform

A premium, enterprise-grade corporate marketing website hand-crafted for **JP Monks**, a modern technology company.

This platform is engineered using **Vanilla HTML5, Custom CSS3 Modules, and Standard ES Modules (JavaScript)**, orchestrated and compiled via the lightweight, high-performance developer tool **Vite**.

---

## ⚡ Design Philosophy & Performance
* **No Framework Bloat**: Zero heavy framework libraries like React or Next.js core are loaded at runtime. This allows the initial package size to remain practically zero, loading instantaneously for an elite class user experience and perfect **100/100 Google PageSpeed/SEO optimization**.
* **Enterprise Color Palette**: Implements Deep Navy (`#0F1E4D`) headings, Primary Blue (`#1E63FF`) interactive states, and soft Accent Orange (`#FF7A1A`) badges on a spacious off-white grid background.
* **Pixel Perfect Vector Branding**: Features the official vector **JP Monks** logos inlined directly inside the DOM. They scale infinitely without distortion or load lag.
* **Micro-interactions**: Subtle hover transformations, smooth scrolling, active section scroll-spy highlighting, and IntersectionObserver-driven scroll reveal animations.

---

## 📁 Architecture Directory Structure

```
f:\JP-MONKS/
├── index.html                   # Main page structure, semantic nodes & inline SVG logos
├── package.json                 # Developer scripts & Vite bundler dependencies
├── vite.config.js               # Performance bundler options & assets path configs
├── README.md                    # Setup and hand-off instructions
├── public/                      # Static client assets (favicon, images, logos)
│   └── assets/logo/             # Brand logo backups (.svg, .png)
└── src/                         # Source development code
    ├── components/              # Reusable Modular UI Components
    │   ├── navbar.js            # Sticky blur states, hamburger menus, and scroll spy active links
    │   ├── roadmap.js           # Interactive milestone year selectors & tabs
    │   └── contact.js           # Real-time field validation, disabled loaders & toast popups
    ├── styles/                  # Clean Modular CSS System
    │   ├── variables.css        # Custom brand color tokens, typography scales & ease parameters
    │   ├── main.css             # Standard CSS resets, typography rules & scrollbar settings
    │   ├── layout.css           # Navigation heights, mobile menus, and footer styling
    │   ├── components.css       # Standard card scales, hover states, inputs & toast models
    │   └── sections.css         # Individual styling (Hero grid, phone mockup, timelines)
    └── js/                      # Entry script bootstrap
        ├── main.js              # DomReady trigger booting navbar, timeline, form & observers
        └── animations.js        # High-performance observer-based scroll reveal fades
```

---

## 🛠️ How to Setup & Run Locally

### 1. Install Node.js
Ensure you have **Node.js** (v18 or higher) installed on your system.

### 2. Install Project Dependencies
Run the following command in your terminal within the `f:\JP-MONKS` directory to install Vite:
```bash
npm install
```

### 3. Run Developer Environment
Start the high-velocity preview server:
```bash
npm run dev
```
The console will boot a local development address (usually `http://localhost:3000`) and automatically open it in your browser. Any changes you make to the code will reflect instantly in real-time.

---

## 🚀 Building for Production

To compile the application into a highly optimized bundle, run:
```bash
npm run build
```

This compiles your files into the `/dist` directory:
- All HTML, CSS, and JS files are minified to the absolute smallest byte count.
- Standard hashing (`[name].[hash].js`) is automatically applied to all bundle assets to solve caching problems on clients' browsers when updates are pushed.
- Unnecessary comments are stripped, and media resources are bundled.

### Preview Production Build
You can test the optimized bundle locally before pushing it to hosting:
```bash
npm run preview
```

---

## 💎 Custom Engineering Patterns Explained

### 1. High-Performance Scroll-Spy Navigation
Located in `src/components/navbar.js`. Instead of tracking the heavy scroll event continuously (which lags browser frames), we use the modern browser native API `IntersectionObserver`. It monitors when section borders intersect the viewport at a defined height threshold, instantly adding or removing the `.active` border highlights on corresponding navbar anchors.

### 2. High-Performance Scroll-Reveals
Located in `src/js/animations.js`. We use `IntersectionObserver` on all cards and elements decorated with the `.reveal` class. The observer triggers a singular CSS fade-in translation when they enter the viewport and instantly **unobserves** them afterwards, keeping memory usage clean and frame-rates steady even on budget mobile phones.

### 3. Custom DOM Dynamic Toast Popups
Located in `src/components/contact.js`. Rather than loading large, complex alert frameworks, the validator compiles, positions, injects, and auto-dismisses toast indicators directly in standard DOM nodes. This keeps bundles clean and allows custom brand color alignments easily.

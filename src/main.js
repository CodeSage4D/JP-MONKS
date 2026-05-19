/**
 * JP Monks Main Entrypoint
 * Bootstraps all components, sections, and utility engines upon DOM maturity.
 */

// 1. UTILS IMPORTS
import { initAnimations } from './utils/animations.js';
import { initScrollSpy } from './utils/scroll.js';

// 2. COMPONENTS IMPORTS
import { initNavbar } from './components/Navbar.js';
import { initFooter } from './components/Footer.js';
import { initContactForm } from './components/ContactForm.js';
import { initRoadmap } from './components/Roadmap.js';

// 3. SECTIONS IMPORTS
import { initHero } from './sections/Hero.js';
import { initAbout } from './sections/About.js';
import { initProducts } from './sections/Products.js';
import { initServices } from './sections/Services.js';
import { initWhyUs } from './sections/WhyUs.js';
import { initRoadmapSection } from './sections/RoadmapSection.js';
import { initTestimonials } from './sections/Testimonials.js';
import { initContactSection } from './sections/ContactSection.js';

// 4. BOOTSTRAP ORCHESTRATION
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Utilities
  initAnimations();
  initScrollSpy('.nav-link', 'section[id], header[id]');

  // Initialize Core Layout Components
  initNavbar();
  initFooter();
  initContactForm();
  initRoadmap();

  // Initialize Page Sections
  initHero();
  initAbout();
  initProducts();
  initServices();
  initWhyUs();
  initRoadmapSection();
  initTestimonials();
  initContactSection();

  console.log('⚡ JP Monks Cinematic Platform successfully bootstrapped.');
});

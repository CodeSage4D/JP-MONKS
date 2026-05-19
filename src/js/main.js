/**
 * Main Application Bootstrapper
 * Orchestrates modular UI components and progressive page enhancements.
 */

import { initNavbar } from '../components/navbar.js';
import { initRoadmap } from '../components/roadmap.js';
import { initContactForm } from '../components/contact.js';
import { initFooter } from '../components/footer.js';
import { initAnimations } from './animations.js';

// Wait for complete Document Object Model to compile
document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ JP Monks Elite Platform Bootstrapped Successfully.');

  // Initialize modular features
  initNavbar();
  initRoadmap();
  initContactForm();
  initFooter();
  initAnimations();
});

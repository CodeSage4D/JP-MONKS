/**
 * Products Section Module
 * Orchestrates card highlights and interaction overlays inside the SaaS ecosystem preview blocks.
 */

export function initProducts() {
  const container = document.getElementById('products-showcase-container');
  if (!container) return;

  // Handles active widget sub-animations
  const cards = container.querySelectorAll('.group');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const activeWidget = card.querySelector('.animate-pulse');
      if (activeWidget) activeWidget.classList.add('bg-brand-blue/20');
    });
    
    card.addEventListener('mouseleave', () => {
      const activeWidget = card.querySelector('.animate-pulse');
      if (activeWidget) activeWidget.classList.remove('bg-brand-blue/20');
    });
  });
}

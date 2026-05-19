/**
 * Testimonials Section Module
 * Manages slide transitions or visual active states of client and founder quote cards.
 */

export function initTestimonials() {
  const quoteCards = document.querySelectorAll('.quote-card');
  if (quoteCards.length === 0) return;

  // Add micro-shadow changes to quote cells on hover
  quoteCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('border-brand-blue/20', 'shadow-premium-md');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('border-brand-blue/20', 'shadow-premium-md');
    });
  });
}

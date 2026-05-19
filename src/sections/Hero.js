/**
 * Hero Section Module
 * Handles interactions and dynamic hover effects inside the primary cinematic landing block.
 */

export function initHero() {
  const heroCard = document.querySelector('.hero-monolith-card');
  if (!heroCard) return;

  // Add micro-glow triggers on mousemove for a Stripe-like lighting effect
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    heroCard.style.setProperty('--mouse-x', `${x}px`);
    heroCard.style.setProperty('--mouse-y', `${y}px`);
  });
}

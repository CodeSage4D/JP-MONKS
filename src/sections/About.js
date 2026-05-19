/**
 * About Section Module
 * Manages presentation logic and interaction hooks for the corporate about layouts.
 */

export function initAbout() {
  const profileCards = document.querySelectorAll('.about-profile-card');
  if (profileCards.length === 0) return;

  profileCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('shadow-premium-lg', 'scale-[1.01]');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('shadow-premium-lg', 'scale-[1.01]');
    });
  });
}

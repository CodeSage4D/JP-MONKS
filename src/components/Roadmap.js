/**
 * Roadmap Component (Tailwind Optimized)
 * Coordinates transitions between product pipeline milestones without lagging browser frames.
 */

export function initRoadmap() {
  const buttons = document.querySelectorAll('.roadmap-btn');
  const cards = document.querySelectorAll('.roadmap-card');

  if (buttons.length === 0 || cards.length === 0) return;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      
      // 1. Highlight clicked tab button
      buttons.forEach(btn => {
        btn.classList.remove('bg-brand-navy', 'text-white', 'shadow-premium-btn');
        btn.classList.add('bg-white', 'text-brand-navy', 'border', 'border-brand-border');
      });
      button.classList.remove('bg-white', 'text-brand-navy', 'border', 'border-brand-border');
      button.classList.add('bg-brand-navy', 'text-white', 'shadow-premium-btn');

      // 2. Cross-fade timeline milestone cards
      cards.forEach(card => {
        if (card.classList.contains('active')) {
          card.classList.add('opacity-0', 'scale-[0.98]');
          card.classList.remove('opacity-100', 'scale-100');
          
          setTimeout(() => {
            card.classList.add('hidden');
            card.classList.remove('active');
            
            const targetCard = document.getElementById(targetId);
            if (targetCard) {
              targetCard.classList.remove('hidden');
              targetCard.classList.add('active');
              
              // Force DOM reflow to trigger scale transitions smoothly
              void targetCard.offsetWidth;
              
              targetCard.classList.remove('opacity-0', 'scale-[0.98]');
              targetCard.classList.add('opacity-100', 'scale-100');
            }
          }, 300); // Matches transition parameter
        }
      });
    });
  });
}

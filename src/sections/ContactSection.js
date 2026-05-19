/**
 * ContactSection Section Module
 * Oversees presentation visual events for the corporate contact block.
 */

export function initContactSection() {
  const contactBlock = document.querySelector('.contact-section-wrapper');
  if (!contactBlock) return;

  // Add micro-shadow adjustments or dynamic focus highlights on focusin
  contactBlock.addEventListener('focusin', () => {
    contactBlock.classList.add('border-brand-blue/10');
  });

  contactBlock.addEventListener('focusout', () => {
    contactBlock.classList.remove('border-brand-blue/10');
  });
}

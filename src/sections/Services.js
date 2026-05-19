/**
 * Services Section Module
 * Manages active highlights and visual feedback inside our specialized systems and capabilities catalog.
 */

export function initServices() {
  const serviceItems = document.querySelectorAll('.service-grid-item');
  if (serviceItems.length === 0) return;

  serviceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const iconWrap = item.querySelector('.service-icon-wrap');
      if (iconWrap) {
        iconWrap.classList.add('bg-brand-blue', 'text-white');
        iconWrap.classList.remove('bg-brand-blue/5', 'text-brand-blue');
      }
    });

    item.addEventListener('mouseleave', () => {
      const iconWrap = item.querySelector('.service-icon-wrap');
      if (iconWrap) {
        iconWrap.classList.add('bg-brand-blue/5', 'text-brand-blue');
        iconWrap.classList.remove('bg-brand-blue', 'text-white');
      }
    });
  });
}

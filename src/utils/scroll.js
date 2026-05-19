/**
 * Scroll Utility Engine
 * Registers passive IntersectionObservers to track viewport scroll position.
 */

/**
 * Attaches active highlights to navigation link anchors based on current viewport coordinates.
 */
export function initScrollSpy(navLinksSelector, sectionsSelector) {
  const navLinks = document.querySelectorAll(navLinksSelector);
  const sections = document.querySelectorAll(sectionsSelector);
  
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Focus coordinates on center of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('text-brand-blue', 'font-semibold');
              link.classList.remove('text-brand-gray');
            } else {
              link.classList.remove('text-brand-blue', 'font-semibold');
              if (!link.classList.contains('text-brand-gray')) {
                link.classList.add('text-brand-gray');
              }
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
    
    return observer;
  }
  return null;
}

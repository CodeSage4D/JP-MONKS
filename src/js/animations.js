/**
 * Scroll Reveal Animations Engine
 * Uses performance-optimized IntersectionObservers to progressively fade and translate content.
 */

export function initAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) return;

  // Check if standard browser supports IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null, // Viewport-relative
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before element bottom enters viewport
      threshold: 0.05 // Trigger when 5% of element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add standard active class to trigger CSS transition
          entry.target.classList.add('active');
          
          // Once animated, unobserve the element to optimize background processing
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    revealElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback: If old browser, immediately make elements visible
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
}

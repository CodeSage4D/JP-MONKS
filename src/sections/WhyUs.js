/**
 * WhyUs Section Module
 * Implements premium high-performance numeric stats count-up triggers using requestAnimationFrame.
 */

export function initWhyUs() {
  const statsElements = document.querySelectorAll('.stat-count-up');
  if (statsElements.length === 0) return;

  const countUp = (element, target, duration = 1500, suffix = '', decimals = 0) => {
    let startTimestamp = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentValue = startValue + easedProgress * (target - startValue);
      
      element.textContent = currentValue.toFixed(decimals) + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = target.toFixed(decimals) + suffix;
      }
    };

    window.requestAnimationFrame(step);
  };

  // IntersectionObserver to trigger statistics increments on scroll enter
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-target') || '0');
          const suffix = el.getAttribute('data-suffix') || '';
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          
          countUp(el, target, 1500, suffix, decimals);
          obs.unobserve(el); // Count only once
        }
      });
    }, { threshold: 0.1 });

    statsElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if no observer
    statsElements.forEach(el => {
      el.textContent = el.getAttribute('data-target') + el.getAttribute('data-suffix');
    });
  }
}

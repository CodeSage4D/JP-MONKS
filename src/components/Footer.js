/**
 * Footer Component
 * Dynamically handles footer states, such as automated copyright calendar years.
 */

export function initFooter() {
  const yearElement = document.getElementById('footer-current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

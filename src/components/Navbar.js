/**
 * Navbar Component (Tailwind Optimized)
 * Coordinates sticky transparency toggles, dropdown cards, mobile navigation overlays, and active link scroll spy tracking.
 */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  if (!navbar) return;

  // 1. STICKY BACKGROUND ON SCROLL
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'border-brand-border', 'shadow-premium');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.add('bg-transparent', 'border-transparent');
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-brand-border', 'shadow-premium');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  // 2. MOBILE HAMBURGER MENU DRAWER
  if (menuToggle && mobileMenu) {
    const lines = menuToggle.querySelectorAll('.hamburger-line');
    
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains('translate-x-0');
      
      if (isOpen) {
        // Close menu
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        document.body.classList.remove('overflow-hidden');
        
        // Restore hamburger lines
        lines[0].classList.remove('rotate-45', 'translate-y-[6px]');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('-rotate-45', '-translate-y-[6px]');
      } else {
        // Open menu
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        document.body.classList.add('overflow-hidden');
        
        // Transform hamburger lines
        lines[0].classList.add('rotate-45', 'translate-y-[6px]');
        lines[1].classList.add('opacity-0');
        lines[2].classList.add('-rotate-45', '-translate-y-[6px]');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('translate-x-full') && !mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        document.body.classList.remove('overflow-hidden');
        
        lines[0].classList.remove('rotate-45', 'translate-y-[6px]');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('-rotate-45', '-translate-y-[6px]');
      }
    });
  }

  // 3. ACCORDION DROP-DOWNS ON TOUCH/MOBILE
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
        const arrow = dropdownToggle.querySelector('.dropdown-arrow');
        if (arrow) arrow.classList.toggle('rotate-180');
      }
    });
  }

  // 4. CLOSE DRAWER ON ANCHOR CLICK
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024 && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
        menuToggle.click();
      }
    });
  });

  // 5. HIGH-PERFORMANCE INTERSECTION OBSERVER FOR SCROLL SPY
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Target center viewport
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
  }
}

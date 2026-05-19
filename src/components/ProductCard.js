/**
 * ProductCard Component
 * Renders a premium, interactive SaaS product preview card with animated status widgets.
 */
export function createProductCard(product) {
  const card = document.createElement('div');
  card.className = `group relative rounded-premium-xl bg-white border border-brand-navy/5 p-8 md:p-10 shadow-premium-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-md overflow-hidden flex flex-col justify-between`;
  
  card.innerHTML = `
    <!-- Top graphic layout background accent -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-110"></div>
    
    <div>
      <!-- Product header -->
      <div class="flex items-center justify-between mb-6">
        <span class="font-title text-[10px] font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/5 px-2.5 py-1 rounded-full">${product.badge}</span>
        <span class="text-xs text-brand-gray/80 font-medium">${product.phase}</span>
      </div>

      <!-- Title and description -->
      <h3 class="font-title text-xl font-bold text-brand-navy mb-4 tracking-tight">${product.title}</h3>
      <p class="text-brand-navy/70 text-xs leading-relaxed mb-6 max-w-[340px]">${product.description}</p>

      <!-- Key metric highlights -->
      <div class="grid grid-cols-2 gap-4 border-t border-brand-navy/5 pt-5 mb-8">
        <div>
          <span class="block text-[10px] text-brand-gray font-semibold uppercase leading-none mb-1">${product.metric1Label}</span>
          <span class="text-sm font-bold text-brand-navy">${product.metric1Value}</span>
        </div>
        <div>
          <span class="block text-[10px] text-brand-gray font-semibold uppercase leading-none mb-1">${product.metric2Label}</span>
          <span class="text-sm font-bold text-brand-navy">${product.metric2Value}</span>
        </div>
      </div>
    </div>

    <!-- Active live dynamic widget dashboard showcase -->
    <div class="relative bg-brand-navy-dark rounded-lg p-5 border border-white/5 shadow-inner overflow-hidden mb-6">
      <!-- Glow ambient background grid -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent opacity-60"></div>
      
      <!-- Interactive Widget contents injected here -->
      ${product.widgetHTML}
    </div>

    <!-- Direct CTA link -->
    <div class="flex justify-between items-center mt-auto border-t border-brand-navy/5 pt-5">
      <a href="${product.link}" class="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-blue-dark transition-colors duration-200 gap-1" aria-label="Explore ${product.title}">
        <span>${product.ctaText}</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  `;

  return card;
}

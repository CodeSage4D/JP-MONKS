/**
 * RoadmapSection Section Module
 * Oversees presentation visual events for the milestones timeline roadmap.
 */

export function initRoadmapSection() {
  const timelineNodes = document.querySelectorAll('.timeline-node');
  if (timelineNodes.length === 0) return;

  // Add passive hover scaling states to roadmap nodes
  timelineNodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      const dot = node.querySelector('.timeline-dot');
      if (dot) dot.classList.add('scale-125', 'bg-brand-blue');
    });

    node.addEventListener('mouseleave', () => {
      const dot = node.querySelector('.timeline-dot');
      if (dot) dot.classList.remove('scale-125', 'bg-brand-blue');
    });
  });
}

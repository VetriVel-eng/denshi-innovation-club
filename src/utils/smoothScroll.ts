/**
 * Instant, hardware-accelerated smooth scrolling utilities.
 * Uses native browser smooth scroll behavior with responsive header offset calculation.
 */

export function smoothScrollTo(targetY: number) {
  if (typeof window === 'undefined') return;
  window.scrollTo({
    top: Math.max(0, targetY),
    behavior: 'smooth',
  });
}

/**
 * Smoothly scrolls to an HTML element specified by id or href.
 * Immediately computes position and starts scroll without delay.
 */
export function smoothScrollToElement(targetIdOrHref: string, customOffset?: number) {
  if (typeof window === 'undefined') return;

  const cleanId = targetIdOrHref.replace(/^#/, '');
  if (!cleanId) return;

  // Handle special case for 'home' or 'top'
  if (cleanId === 'home' || cleanId === 'top') {
    smoothScrollTo(0);
    return;
  }

  const element = document.getElementById(cleanId);
  if (!element) return;

  // Responsive sticky navbar height allowance (80px on desktop, 64px on mobile)
  const navOffset =
    customOffset !== undefined ? customOffset : window.innerWidth >= 640 ? 80 : 64;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const targetPosition = Math.max(0, elementPosition - navOffset);

  smoothScrollTo(targetPosition);
}

/* Personal site script — runs after DOM parse via `defer`.
   No third-party deps, no fetches. Lives at assets/js/site.js so CSP
   can be `script-src 'self'` (no 'unsafe-inline'). */

(() => {
  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 },
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

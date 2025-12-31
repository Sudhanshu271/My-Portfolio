// script.js — mobile menu, contact form handling (Formspree-ready), footer year

document.addEventListener('DOMContentLoaded', function () {
  // Menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');

  menuBtn?.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('hidden');
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form handling
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const directEmail = document.getElementById('direct-email');

  // Replace default direct email text if you want:
  if (directEmail) directEmail.href = 'mailto:youremail@example.com';

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending...';
      const formData = new FormData(form);

      // If the form has an action attribute set, POST to that endpoint (Formspree style)
      const action = form.getAttribute('action') || '';

      if (action && action.includes('formspree.io')) {
        try {
          const res = await fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (res.ok) {
            status.textContent = 'Thank you — your message has been sent.';
            form.reset();
          } else {
            const data = await res.json();
            status.textContent = data.error || 'Submission failed. Please try again or email directly.';
          }
        } catch (err) {
          status.textContent = 'An error occurred. Please try again later.';
          console.error(err);
        }
        return;
      }

      // If no action, fallback to a simulated send (demo only)
      setTimeout(() => {
        status.textContent = 'Demo message delivered (no backend configured). Update form action with your Formspree endpoint to receive emails.';
        form.reset();
      }, 900);
    });
  }
});
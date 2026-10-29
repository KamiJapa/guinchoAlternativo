(() => {
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('mobileMenu');
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    button.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    menu.hidden = open;
    button.innerHTML = `<i data-lucide="${open ? 'menu' : 'x'}" class="size-5"></i>`;
    lucide.createIcons();
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.hidden = true; button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Abrir menu');
    button.innerHTML = '<i data-lucide="menu" class="size-5"></i>'; lucide.createIcons();
  }));
  const number = window.GUINCHO_CONFIG?.whatsapp;
  const cta = document.getElementById('whatsappCta');
  if (/^\d{10,15}$/.test(number || '')) {
    cta.href = `https://wa.me/${number}?text=${encodeURIComponent(window.GUINCHO_CONFIG.whatsappMessage)}`;
    cta.target = '_blank'; cta.rel = 'noopener noreferrer'; cta.removeAttribute('aria-disabled');
    cta.classList.remove('cursor-not-allowed', 'bg-white/10', 'text-white/60');
    cta.classList.add('bg-signal', 'text-ink', 'hover:bg-white');
    cta.title = 'Conversar pelo WhatsApp'; cta.querySelector('span').textContent = 'Conversar pelo WhatsApp';
  }
  lucide.createIcons();
})();

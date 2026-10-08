
(() => {
  const menu = document.querySelector('[data-menu]');
  const mobile = document.querySelector('[data-mobile-nav]');
  if (menu && mobile) {
    menu.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobile.classList.remove('open'); menu.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
    }));
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const lightbox=document.querySelector('[data-lightbox]');
  if(lightbox){
    const image=lightbox.querySelector('img');
    document.querySelectorAll('[data-cert]').forEach(card=>card.addEventListener('click',()=>{image.src=card.dataset.cert; lightbox.classList.add('open');}));
    const close=()=>lightbox.classList.remove('open');
    lightbox.querySelector('[data-close]').addEventListener('click',close);
    lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  const reveal=()=>{document.querySelectorAll('[data-reveal]').forEach(el=>{const r=el.getBoundingClientRect(); if(r.top<window.innerHeight-50) el.classList.add('visible')})};
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el))} else reveal();
})();

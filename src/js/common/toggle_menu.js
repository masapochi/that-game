const open = document.getElementById('js-open');
const close = document.getElementById('js-close');
const overlay = document.getElementById('js-overlay')
const menus = document.getElementById('js-menu-box');
const tl = gsap.timeline({
  defaults: {
    duration: .5,
    ease: 'power2.ease'
  }
})

tl.paused(true);
tl.to(overlay, { clipPath: 'circle(100%)' })
tl.to(menus, { opacity: 1, y: 0 }, '<')


open.addEventListener('click', () => {
  tl.play();
})
close.addEventListener('click', () => {
  tl.reverse();
})

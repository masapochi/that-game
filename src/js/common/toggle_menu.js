const open = document.getElementById('js-open');
const close = document.getElementById('js-close');
const overlay = document.getElementById('js-overlay')
const menus = document.getElementById('js-menu-box');
const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Back.easeOut.config(2)
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

const menuAnime = gsap.timeline()
menuAnime.to('#js-menu-list', {
  duration: 0.5,
  left: 0,
  ease: 'power2.ease'
});
menuAnime.pause();
open.addEventListener('click', () => {
  menuAnime.play();
})
close.addEventListener('click', () => {
  menuAnime.reverse();
})

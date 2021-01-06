const menuOpen = document.getElementById('js-menu-open');
const menuClose = document.getElementById('js-menu-close');
const menuAnime = gsap.timeline()
menuAnime.to('#js-menu-list', {
  duration: 0.5,
  left: 0,
  ease: 'power2.ease'
});
menuAnime.pause();
menuOpen.addEventListener('click', () => {
  menuAnime.play();
})
menuClose.addEventListener('click', () => {
  menuAnime.reverse();
})

  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script>
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
  </script>
  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function() {
      ga.q.push(arguments)
    };
    ga.q = [];
    ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('set', 'transport', 'beacon');
    ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>

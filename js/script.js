window.addEventListener('DOMContentLoaded', event => {

  // Fungsi meyusutkan navbar
  var navbarshrink = function () {
    const navbarcollapsible = document.body.querySelector ('#mainNav');
    if (!navbarcollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarcollapsible.classList.remove('navbar-shrink');
  } else {
    navbarCollapse.classList.add('navbar-shrink');
  }
};  

  //Mengecilkan navbar saat halaman digulir
  document.addEventListener('scroll', navbarshrink);

  //Aktifkan Bootstrap Scrollspy pada elemen navigasi utama
  const mainNav = document.body.querySelector('mainNav');
  if (mainNav) {
    new bootstrap.scrolly(document.body, {
      target: '#mainNav',
      rootMargin: '0px px -40%',
    });
  }

  // ciutkan navabr responsif saat toggler terlihat
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavitems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavitems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});

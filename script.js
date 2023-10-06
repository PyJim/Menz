window.addEventListener('scroll', function() {
    var navbars = document.querySelectorAll('.navbar');

    var imageBanner = document.querySelector('.image-banner');
    var imageBannerHeight = imageBanner.offsetHeight;

    navbars.forEach(function(navbar) {
        if (window.pageYOffset >= imageBannerHeight) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });
});

// (function($) {

//     "use strict";

//     var fullHeight = function() {

//         $('.js-fullheight').css('height', $(window).height());
//         $(window).resize(function() {
//             $('.js-fullheight').css('height', $(window).height());
//         });

//     };
//     fullHeight();

//     var carousel_1 = function() {
//         $('.section_1-carousel').owlCarousel({
//             loop: true,
//             autoplay: true,
//             margin: 30,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn',
//             nav: true,
//             dots: true,
//             autoplayHoverPause: false,
//             items: 1,
//             navText: ["<a class='px-3 d-none d-sm-block'><i class='arrow-icons bi bi-arrow-left-square-fill h2'></i></a>", "<a class='d-none d-sm-block'><i class='arrow-icons bi bi-arrow-right-square-fill h2'></i></a>"],
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 600: {
//                     items: 2
//                 },
//                 1000: {
//                     items: 3
//                 },
//                 1200: {
//                     items: 4
//                 },
//                 1800: {
//                     items: 5
//                 }
//             }
//         });

//     };
//     carousel_1();

//     var carousel_2 = function() {
//         $('.section_2-carousel').owlCarousel({
//             loop: true,
//             autoplay: true,
//             margin: 30,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn',
//             nav: true,
//             dots: true,
//             autoplayHoverPause: false,
//             items: 1,
//             navText: ["<a class='px-3 d-none d-sm-block'><i class='arrow-icons bi bi-arrow-left-square-fill h2'></i></a>", "<a class='d-none d-sm-block'><i class='arrow-icons bi bi-arrow-right-square-fill h2'></i></a>"],
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 600: {
//                     items: 2
//                 },
//                 1000: {
//                     items: 3
//                 },
//                 1200: {
//                     items: 4
//                 },
//                 1800: {
//                     items: 5
//                 }
//             }
//         });

//     };
//     carousel_2();

//     var carousel_3 = function() {
//         $('.section_3-carousel').owlCarousel({
//             loop: true,
//             autoplay: true,
//             margin: 30,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn',
//             nav: true,
//             dots: true,
//             autoplayHoverPause: false,
//             items: 1,
//             navText: ["<a class='px-3 d-none d-sm-block'><i class='arrow-icons bi bi-arrow-left-square-fill h2'></i></a>", "<a class='d-none d-sm-block'><i class='arrow-icons bi bi-arrow-right-square-fill h2'></i></a>"],
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 600: {
//                     items: 2
//                 },
//                 1000: {
//                     items: 3
//                 },
//                 1200: {
//                     items: 4
//                 },
//                 1800: {
//                     items: 5
//                 }
//             }
//         });

//     };
//     carousel_3();

// })(jQuery);

var swiper = new Swiper(".mySwiper ", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination ",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        764: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        },
        1440: {
            slidesPerView: 4.5,
            spaceBetween: 40,
        },
    },
});

var swiper = new Swiper(".mySwiper_c1", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var c1 = entry.target.querySelector('.col-c1');
        var c2 = entry.target.querySelector('.col-c2');
        var c3 = entry.target.querySelector('.col-c3');
        var c4 = entry.target.querySelector('.col-c4');
        var c5 = entry.target.querySelector('.col-c5');
        var c6 = entry.target.querySelector('.col-c6');
        var c7 = entry.target.querySelector('.col-c7');
        var c8 = entry.target.querySelector('.col-c8');
        var c9 = entry.target.querySelector('.col-c9');

        if (entry.isIntersecting) {
            c1.classList.add('slide-in-rtl');
            c2.classList.add('slide-in-btt');
            c3.classList.add('pop-in');
            c4.classList.add('slide-in-ttb');
            c5.classList.add('slide-in-ltr');
            c6.classList.add('slide-in-ltr');
            c7.classList.add('slide-in-rtl');
            c8.classList.add('slide-in-btt');
            c9.classList.add('slide-in-ttb');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        c1.classList.remove('slide-in-rtl');
        c2.classList.remove('slide-in-btt');
        c3.classList.remove('pop-in');
        c4.classList.remove('slide-in-ttb');
        c5.classList.remove('slide-in-ltr');
        c6.classList.remove('slide-in-ltr');
        c7.classList.remove('slide-in-rtl');
        c8.classList.remove('slide-in-btt');
        c9.classList.remove('slide-in-ttb');
    });
});

observer.observe(document.querySelector('.section-4'));
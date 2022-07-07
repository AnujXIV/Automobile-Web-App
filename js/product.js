// (function($) {

//     "use strict";

//     var carousel = function() {
//         $('.car-carousel').owlCarousel({
//             loop: true,
//             autoplay: false,
//             margin: 10,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn',
//             dots: false,
//             items: 1,
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//                 1000: {
//                     items: 1
//                 }
//             }
//         });

//     };
//     carousel();

//     var carousel_3 = function() {
//         $('.similar_car-carousel').owlCarousel({
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

var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


$('.moreless-btn').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-btn').text() == "Read more...") {
        $(this).text("Read less...")
    } else {
        $(this).text("Read more...")
    }
});


const favourites = document.querySelector('.favs_text').addEventListener('click', RedHeart);

function RedHeart() {
    let heart = document.querySelector('.favs').firstElementChild;

    if (heart.classList.contains('bi-heart')) {
        // Heart to Heart-Fill
        heart.setAttribute('style', 'color:red;');
        heart.className = 'bi bi-heart-fill';
    } else {
        // Heart-Fill to Heart
        heart.removeAttribute('style');
        heart.className = 'bi bi-heart';
    }

}

//Swiper similar cars
var swiper = new Swiper(".mySwiper_d1 ", {
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
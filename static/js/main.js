// video popup

Fancybox.bind('[data-fancybox]', {
    // Custom options
});

// direction filter

var containerEl = document.querySelector('.directions__list');

var mixer = mixitup(containerEl);

$('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
})

// team slider

$('.team__slider').slick({
    arrows: false,
    ifinite: true,
    draggable: false,
    slidesToShow: 4,
    responsive:
        [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 551,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                }
            },
        ]
})

$('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})

$('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
})

// testimonials slider

$('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    appendDots: $('.testimonials__dots')
})

$('.testimonials__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
})

$('.testimonials__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
})

// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// burger button

setInterval(() => {
    if ($(window).scrollTop() > 0 && !$('.header__top').hasClass('header__top--open')) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
    if ($('body').width() > 1100) {
        $('.overlay').removeClass('overlay-show')
        $('.burger').removeClass('burger--open')
        $('.header__top').removeClass('header__top--open')
    }
}, 0);

$('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.burger').toggleClass('burger--open')
    $('.overlay').toggleClass('overlay-show')
})

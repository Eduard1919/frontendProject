const informationSwiperFunction = function () {
    document.querySelector('.js-events__main').classList.add('swiper-container')
    document.querySelector('.events-swiper').classList = ('swiper-wrapper events-swiper')
    document.querySelectorAll('.information').forEach(function (elem) {
        elem.classList.remove('swiper-slide')
    })
    if (MEDIAMOB.matches) {
        document.querySelectorAll('.information').forEach(function (elem) {
            elem.classList.add('swiper-slide')
        })
    }
    const swiperEvents = new Swiper('.events__main', {
        loop: true,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        320: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    if (!MEDIAMOB.matches) {
        try {
            swiperEvents.destroy();
        } catch (error) {
        }
        document.querySelector('.events-pagination').classList.add('visually-hidden')
        document.querySelectorAll('.information').forEach(function (elem) {
            elem.classList.remove('swiper-slide')
        })
    }
}

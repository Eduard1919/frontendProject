const publicationsSwiperFunction = function () {
    let swiperPubl;
    if (!MEDIAMOB.matches) {
        document.querySelector('.publ-pagination').classList.remove('visually-hidden')
        swiperPubl = new Swiper('.publications-swiper', {
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            noSwiping: true,
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 49.8,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 34,
                },
            },
        });
    }
    if (MEDIAMOB.matches) {
        try {
            swiperPubl.destroy();
        } catch (error) {
        }
        document.querySelector('.publ-pagination').classList.add('visually-hidden')
    }
}
const gallerySwiperFunction = function () {
    const swiperGal = new Swiper('.gallery-swiper', {
            loop: false,
            slidesPerColumnFill: 'column',
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 50,
                    slidesPerGroup: 3,
                },
                1300: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 50,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    spaceBetween: 34,
                    slidesPerGroup: 2,
                },
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                }
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            noSwiping: true,
        });
}
const projectsSwiperFunction = function () {
    const swiperProjects = new Swiper('.projects-swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.projects-next',
            prevEl: '.projects-prev',
        },
        noSwiping: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            1920: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 47,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 50,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 30,
            },
        },
    });
}
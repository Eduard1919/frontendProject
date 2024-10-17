const burgerFunction = function () {
    const openMenulist = document.querySelectorAll('.js-b-menu');
    const headerNavElem = document.querySelector('.js-h-nav');
    if (!MEDIADTOP.matches) {
        headerNavElem.classList.add('visually-hidden');
        document.querySelector('.search__input').classList.add('input-inactive')
        document.querySelector('.search').classList.add('form-inactive')
        document.querySelector('.search__input').placeholder = ''
        document.querySelector('.search__btn').addEventListener('click', function(ev) {
            ev.preventDefault()
            if (MEDIATAB.matches) {
                document.querySelector('.search__input').classList.remove('input-inactive')
                document.querySelector('.search').classList.remove('form-inactive')
                document.querySelector('.search').classList.add('form-active')
            }
            if (MEDIASMTAB.matches) {
                document.querySelector('.search__input').classList.remove('input-inactive')
                document.querySelector('.search').classList.remove('form-inactive')
                document.querySelector('.search').classList.add('form-active')
                document.querySelector('.js-h-search').classList.remove('visually-hidden')
                document.querySelector('.js-b-menu').classList.add('visually-hidden')
                document.querySelector('.header-logo').classList.add('visually-hidden')
            }
        })
        document.querySelector('.js-h-search').addEventListener('click', function(ev) {
            ev.preventDefault()
            document.querySelector('.search__input').classList.add('input-inactive')
            document.querySelector('.search').classList.add('form-inactive')
            document.querySelector('.search').classList.remove('form-active')
            document.querySelector('.js-h-search').classList.add('visually-hidden')
            document.querySelector('.js-b-menu').classList.remove('visually-hidden')
            document.querySelector('.header-logo').classList.remove('visually-hidden')
        })
    }
    if (MEDIADTOP.matches) {
        document.querySelector('.search__input').classList.remove('visually-hidden')
        document.querySelector('.search').classList.remove('form-inactive')
        document.querySelector('.search').classList.remove('form-active')
        headerNavElem.classList.remove('visually-hidden');
    }
    openMenulist.forEach(function (btn) {
        btn.addEventListener('click', function (ev) {
            ev.preventDefault();
            headerNavElem.classList.toggle('visually-hidden');
            openMenulist.forEach(function (current) {
                current.classList.toggle('visually-hidden');
            })
        })
    })
}
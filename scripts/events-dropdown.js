const eventsDropdown = function () {
    if (MEDIASMTAB.matches) {
        document.querySelector('.information3').classList.add('js-hidden-events');
        document.querySelector('.information3').classList.add('visually-hidden');
    }

    const openButtonElem = document.querySelectorAll('.js-all-events');
    const hiddenEventsElem = document.querySelectorAll('.js-hidden-events');
    for (let i = 0; i < openButtonElem.length; i++) {
        openButtonElem[i].addEventListener('click', function (ev) {
            ev.preventDefault();
            for (let i = 0; i < hiddenEventsElem.length; i++) {
                hiddenEventsElem[i].classList.toggle('visually-hidden');
            };
            for (let i = 0; i < openButtonElem.length; i++) {
                openButtonElem[i].classList.toggle('visually-hidden');
            };
        });
    };

    hiddenEventsElem.forEach(function (elem) { elem.classList.add('visually-hidden') })
    document.querySelectorAll('.js-open-txt').forEach(function (openBtn) {
        openBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            const path = ev.currentTarget.dataset.path;
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden');
            openBtn.classList.add('visually-hidden');
        });
    });
    if (MEDIAMOB.matches) {
        document.querySelectorAll('.information').forEach(function (elem) {
            elem.classList.remove('js-hidden-events');
            elem.classList.remove('visually-hidden');
        })
    }
}
const catalogueTabs = function () {
    document.querySelectorAll('.js-language-item').forEach(function (langBtn) {
        langBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            const path = ev.currentTarget.dataset.path;
            document.querySelectorAll('.js-catalogue-main-tab').forEach(function (ev) {
                ev.classList.add('visually-hidden');
            });
            document.querySelector(`[data-target="${path}"]`).classList.remove('visually-hidden');
            document.querySelectorAll('.js-language-item').forEach(function (current) { current.classList.remove('lang-list__btn-active') });
            langBtn.classList.add('lang-list__btn-active');
        });
    });

    document.querySelectorAll('.js-biography').forEach(function (biography) {
        biography.addEventListener('click', function (ev) {
            ev.preventDefault();
            const path = ev.currentTarget.dataset.path;
            document.querySelectorAll('.js-biography-block').forEach(function (ev) {
                ev.classList.remove('catalogue-biography-active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('catalogue-biography-active');
            document.querySelectorAll('.js-biography').forEach(function (biography) { biography.classList.remove('catalogue-acardion__link-active') })
            biography.classList.add('catalogue-acardion__link-active');
        });
    });

    const createNewElem = function (tag, text, attributObj) {
        const newElem = document.createElement(tag);
        newElem.innerHTML = text;
        for (let key in attributObj) {
            const attributKey = key;
            const attributValue = attributObj[key];
            newElem.setAttribute(attributKey, attributValue);
        }
        return newElem;
    }
    document.querySelectorAll('.js-aria-label').forEach(function (item, index) {
        const innerTxt = item.innerHTML;
        item.setAttribute('aria-label', innerTxt);
        if (item.hasAttribute('data-path') == false) {
            item.setAttribute('data-path', index + '_catalogueAuthor');
            document.querySelector(`[data-target="italian"]`).appendChild(createNewElem('div', innerTxt, {class: 'js-biography-block catalogue-biography', ["data-target"]: index + '_catalogueAuthor'}))
        }
    });
}
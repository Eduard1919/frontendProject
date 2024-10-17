const selectElem = document.querySelectorAll('.js-select');
for (let i = 0; i < selectElem.length; i++) {
    const choices = new Choices(selectElem[i], {
        searchEnabled: false,
        itemSelectText: '',
    });
}
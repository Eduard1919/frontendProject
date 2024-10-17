const contactsForm = function () {
    const inputTelElem = document.querySelector('.js-tel-input');
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(inputTelElem);
    new JustValidate('.contacts-form', {
        rules: {
            name: {
                required: true,
                minLength: 3,
            },
    
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = inputTelElem.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                },
            },
        },
        messages: {
            name: 'введите своё имя',
            tel: 'введите свой номер телефона'
        }
    })
}
const submitButtonElement = document.querySelector('#submit-btn');
const phoneNumberElement = document.querySelector('.phone-number');
const textAreaElement = document.querySelector('#textarea');
const validationMessageElement = document.querySelector('.validation-message');
const myEmail = 'kalashnikov.artsiom@gmail.com';

$(function () {
    $(".head_inner nav ul li.switch a").on("click", function () {
        $("body").toggleClass("switchMode");
        e.preventDefault();
    });
});

submitButtonElement.addEventListener('click', (event) => {
    event.preventDefault();

    if (!textAreaElement.value) {
        textAreaElement.value = myEmail;
    }


    const validationMessageSuccess = 'Номер верный';
    const validationMessageInvalid = 'Номер неверный';
    const regex = /\+[3][7][5][0-9]{9}/;

    validationMessageElement.classList.add('validation-message__active');

    if (phoneNumberElement.value.match(regex)) {
        validationMessageElement.classList.remove('validation-message__error');
        validationMessageElement.classList.add('validation-message__success');
        validationMessageElement.innerHTML = validationMessageSuccess;
    }

    if (!phoneNumberElement.value.match(regex)) {
        validationMessageElement.classList.remove('validation-message__success');
        validationMessageElement.classList.add('validation-message__error');
        validationMessageElement.innerHTML = validationMessageInvalid;
    }

});
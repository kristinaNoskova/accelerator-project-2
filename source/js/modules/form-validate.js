const sectionFormElement = document.querySelector('.form');
const formElement = sectionFormElement.querySelector('form');

const REGEXP = {
  phone: /^(?:\+7|8)[0-9]{10}$/,
  email: /^[a-zA-Zа-яА-ЯёЁ0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.(?:[a-zA-Z]{2,}|рф)$/,
  numbers: /[^0-9+]/g
};

const MESSAGE = {
  emptyMessage: 'Заполните поле',
  invalidMessagePhone: 'Неверный формат телефона',
  invalidMessageEmail: 'Неверный формат email',
};

const inputPhone = formElement.querySelector('#phone');
const inputEmail = formElement.querySelector('#email');

const validateInput = (input, regex, emptyMessage, invalidMessage) => {
  const value = input.value.trim();

  input.setCustomValidity('');
  input.parentElement.classList.remove('form__wrap-input--error');

  if (!value) {
    input.setCustomValidity(emptyMessage);
    input.parentElement.classList.add('form__wrap-input--error');
    return false;
  }

  if (!regex.test(value)) {
    input.setCustomValidity(invalidMessage);
    input.parentElement.classList.add('form__wrap-input--error');
    return false;
  }

  return true;
};

[inputPhone, inputEmail].forEach((input) => {
  input.addEventListener('input', () => {
    input.setCustomValidity(' ');
    input.parentElement.classList.remove('form__wrap-input--error');
    input.blur();
    input.focus();

    if (input.id === 'phone') {
      input.value = inputPhone.value.replace(REGEXP.numbers, '');
    }
  });
});

const submitForm = (evt) => {
  evt.preventDefault();

  const isPhoneValid = validateInput(
    inputPhone,
    REGEXP.phone,
    MESSAGE.emptyMessage,
    MESSAGE.invalidMessagePhone
  );

  if (!isPhoneValid) {
    inputPhone.reportValidity();
    return;
  }

  const isEmailValid = validateInput(
    inputEmail,
    REGEXP.email,
    MESSAGE.emptyMessage,
    MESSAGE.invalidMessageEmail
  );

  if (!isEmailValid) {
    inputEmail.reportValidity();
    return;
  }

  formElement.submit();
  formElement.reset();
};

const initFormSubmit = () => {
  formElement.addEventListener('submit', submitForm);
};

export {initFormSubmit};

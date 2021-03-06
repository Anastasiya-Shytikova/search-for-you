function getRefs() {
  return {
    root: document.querySelector('#root'),
    signIn: document.querySelector('.signin__btn'),
    signOut: document.querySelector('.signup__btn'),
    formBox: document.querySelector('.form__box'),
    wrapperLogin: document.querySelector('.section__login'),

    formErrorPassword: document.querySelector('.form__error-password'),
    formEyeBtn: document.querySelectorAll('.form__eye-btn'),

    // Forms
    loginForm: document.querySelector('[data-signin]'),
    registrationForm: document.querySelector('[data-signup]'),

    checkbox: document.querySelector('.form__checkbox'),
    registrationBtn: document.querySelector('[data-reg]'),

    formInputEmail: document.querySelector('.form__input-email'),
    formInputEmailReg: document.querySelector('.form__input-email-reg'),

    // Modal for form
    overlay: document.querySelector('.overlay'),
    containerForm: document.querySelector('.container-form'),
    closeModalBtn: document.querySelector('.modal__close'),

    // Select
    selectContainer: document.querySelector('.container__selected'),
  };
}

export default getRefs;

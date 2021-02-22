const showInputError = (formElement, inputElement, errorMessage, options) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(options.errorClass);
    inputElement.classList.add(options.inputErrorClass);
  }
  const hideInputError = (formElement, inputElement, options) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    errorElement.textContent = "";
    errorElement.classList.remove(options.errorClass);
    inputElement.classList.remove(options.inputErrorClass);
  }
  
  
  
  const checkInputValidity = (formElement, inputElement, options) => {
    const isInputValid = !inputElement.validity.valid;
    if (isInputValid) {
      const errorMessage = inputElement.validationMessage;
      showInputError(formElement, inputElement, errorMessage, options);
    } else {
      hideInputError(formElement, inputElement, options);
    }
  }
  
  const toggleButtonState = (inputList, buttonElement, options) => {
    const hasValidInput  = inputList.some((inputElement) => !inputElement.validity.valid);
  
    if (hasValidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(options.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled', true);
      buttonElement.classList.remove(options.inactiveButtonClass);
    }
  }
  
  const setEventListeners = (formElement, options) => {
    const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    const buttonElement = formElement.querySelector(options.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, options);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (event) => {
        checkInputValidity(formElement, inputElement, options);
        toggleButtonState(inputList, buttonElement, options);
      })
    })
  }
  
  const enableValidation = (options) => {
    const formList = Array.from(document.querySelectorAll(options.formSelector));  
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, options);
    }
    )};
  
  enableValidation({
      formSelector: '.popup__container',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__submit-button',
      inactiveButtonClass: 'popup__submit-button_inactive',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error_active'
});


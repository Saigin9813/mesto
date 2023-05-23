const showError = (inputElement, errorElement,config)=>{
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}
const hideError = (inputElement, errorElement,config)=>{
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

const disableButton = (buttonElement, config)=>{
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

const enableButton = (buttonElement,config)=>{
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

const toggleButtonState = (buttonElement, isActive, config)=>{
  if(!isActive){
    disableButton(buttonElement,config)
  }
  else{
    enableButton(buttonElement, config);
  }
}

const checkInputValidity = (inputElement, formElement ,config)=>{
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if(!errorElement) return;

  if(!isInputValid){
    showError(inputElement, errorElement, config);
  }
  else{
    hideError(inputElement, errorElement, config);
  }
}

const setEventListener = (formElement,config)=>{
  const inputSelector = formElement.querySelectorAll(config.inputSelector);
  const submitButtonSelector = formElement.querySelector(config.submitButtonSelector);

  formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
  });

  [...inputSelector].forEach((inputItem)=>{
    inputItem.addEventListener('input', ()=>{
      toggleButtonState(submitButtonSelector, formElement.checkValidity(), config);
      checkInputValidity(inputItem, formElement, config);
    })
  })
}

const enableValidation = (config)=>{
  const forms = document.querySelectorAll(config.formSelector);
  [...forms].forEach((formItem) =>{
    setEventListener(formItem, config);
  })
}

const configFrormSelector = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disable',
  inputErrorClass: '.popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

enableValidation(configFrormSelector);
export{disableButton,configFrormSelector};
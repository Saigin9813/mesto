// enableValidation({
//   formSelector: '.popup__content',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }); 

const showError = (inputElement, errorElement)=>{
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
}
const hideError = (inputElement, errorElement)=>{
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
}

const disableButton = (buttonElement)=>{
  buttonElement.disabled = 'disabled';
  buttonElement.classList.add('popup__button_disable');
}

const enableButton = (buttonElement)=>{
  buttonElement.disabled = false;
  buttonElement.classList.remove('popup__button_disable');
}

const toggleButtonState = (buttonElement, isActive)=>{
  if(!isActive){
    disableButton(buttonElement)
  }
  else{
    enableButton(buttonElement);
  }
}

const checkInputValidity = (inputElement, formElement)=>{
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if(!errorElement) return;

  if(!isInputValid){
    showError(inputElement, errorElement)
  }
  else{
    hideError(inputElement, errorElement)
  }
}

const setEventListener = (formElement)=>{
  const inputSelector = formElement.querySelectorAll('.popup__input');
  const submitButtonSelector = formElement.querySelector('.popup__button');

  console.dir(formElement.checkValidity());

  formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
  });

  [...inputSelector].forEach((inputItem)=>{
    inputItem.addEventListener('input', ()=>{
      toggleButtonState(submitButtonSelector, formElement.checkValidity());
      checkInputValidity(inputItem, formElement);
    })
  })
}

const enableValidation = ()=>{
  const forms = document.querySelectorAll('.popup__form');
  [...forms].forEach((formItem) =>{
    setEventListener(formItem);
  })
}
enableValidation();
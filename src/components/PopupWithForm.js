import Popup from "./Popup.js"

export default class PopupWithForm extends  Popup{
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._selectorPopup.querySelector('.popup__form');
    this._submitButtonElement = this._formElement.querySelector('.popup__button');
    this._submitButtonText = this._submitButtonElement.textContent;
    this._inputList = Array.from(this._selectorPopup.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
    this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setInputValues(data) { 
    this._inputList.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) =>{
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButtonElement.textContent = 'Сохранение...';
    }
    else {
      this._submitButtonElement.textContent = this._submitButtonText;
    }
}
}
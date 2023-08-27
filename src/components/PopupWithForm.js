import Popup from "./Popup.js"

export default class PopupWithForm extends  Popup{
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._formElement = this._selectorPopup.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = Array.from(this._selectorPopup.querySelectorAll('.popup__input'));
    this._inputValues = {};
    this._inputList.forEach((input) => {
    this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
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
}
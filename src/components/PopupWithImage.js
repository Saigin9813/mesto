import Popup from "./Popup.js"

export default class PopupWithImage extends Popup{
  constructor(selector){
    super(selector);
    this._popupImage = document.querySelector('.popup__img');
    this._popupTitle = document.querySelector('.popup__zoom-title');
  }
  open (data){
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupTitle.textContent = data.name;
    super.open();
  }
}

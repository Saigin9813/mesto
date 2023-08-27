import Popup from "./Popup.js"

export default class PopupWithImage extends Popup{
  constructor(selector){
    super(selector);
    this._popupImage = document.querySelector('.popup__img');
    this._popupTitle = document.querySelector('.popup__zoom-title');
  }
  open (title, link){
    this._popupImage.src = link;
    this._popupImage.alt = name
    this._popupTitle.textContent = title;
    super.open();
  }
}

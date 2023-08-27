export default class Popup {
  constructor(selectorPopup){
    this._selectorPopup = document.querySelector(selectorPopup);
    this._handleEcsClose = this._handleEcsClose.bind(this);
  }

  open(){
    this._selectorPopup.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEcsClose);
  }

  close(){
    this._selectorPopup.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEcsClose);
  }

  _handleEcsClose(evt){
    if(evt.key === "Escape"){
      this.close();
    }
  }

  setEventListeners(){
    this._selectorPopup.addEventListener('mousedown', (evt)=>{
      if(evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')){
        this.close();
      }
    })
  }
}

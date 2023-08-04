import { openPopupZoom } from "./index.js";

export default class Card {
  constructor(data,templateSelector){
    this._title = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._popupZoom = document.querySelector('.popup_content_zoom-image');
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);

    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.elements__image');
    this._like = this._element.querySelector('.elements__like');
    this._deleteButton = this._element.querySelector('.cards__delete');

    this._element.querySelector('.elements__title').textContent = this._title;
    this._element.querySelector('.elements__image').alt = this._title;
    this._element.querySelector('.elements__image').src = this._link;
    this._setEventListeners();

    
    return this._element;
  }

  _initDeleteCard(){
    this._element.remove();
    this._element = null;
  }


  _initLike(){
    this._like.classList.toggle('elements__like_active')
  }

   _setEventListeners(){
    this._deleteButton.addEventListener('click', ()=>{
      this._initDeleteCard();
    })
    this._like.addEventListener('click', ()=>{
      this._initLike();
    })
    this._image.addEventListener('click', ()=>{
      openPopupZoom(this._popupZoom,this._element.querySelector('.elements__image'),this._element.querySelector('.elements__title'));
    })
  }

 }
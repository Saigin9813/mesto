export default class Card {
  constructor(title, link,templateSelector,handleCardClick){
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._image.alt = this._title;
    this._image.src = this._link;
    this._setEventListeners();

    
    return this._element;
  }

  _deleteCard(){
    this._element.remove();
    this._element = null;
  }


  _likeAdd(){
    this._like.classList.toggle('elements__like_active')
  }

   _setEventListeners(){
    this._deleteButton.addEventListener('click', ()=>{
      this._deleteCard();
    })
    this._like.addEventListener('click', ()=>{
      this._likeAdd();
    })
    this._image.addEventListener('click', ()=>{
      this._handleCardClick(this._title, this._link);
    })
  }

 }
export default class Card {
  constructor(data,templateSelector,handleCardClick,handleTrashClick,handleDeleteClick,userId){
    this._data = data;
    this._id = data.id
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;

    this._templateSelector = templateSelector;

    this._handleTrashClick = handleTrashClick;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;

    this._userId = userId;
  }

  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.elements__card')
    .cloneNode(true);

    return cardElement;
  }
  updateData(newData) {
    this._likes = newData.likes;
  }

  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

  updateLikesView() {
    this._likesOutput.textContent = this._likes.length;
    if (this.isLiked()) {
      this._like.classList.add('elements__like_active');
    } else {
      this._like.classList.remove('elements__like_active');
    }
  }
  isLiked() {
    return this._likes.some((item) => item._id === this._userId);
  }

  generateCard(){
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.elements__image');
    this._like = this._element.querySelector('.elements__like');
    this._deleteButton = this._element.querySelector('.cards__delete');
    this._likesOutput = this._element.querySelector('.elements__like-counter');

    this._element.querySelector('.elements__title').textContent = this._title;
    this._image.alt = this._title;
    this._image.src = this._link;
    this._likesOutput.textContent = this._likes.length;

    if (this._ownerId !== this._userId) {
      this._deleteButton.classList.add('cards__delete-hidden');
    }
    
    if(this.isLiked()){
      this._like.classList.add('elements__like_active')
    }
    
    this._setEventListeners();

    
    return this._element;
  }

  _deleteCard(){
    this._element.remove();
    this._element = null;
  }

   _setEventListeners(){
    this._like.addEventListener('click', ()=>{
      this._handleDeleteClick();
    })
    this._image.addEventListener('click', ()=>{
      this._handleCardClick(this._data);
    })
    this._deleteButton.addEventListener('click', () => this._handleTrashClick());
  }

 }
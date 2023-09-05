const profileEditorButton = document.querySelector('.profile__editor');
const addMesoButton = document.querySelector('.profile__add');
const editAvatarButton = document.querySelector('.profile__avatar-edit')
const inputTypeName = document.querySelector('.popup__input_type-name');
const inputTypeProffesion = document.querySelector('.popup__input_type-proffession');


const formEdit = document.querySelector('.popup__form_type_edit-profile');///Ищем форму у popup с измением профиля
const formMesto = document.querySelector('.popup__form_type_add-mesto');//Ищем форму у popup с добавленим места
const formEditAvatar = document.querySelector('.popup__form_type_edit-avatar');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const configFormSelector = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__button', 
  inactiveButtonClass: 'popup__button_disable', 
  inputErrorClass: '.popup__input_type_error', 
  errorClass: 'popup__error_visible' 
}; 

const apiCofig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-74/',
  headers: {
    authorization: '447d59ea-f397-4703-9e88-c54528884047',
    'Content-Type':'application/json'
  }
}

export {
  profileEditorButton,
  addMesoButton,
  editAvatarButton,
  inputTypeName,
  inputTypeProffesion,
  formEdit,
  formMesto,
  formEditAvatar,
  apiCofig}
  
export {initialCards, configFormSelector};
const profileEditorButton = document.querySelector('.profile__editor');
const addMesoButton = document.querySelector('.profile__add');
const inputTypeName = document.querySelector('.popup__input_type-name');
const inputTypeProffesion = document.querySelector('.popup__input_type-proffession');

const formEdit = document.querySelector('.popup__form_type_edit-profile');///Ищем форму у popup с измением профиля
const formMesto = document.querySelector('.popup__form_type_add-mesto');//Ищем форму у popup с добавленим места

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

export {
  profileEditorButton,
  addMesoButton,
  inputTypeName,
  inputTypeProffesion,
  formEdit,
  formMesto}
  
export {initialCards, configFormSelector};
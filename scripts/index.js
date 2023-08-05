import { initialCards, configFormSelector } from "./constants.js";
import Card  from "./Card.js";
import FormValidator from "./FormValidator.js";

const profileEditor = document.querySelector('.profile__editor');//кнопка редактирования профиля 
const profileName = document.querySelector('.profile__name');// Поле с именем на странице
const profileProffesion = document.querySelector('.profile__proffesion');// Поле с профессией на стринце
const mestoAdd = document.querySelector('.profile__add');//Кнопка добавления места
const popups = document.querySelectorAll('.popup');//Находим все popup
const popupEdit = document.querySelector('.popup_content_edit-profile');//Находим popup с добавлением карточек
const popupAddImage = document.querySelector('.popup_content_add-mesto');//Находим popup с измением профиля
const popupZoom = document.querySelector('.popup_content_zoom-image');//Находим popup с увилечением изоброжения
const popupInputProfile = document.querySelector('.popup__input_type-name');//Находим инпут с именем
const popupInputProffesion = document.querySelector('.popup__input_type-proffession');//Находим инпут с профессией
const nameMesto = document.querySelector('.popup__input_type_name-mesto');//Находим инпут с названием места
const imageMesto = document.querySelector('.popup__input_type_image-mesto');//Находим инпут с добавлением ссылки на картинку
const imageZoom = popupZoom.querySelector('.popup__img');// Поле с картинкой
const zoomTtile = popupZoom.querySelector('.popup__zoom-title');// Поле с подписью к картинке

const formEdit = document.querySelector('.popup__form_type_edit-profile');///Ищем форму у popup с измением профиля
const formMesto = document.querySelector('.popup__form_type_add-mesto');//Ищем форму у popup с добавленим места


// Добавляем валидацию для Popup редактирования профиля
const formEditValidator = new FormValidator(configFormSelector,formEdit);
formEditValidator.enableValidation();

// Добавляем валидацию для Popup добавления места 
const formMestoValidator = new FormValidator(configFormSelector,formMesto);
formMestoValidator.enableValidation();

// Функция открытия popup-ов
const openPopup = (popup)=>{
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', closePopupByEcs);
}
// Функция закрытия popup
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEcs);
}

// Открытия окна с редактрированиям профиля
const openPopupProfile = () =>{
  popupInputProfile.value = profileName.textContent;
  popupInputProffesion.value = profileProffesion.textContent;
  openPopup(popupEdit);
}
profileEditor.addEventListener('click',openPopupProfile);

// Откртыия окна с добавлением места
const openPopupMesto = ()=>{
  openPopup(popupAddImage);
  formMestoValidator.enableValidation();

}

mestoAdd.addEventListener('click', openPopupMesto);

// Закрытия popup по нажатию крестик 
const initClosePopupByIcon = (popups)=>{
  popups.forEach((evt) => {
  const closeIco = evt.querySelector('.popup__close-button');
    closeIco.addEventListener('click', () => {
    closePopup(evt);
 })
})}

initClosePopupByIcon(popups); 


// Функция клика на картинку и открытия ее в popup
const  openPopupZoom = (link,title)=>{
  openPopup(popupZoom);
  imageZoom.src = link.src;
  imageZoom.alt = title;
  zoomTtile.textContent = title;
}

// Функция изменения профиля  
const saveProfileButton = (event) => {
  event.preventDefault();
  profileName.textContent = popupInputProfile.value;
  profileProffesion.textContent = popupInputProffesion.value;
  closePopup(popupEdit);
};

formEdit.addEventListener('submit',saveProfileButton);

// Функция закрытия popop по Ecs 
const closePopupByEcs = (evt) =>{
  evt.preventDefault();
    if (evt.key === 'Escape'){
      const activePopup = document.querySelector('.popup_opened');
      closePopup(activePopup);
    }
}

// Функция закрытия popop по overlay
const initClosePopupByOverlay = (popups) =>{
  popups.forEach((popup)=>{ 
    popup.addEventListener('click', (event)=>{
      if(event.target === popup){
        closePopup(popup);
      }
    })
  });
} 

const createCard = (item) => {
    // Клонируем tepmlate и создаем картчоку
  const card = new Card(item, '.elements-template');
  return card.generateCard();
  // Добавляем в DOM
  }

initClosePopupByOverlay(popups);

initialCards.forEach((item) =>{
  // createCard(item);
  document.querySelector('.element').append(createCard(item));

});
// Добавление новой карточки через форму
const addNewMesto = (event) =>{
  event.preventDefault();
  const item = { 
    name: nameMesto.value, 
    link: imageMesto.value 
  } 
  
  document.querySelector('.element').prepend(createCard(item));
  closePopup(popupAddImage);
  formMesto.reset();
} 

formMesto.addEventListener('submit',addNewMesto);

export {openPopupZoom,openPopup};

import { initialCards } from "./cards.js";
import { disableButton, configFrormSelector} from "./validate.js";

const profileEditor = document.querySelector('.profile__editor');//кнопка редактирования профиля
const profileName = document.querySelector('.profile__name');// Поле с именем на странице
const profileProffesion = document.querySelector('.profile__proffesion');// Поле с профессией на стринце
const mestoAdd = document.querySelector('.profile__add');//Кнопка добавления места
const saveButton = document.querySelectorAll('.popup__button')


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

const element = document.querySelector('.element');//Ищем секцию куда будем вставлять картинки


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
  disableButton(popupAddImage.querySelector('.popup__button'),configFrormSelector);
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

const cardsTemplate = document.querySelector('#elements-template').content;
// Функция удаления карточки
const initDeleteCard = (button,card) =>{
  button.addEventListener('click', ()=>{
    card.remove();
})}

// Функция клика лайк и закрашивание 
const initLike =(likeItem)=> {
  likeItem.addEventListener('click', (evt) => {
  evt.target.classList.toggle('elements__like_active');
})}

// Функция клика на картинку и открытия ее в popup
const  openPopupZoom = (popup, image,title)=>{ 
  image.addEventListener('click', () =>{
  openPopup(popup);
  imageZoom.src = image.src;
  imageZoom.alt = title.textContent
  zoomTtile.textContent = title.textContent;
})}
const addCard = (template) =>{
   element.prepend(template);
}
// Функция Создания карточки
const createCard = (titleCard,imageCard) => { 
  // Клонируем tepmlate и создаем картчоку
    const elementsTemplate = cardsTemplate.querySelector('.elements__card').cloneNode(true);
    const image = elementsTemplate.querySelector('.elements__image');
    const title = elementsTemplate.querySelector('.elements__title');
    title.textContent = titleCard;
    image.src = imageCard;
    image.alt = titleCard;

  // Осуществляем поиск нужных элементов в сохданных карточках
    const deleteCardsButton = elementsTemplate.querySelector('.cards__delete');
    const likeActive = elementsTemplate.querySelector('.elements__like');
    
    // Добавлеем разный функционал(лайк,zoom и т.д)
    initDeleteCard(deleteCardsButton,elementsTemplate);
    initLike(likeActive);
    openPopupZoom(popupZoom,image,title);
    return elementsTemplate;
}

// Функция добавления карточки
initialCards.forEach((cards)=>{
  addCard(createCard(cards.name,cards.link));
})

// Функция изменения профиля 
const saveProfileButton = (event) => {
  event.preventDefault();
  profileName.textContent = popupInputProfile.value;
  profileProffesion.textContent = popupInputProffesion.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit',saveProfileButton);

// Функция закрытия popop по overlay и Ecs
const closePopupByEcs = (evt) =>{
  evt.preventDefault();
    if (evt.key === 'Escape'){
      const activePopup = document.querySelector('.popup_opened');
      closePopup(activePopup);
    }
}
const initClosePopupByOverlay = (popups) =>{
  popups.forEach((popup)=>{
    popup.addEventListener('click', (event)=>{
      if(event.target === popup){
        closePopup(popup);
      }
    })
  });
}
initClosePopupByOverlay(popups);


const addNewMesto = (event) =>{
  event.preventDefault();

  const image = imageMesto.value;
  const title = nameMesto.value;
  
  addCard(createCard(title,image));
  closePopup(popupAddImage);
  formMesto.reset();

}
formMesto.addEventListener('submit',addNewMesto);
import { initialCards } from "./cards.js";

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


const formEdit = document.querySelector('.popup__content_type_edit-profile');///Ищем форму у popup с измением профиля
const formMesto = document.querySelector('.popup__content_type_add-mesto');//Ищем форму у popup с добавленим места

const element = document.querySelector('.element');//Ищем секцию куда будем вставлять картинки


// Функция открытия popup-ов
const openPopup = (popup)=>{
  popup.classList.add('popup_opened')
}
// Функция закрытия popup
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
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
}
mestoAdd.addEventListener('click', openPopupMesto);

// Закрытия popup по нажатию крестик
const closePopupIco = (popup)=>{
  popup.forEach((evt) => {
  const closeIco = evt.querySelector('.popup__close-button');
    closeIco.addEventListener('click', () => {
    closePopup(evt);
 })
})}
closePopupIco(popups);

const cardsTemplate = document.querySelector('#elements-template').content;
// Функция удаления карточки
const deleteCard = (button,template) =>{
  button.addEventListener('click', ()=>{
    template.remove();
})}

// Функция клика лайк и закрашивание 
const activeLike =(likeItem)=> {
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
// Функция добавление карточек из массива
const addCards = (titleCard,imageCard) => { 
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
    deleteCard(deleteCardsButton,elementsTemplate);
    activeLike(likeActive);
    openPopupZoom(popupZoom,image,title);
    addCard(elementsTemplate);
}
// Функция добавления карточки

initialCards.forEach((cards)=>{
  // console.log(cards.name);
  addCards(cards.name,cards.link);
})
// Функция изменения профиля 
const saveProfileButton = (event) => {
  event.preventDefault();
  profileName.textContent = popupInputProfile.value;
  profileProffesion.textContent = popupInputProffesion.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit',saveProfileButton);


const addMestoButton = (event) =>{
  event.preventDefault();

  const image = imageMesto.value;
  const title = nameMesto.value;
  
  addCards(title,image);
  closePopup(popupAddImage);
  formMesto.reset();
}
formMesto.addEventListener('submit',addMestoButton);




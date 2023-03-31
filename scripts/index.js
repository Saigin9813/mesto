import { initialCards } from "./cards.js";

const profileEditor = document.querySelector('.profile__editor');//кнопка редактирования профиля
const profileName = document.querySelector('.profile__name');// Поле с именем на странице
const profileProffesion = document.querySelector('.profile__proffesion');// Поле с профессией на стринце
const mestoAdd = document.querySelector('.profile__add');//Кнопка добавления места


const popups = document.querySelectorAll('.popup');//Находим все popup

const popupAddImage = document.querySelector('.popup__type_add-mesto');//Находим popup с добавлением карточек
const popupEdit = document.querySelector('.popup__type_edit_profile');//Находим popup с измением профиля
const popupZoom = document.querySelector('.popup__type_open-image');//Находим popup с увилечением изоброжения

const popupProfile = document.querySelector('.popup__input_type-name');//Находим инпут с именем
const popupProffesion = document.querySelector('.popup__input_type-proffession');//Находим инпут с профессией
const nameMesto = document.querySelector('.popup__type_name-mesto');//Находим инпут с названием места
const imageMesto = document.querySelector('.popup__type_image-mesto');//Находим инпут с добавлением ссылки на картинку

const imageZoom = popupZoom.querySelector('.popup__img');// Поле с картинкой
const zoomTtile = popupZoom.querySelector('.popup__zoom-title');// Поле с подписью к картинке


const formEdit = document.querySelector('.popup__content_type_edit_profile');///Ищем форму у popup с измением профиля
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
  popupProfile.value = profileName.textContent;
  popupProffesion.value = profileProffesion.textContent;
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
    evt.classList.remove('popup_opened');
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
  popup.classList.add('popup_opened');
  imageZoom.src = image.src;
  zoomTtile.textContent = title.textContent;
})}
const addCard = (template) =>{
  element.prepend(template);
}
// Функция добавление карточек из массива
const addCards = (arr) => { 
  arr.forEach((elements) => {
  // Клонируем tepmlate и заполняем его данными из массива
    const elementsTemplate = cardsTemplate.querySelector('.elements__card').cloneNode(true);
    elementsTemplate.querySelector('.elements__title').textContent = elements.name;
    elementsTemplate.querySelector('.elements__image').src = elements.link;
    elementsTemplate.querySelector('.elements__image').alt = elements.name;

  // Осуществляем поиск нужных элементов в сохданных карточках
    const image = elementsTemplate.querySelector('.elements__image');
    const title = elementsTemplate.querySelector('.elements__title');
    const deleteCardsButton = elementsTemplate.querySelector('.cards__delete');
    const likeActive = elementsTemplate.querySelector('.elements__like');
    element.append(elementsTemplate);

    deleteCard(deleteCardsButton,elementsTemplate);
    activeLike(likeActive);
    openPopupZoom(popupZoom,image,title);
})
};
// Функция добавления карточки

addCards(initialCards);

// Функция изменения профиля 
const saveProfileButton = (event) => {
  event.preventDefault();
  profileName.textContent = popupProfile.value;
  profileProffesion.textContent = popupProffesion.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit',saveProfileButton);


const addMestoButton = (event) =>{
  event.preventDefault();
  const getElement = cardsTemplate.querySelector('.elements__card').cloneNode(true);
  const image = getElement.querySelector('.elements__image');
  const title = getElement.querySelector('.elements__title');
  const deleteCardsButton = getElement.querySelector('.cards__delete');
  const likeActive = getElement.querySelector('.elements__like');
  image.src = imageMesto.value;
  image.alt = nameMesto.value;
  title.textContent = nameMesto.value;

  deleteCard(deleteCardsButton,getElement);
  activeLike(likeActive);
  openPopupZoom(popupZoom,image,title);
  addCard(getElement);
  closePopup(popupAddImage);
  formMesto.reset();
}
formMesto.addEventListener('submit',addMestoButton);




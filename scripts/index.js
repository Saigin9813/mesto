let profileEditor = document.querySelector('.profile__editor');
let profileName = document.querySelector('.profile__name');
let profileProffesion = document.querySelector('.profile__proffesion');
let profileAdd = document.querySelector('.profile__add');


let popups = document.querySelectorAll('.popup');
let popupAddImage = document.querySelector('.popup_image');
let popupEdit = document.querySelector('.popup__edit');
let popupName = document.querySelector('.popup__profile');
let popupProffesion = document.querySelector('.popup__proffesion');


let popupZoom = document.querySelector('.popup_zoom');
let imageZoom = popupZoom.querySelector('.popup__img');
let zoomTtile = popupZoom.querySelector('.popup__zoom-title');


let buttonSave = document.querySelector('.popup__content');
let buttonAddMesto = document.querySelector('.popup__content-mesto');
let elementsTitle = document.querySelector('.elements__title');
let elements = document.querySelector('.elements');

let nameMesto = document.querySelector('.popup__name-mesto');
let imageMesto = document.querySelector('.popup__image-mesto');


// Открытия окна с редактрированиям профиля
const popupOpen = () =>{
  popupName.value = profileName.textContent;
  popupProffesion.value = profileProffesion.textContent;
  popupEdit.classList.add('popup_opened');
}
profileEditor.addEventListener('click',popupOpen);

// Откртыия окна с добавлением места
const popupOpenMesto = ()=>{
  popupAddImage.classList.add('popup_opened');
}
profileAdd.addEventListener('click', popupOpenMesto);

// Функция закрытия popup
const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
}
// Закрытия popup по нажатию крестик
const closeIco = (popup)=>{
popup.forEach((evt) => {
let closeIco = evt.querySelector('.popup__close-button');
 closeIco.addEventListener('click', () => {
   evt.classList.remove('popup_opened');
 })
})}
closeIco(popups);

const cardsTemplate = document.querySelector('#elements-template').content;
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
const  popupZoomOpen = (popup, image,title)=>{ 
  image.addEventListener('click', () =>{
  popup.classList.add('popup_opened');
  imageZoom.src = image.src;
  zoomTtile.textContent = title.textContent;
})}

// Функция добавление карточек из массива
const addCards = (arr) => { 
  arr.forEach((element) => {
  // Клонируем tepmlate и заполняем его данными из массива
  const elementsTemplate = cardsTemplate.querySelector('.elements__card').cloneNode(true);
  elementsTemplate.querySelector('.elements__title').textContent = element.name;
  elementsTemplate.querySelector('.elements__image').src = element.link;

  // Осуществляем поиск нужных элементов в сохданных карточках
  let image = elementsTemplate.querySelector('.elements__image');
  let title = elementsTemplate.querySelector('.elements__title');
  let deleteCardsButton = elementsTemplate.querySelector('.cards__delete');
  let likeActive = elementsTemplate.querySelector('.elements__like');
  elements.append(elementsTemplate);

   deleteCard(deleteCardsButton,elementsTemplate);
   activeLike(likeActive);
   popupZoomOpen(popupZoom,image,title);
})
};
// Функция добавления карточки
const addCard = (template) =>{
  elements.prepend(template);
}

addCards(initialCards);

// Функция изменения профиля 
const btnSaveProfile = (event) => {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileProffesion.textContent = popupProffesion.value;
  popupClose(popupEdit);
};
buttonSave.addEventListener('submit',btnSaveProfile);


const btnSaveMesto = (event) =>{
  event.preventDefault();
  let getElement = cardsTemplate.querySelector('.elements__card').cloneNode(true);
  let image = getElement.querySelector('.elements__image');
  let title = getElement.querySelector('.elements__title');
  let deleteCardsButton = getElement.querySelector('.cards__delete');
  let likeActive = getElement.querySelector('.elements__like');
  image.src = imageMesto.value;
  title.textContent = nameMesto.value;

  deleteCard(deleteCardsButton,getElement);
  activeLike(likeActive);
  popupZoomOpen(popupZoom,image,title);
  addCard(getElement);
  popupClose(popupAddImage);
  imageMesto.value = '';
  nameMesto.value = '';
}
buttonAddMesto.addEventListener('submit',btnSaveMesto);




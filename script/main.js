let profileEditor = document.querySelector('.profile__editor');
let profileName = document.querySelector('.profile__name');
let profileProffesion = document.querySelector('.profile__proffesion');
let closeIco = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let popupName = document.querySelector('#popup__name');
let popupProffesion = document.querySelector('#popup__proffesion');
let buttonSave = document.querySelector('.popup__content');
popupName.value = profileName.textContent;
popupProffesion.value = profileProffesion.textContent;
const closePopupClick = function (event) {
  if(event.target === event.currentTarget) {
    popupClose();
  }
} 
const popupClose = () => {
  popup.classList.remove('popup_opened');
};
const popupOpen = () =>{
  popup.classList.add('popup_opened');
}
const btnSave =(event)=>{
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileProffesion.textContent = popupProffesion.value;
  popup.classList.remove('popup_opened');
};
closeIco.addEventListener('click', popupClose);
popup.addEventListener('click', closePopupClick);
profileEditor.addEventListener('click',popupOpen);
buttonSave.addEventListener('submit',btnSave )
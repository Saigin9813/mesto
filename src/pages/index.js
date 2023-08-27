import './index.css';

import { profileEditorButton,addMesoButton,inputTypeName,inputTypeProffesion,formEdit,formMesto } from "../utils/costants.js";
import { initialCards, configFormSelector } from "../utils/costants.js";

import Card  from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";

//Валадация форм 
const formEditValidator = new FormValidator(configFormSelector,formEdit);
const formMestoValidator = new FormValidator(configFormSelector,formMesto);
formMestoValidator.enableValidation();
formEditValidator.enableValidation();


const cardSection = new Section({
  data: initialCards,
  renderer: (item) =>{
    cardSection.addItems(createCard(item));

 } }, ".element");

const popupWithImage = new PopupWithImage('.popup_content_zoom-image');



  const createCard = ({name,link}) => {
  const card = new Card(name, link, '.elements-template',popupWithImage.open.bind(popupWithImage));
  return card.generateCard();
  }

  cardSection.renderItems();


const profilePopupWithForm = new PopupWithForm('.popup_content_edit-profile',
  ({username,proffesion})=>{
  userInfo.setUserInfo(username,proffesion);
  formEditValidator._disabledButton();
});

const userInfo = new UserInfo({
  userName: '.profile__name',
  userProffesion: '.profile__proffesion'
});

const currentUserInfo = userInfo.getUserInfo();

inputTypeName.value = currentUserInfo.userName;
inputTypeProffesion.value = currentUserInfo.userProffesion;

const mestoPopupWithForm = new PopupWithForm('.popup_content_add-mesto',
({name,link})=>{
  cardSection.addItems(createCard({name,link}));
  formMestoValidator._disabledButton()
});


profilePopupWithForm.setEventListeners();
mestoPopupWithForm.setEventListeners();
popupWithImage.setEventListeners();

profileEditorButton.addEventListener('click', profilePopupWithForm.open.bind(profilePopupWithForm));
addMesoButton.addEventListener('click',mestoPopupWithForm.open.bind(mestoPopupWithForm))
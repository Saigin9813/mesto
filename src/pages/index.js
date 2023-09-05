import './index.css';

import { profileEditorButton,addMesoButton,editAvatarButton,inputTypeName,inputTypeProffesion,formEdit,formMesto,formEditAvatar,apiCofig } from "../utils/costants.js";
import { configFormSelector } from "../utils/costants.js";

import Card  from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/popupWithConfirm.js';

let userId; 

//Валадация форм 
const formEditValidator = new FormValidator(configFormSelector,formEdit);
const formMestoValidator = new FormValidator(configFormSelector,formMesto);
const formEditAvatarValidator = new FormValidator(configFormSelector,formEditAvatar);

formEditAvatarValidator.enableValidation();
formMestoValidator.enableValidation();
formEditValidator.enableValidation();

const api = new Api(apiCofig);
const cardSection = new Section((item)=>{cardSection.addItems(createCard(item))},'.element')




Promise.all([api.getUserInfo(),api.getInitialCard()])
.then(([userData,initialCards])=>{
  userId = userData._id;
  userInfo.setUserInfo(userData);
  cardSection.renderItems(initialCards.reverse());
})
.catch((err) =>{
  console.log(err)
});


const userInfo = new UserInfo({
  name: '.profile__name',
  about: '.profile__proffesion',
  avatar: '.profile__avatar'
});

const popupAvatar = new PopupWithForm('.popup_content_edit-avatar',(formData)=>{
  popupAvatar.renderLoading(true);
  api.editAvatar(formData)
  .then((data) => {
    userInfo.setUserInfo(data);
    popupAvatar.close();
  })
  .catch((err)=>{
    console.log(err);
  })
  .finally(()=>{
    popupAvatar.renderLoading(false);
  })
}
);
popupAvatar.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  formEditAvatarValidator.disabledButton();
  popupAvatar.open();
})

const popupEdit = new PopupWithForm('.popup_content_edit-profile', (formData) => {
  popupEdit.renderLoading(true);
  api.editProfile(formData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupEdit.renderLoading(false));
});

profileEditorButton.addEventListener('click', () => {
  formEditValidator.disabledButton();
  popupEdit.setInputValues(userInfo.getUserInfo());
  popupEdit.open();
});
popupEdit.setEventListeners();


const popupAdd = new PopupWithForm('.popup_content_add-mesto', (formData) => {
  popupAdd.renderLoading(true);
  api
    .addCard(formData)
    .then((data) => {
      cardSection.addItems(createCard(data));
      popupAdd.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupAdd.renderLoading(false));
});

addMesoButton.addEventListener('click', ()=>{
  formMestoValidator.disabledButton();
  popupAdd.open();
})
popupAdd.setEventListeners();

const popupConfirmation = new PopupWithConfirm('.popup_content_delete-image')
popupConfirmation.setEventListeners();

const popupWithImage = new PopupWithImage('.popup_content_zoom-image');
popupWithImage.setEventListeners();


const createCard = (data) => {
    const card = new Card(
      data,
      '.elements-template',
      () => popupWithImage.open(data),
      () => {
        popupConfirmation.setConfirm(() => {
          popupConfirmation.renderLoading(true);
          api
            .deleteCard(data._id)
            .then(() => {
              card._deleteCard();
              popupConfirmation.close();
            })
            .catch((err) => console.log(err))
            .finally(() => popupConfirmation.renderLoading(false))
        })
        popupConfirmation.open()
      },
      () => {
        if (!card.isLiked()) {
          api
            .setLikes(data._id)
            .then((data) => {
              card.updateData(data);
              card.updateLikesView();
            })
            .catch((err) => {
              console.log(err);
            })
        } else {
          api
            .deleteLikes(data._id)
            .then((data) => {
              card.updateData(data);
              card.updateLikesView();
            })
            .catch((err) => {
              console.log(err);
            })
        }
      },
      userId,
    )
    return card.generateCard();
  }



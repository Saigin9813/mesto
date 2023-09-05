(()=>{"use strict";var t=document.querySelector(".profile__editor"),e=document.querySelector(".profile__add"),n=document.querySelector(".profile__avatar-edit"),r=(document.querySelector(".popup__input_type-name"),document.querySelector(".popup__input_type-proffession"),document.querySelector(".popup__form_type_edit-profile")),o=document.querySelector(".popup__form_type_add-mesto"),i=document.querySelector(".popup__form_type_edit-avatar"),u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disable",inputErrorClass:".popup__input_type_error",errorClass:"popup__error_visible"};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._id=e.id,this._title=e.name,this._link=e.link,this._likes=e.likes,this._ownerId=e.owner._id,this._templateSelector=n,this._handleTrashClick=o,this._handleCardClick=r,this._handleDeleteClick=i,this._userId=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"updateData",value:function(t){this._likes=t.likes}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"updateLikesView",value:function(){this._likesOutput.textContent=this._likes.length,this.isLiked()?this._like.classList.add("elements__like_active"):this._like.classList.remove("elements__like_active")}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".elements__image"),this._like=this._element.querySelector(".elements__like"),this._deleteButton=this._element.querySelector(".cards__delete"),this._likesOutput=this._element.querySelector(".elements__like-counter"),this._element.querySelector(".elements__title").textContent=this._title,this._image.alt=this._title,this._image.src=this._link,this._likesOutput.textContent=this._likes.length,this._ownerId!==this._userId&&this._deleteButton.classList.add("cards__delete-hidden"),this._setEventListeners(),this._element}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._handleDeleteClick()})),this._image.addEventListener("click",(function(){t._handleCardClick(t._data)})),this._deleteButton.addEventListener("click",(function(){return t._handleTrashClick()}))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var d=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"toggleButtonState",(function(){r._hasInvalidInput()?r._disabledButton():r._enableButton()})),p(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),p(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._isValid(t),r.toggleButtonState()}))})),r.toggleButtonState()})),this._object=e,this._element=n,this._submitElement=this._element.querySelector(this._object.submitButtonSelector),this._inputList=Array.from(this._element.querySelectorAll(this._object.inputSelector))}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){t.classList.add(this._object.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideError",value:function(t,e){t.classList.remove(this._object.inputErrorClass),e.textContent=t.validationMessage}},{key:"_disabledButton",value:function(){this._submitElement.disabled="disabled",this._submitElement.classList.add(this._object.inactiveButtonClass)}},{key:"_enableButton",value:function(){this._submitElement.disabled=!1,this._submitElement.classList.remove(this._object.inactiveButtonClass)}},{key:"_isValid",value:function(t){t.setCustomValidity("");var e=t.validity.valid,n=this._element.querySelector("#".concat(t.name,"-error"));n&&(e?this._hideError(t,n):this._showError(t,n))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var b=function(){function t(e){var n=e.name,r=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._name.textContent=e,this._about.textContent=n,this._avatar.src=r}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selectorPopup=document.querySelector(e),this._handleEcsClose=this._handleEcsClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEcsClose)}},{key:"close",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEcsClose)}},{key:"_handleEcsClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._selectorPopup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=j(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(r);if(o){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===S(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmit=e,n._formElement=n._selectorPopup.querySelector(".popup__form"),n._submitButtonElement=n._formElement.querySelector(".popup__button"),n._submitButtonText=n._submitButtonElement.textContent,n._inputList=Array.from(n._selectorPopup.querySelectorAll(".popup__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){t[e.name]&&(e.value=t[e.name])}))}},{key:"setEventListeners",value:function(){var t=this;w(j(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){w(j(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"renderLoading",value:function(t){this._submitButtonElement.textContent=t?"Сохранение...":this._submitButtonText}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=document.querySelector(".popup__img"),e._popupTitle=document.querySelector(".popup__zoom-title"),e}return e=u,(n=[{key:"open",value:function(t){this._popupImage.src=t.link,this._popupImage.alt=t.name,this._popupTitle.textContent=t.name,C(q(u.prototype),"open",this).call(this)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var x=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItems",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var D=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._token=r}var e,n;return e=t,(n=[{key:"_requestResult",value:function(t){return t.ok?t.json():Promise.reject("Что-то пошло не так: Ошибка ".concat(t.status," - ").concat(t.statusText))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._token}).then((function(e){return t._requestResult(e)}))}},{key:"getInitialCard",value:function(){var t=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._token}).then((function(e){return t._requestResult(e)}))}},{key:"editProfile",value:function(t){var e=this,n=t.name,r=t.about;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._token,body:JSON.stringify({name:n,about:r})}).then((function(t){return e._requestResult(t)}))}},{key:"editAvatar",value:function(t){var e=this,n=t.avatar;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._token,body:JSON.stringify({avatar:n})}).then((function(t){return e._requestResult(t)}))}},{key:"addCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._token,body:JSON.stringify({name:e,link:n})}).then(this._requestResult)}},{key:"setLikes",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._token}).then((function(t){return e._requestResult(t)}))}},{key:"deleteLikes",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._token}).then((function(t){return e._requestResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._baseUrl,"cards/").concat(t),{method:"DELETE",headers:this._token}).then((function(t){e._requestResult(t)}))}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function z(){return z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},z.apply(this,arguments)}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var H,$=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(r);if(o){var n=M(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._confirmButton=e._selectorPopup.querySelector(".popup__button"),e}return e=u,(n=[{key:"renderLoading",value:function(t){this._confirmButton.textContent=t?"Удаление...":"Да"}},{key:"setConfirm",value:function(t){this._handleConfirmationCallback=t}},{key:"setEventListeners",value:function(){var t=this;z(M(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(e){e.preventDefault(),t._handleConfirmationCallback()}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(g);function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new d(u,r),K=new d(u,o),Q=new d(u,i);Q.enableValidation(),K.enableValidation(),G.enableValidation();var W=new D({url:"https://mesto.nomoreparties.co/v1/cohort-74/",headers:{authorization:"447d59ea-f397-4703-9e88-c54528884047","Content-Type":"application/json"}}),X=new x((function(t){X.addItems(ot(t))}),".element");Promise.all([W.getUserInfo(),W.getInitialCard()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H=o._id,Y.setUserInfo(o),X.renderItems(i.reverse())})).catch((function(t){console.log(t)}));var Y=new b({name:".profile__name",about:".profile__proffesion",avatar:".profile__avatar"}),Z=new O(".popup_content_edit-avatar",(function(t){Z.renderLoading(!0),console.log(t),W.editAvatar(t).then((function(t){Y.setUserInfo(t),console.log(t)})).catch((function(t){console.log(t)})).finally((function(){Z.renderLoading(!1)}))}));Z.setEventListeners(),n.addEventListener("click",(function(){Q._disabledButton(),Z.open()}));var tt=new O(".popup_content_edit-profile",(function(t){tt.renderLoading(!0),W.editProfile(t).then((function(t){Y.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){return tt.renderLoading(!1)}))}));t.addEventListener("click",(function(){G._disabledButton(),tt.setInputValues(Y.getUserInfo()),tt.open()})),tt.setEventListeners();var et=new O(".popup_content_add-mesto",(function(t){et.renderLoading(!0),K._disabledButton(),W.addCard(t).then((function(t){X.addItems(ot(t))})).catch((function(t){return console.log(t)})).finally((function(){return et.renderLoading(!1)}))}));e.addEventListener("click",(function(){et.open()})),et.setEventListeners();var nt=new $(".popup_content_delete-image");nt.setEventListeners();var rt=new R(".popup_content_zoom-image");rt.setEventListeners();var ot=function(t){var e=new c(t,".elements-template",(function(){return rt.open(t)}),(function(){nt.setConfirm((function(){nt.renderLoading(!0),W.deleteCard(t._id).then((function(){e._deleteCard(),nt.close()})).catch((function(t){return console.log(t)})).finally((function(){return nt.renderLoading(!1)}))})),nt.open()}),(function(){e.isLiked()?W.deleteLikes(t._id).then((function(t){e.updateData(t),e.updateLikesView()})).catch((function(t){console.log(t)})):W.setLikes(t._id).then((function(t){e.updateData(t),e.updateLikesView()})).catch((function(t){console.log(t)}))}),H);return e.generateCard()}})();
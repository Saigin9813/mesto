export default class UserInfo {
  constructor ({ userName,userProffesion }){
    this._userName = document.querySelector(userName);
    this._userProffesion = document.querySelector(userProffesion);
  }
  getUserInfo(){
    return {
      userName: this._userName.textContent,
      userProffesion: this._userProffesion.textContent
  }
}
  setUserInfo(userName, userProffesion){
    this._userName.textContent = userName;
    this._userProffesion.textContent = userProffesion;
  }
}
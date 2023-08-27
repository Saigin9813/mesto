export default class Section {
  constructor({data,renderer}, selectorContainer){
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }
  
  addItems(element){
    this._container.prepend(element);
  }

  renderItems(){
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
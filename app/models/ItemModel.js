// function determineVisability service

export default class Item {
  constructor(typeObj) {
    console.log("Item Model");
    this.index = typeObj.index;
    this.type = typeObj.type;
    this.visible = typeObj.visible;
    this.clicksLeft = typeObj.clicksLeft;
    this.imagePath = typeObj.imagePath;
    this.template = typeObj.template;
  }
}

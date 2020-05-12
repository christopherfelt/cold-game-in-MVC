import ItemService from "../services/ItemService.js";

function _drawArea(serviceArray) {
  let areaSpace = document.getElementById("area-space");
  let areaTemplate = _generateAreaHtml(serviceArray);
  areaSpace.innerHTML = areaTemplate;
}

function _generateAreaHtml(serviceArray) {
  return "";
}

export default class ItemController {
  constructor() {
    console.log("Item Controller");
    this.service = new ItemService();
    _drawArea(this.service);
  }

  //   for side area buttons
  drawNewArea() {
    this.service = new ItemService();
    _drawArea(this.service);
  }

  itemClicked(index) {
    this.service.reduceItemClicksLeft(index);
  }
}

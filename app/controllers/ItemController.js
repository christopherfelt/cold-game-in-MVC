import SERVICE from "../services/ItemService.js";
import STORE from "../store.js";

function _drawArea() {
  let items = STORE.State.items;
  let template = "";
  items.forEach((t) => (template += t.Template));
  document.getElementById("area-space").innerHTML = template;
}

function _drawItem(id) {
  let item = STORE.State.items.find((t) => t.id == id);
  let clicksLeft = item.clicksLeft;
  if (clicksLeft > 0) {
    document.getElementById(id).innerText = clicksLeft;
  } else {
    let template = item.Template;
    let areaId = id + "-area";
    document.getElementById(areaId).innerHTML = template;
  }
}

export default class ItemController {
  constructor() {
    _drawArea();
  }

  detectUserClickOnItem(id) {
    SERVICE.reduceClicks(id);
    _drawItem(id);
  }
}

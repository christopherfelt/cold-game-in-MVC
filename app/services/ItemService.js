import Item from "../models/ItemModel.js";
import STORE from "../store.js";

let _numberOfItems = 114;

function _generateItemArray() {
  let itemInformation = [];
  for (var i = 1; i <= _numberOfItems; i++) {
    let item = _generateItemType();
    let itemObject = {};
    itemObject.type = item;
    itemObject.clicksLeft = _generateClicksLeft(item);
    itemObject.visible = itemObject.clicksLeft ? true : false;
    itemObject.imagePath = generateImagePath(item);
    itemInformation.push(itemObject);
  }
  return itemInformation;
}

function generateImagePath(item) {
  if (item != "") {
    return "assets/" + item + ".svg";
  } else {
    return "";
  }
}

function _generateClicksLeft(item) {
  let clicksLeft = 0;
  if (item == "rabbit") {
    clicksLeft = 15;
  } else if (item == "tree") {
    clicksLeft = 20;
  } else if (item == "cave") {
    clicksLeft = 10;
  } else if (item == "cabin") {
    clicksLeft = 10;
  } else {
    clicksLeft = 0;
  }
  return clicksLeft;
}

function _generateItemType() {
  let randomChoice = _generateRandomChoice();
  let randomChance = Math.random();
  if (randomChance > 0.8) {
    return randomChoice;
  } else {
    return "";
  }
}

function _generateRandomChoice() {
  let choices = ["rabbit", "tree", "cave", "cabin"];
  let randomChoice = Math.floor(Math.random() * 4);
  return choices[randomChoice];
}

class ItemService {
  reduceClicks(id) {
    let itemIndex = STORE.State.items.findIndex((t) => t.id == id);
    STORE.State.items[itemIndex].clicksLeft--;
  }

  constructor() {
    let items = _generateItemArray();
    items.forEach((t) => STORE.State.items.push(new Item(t)));
  }

  // reduceItemClicksLeft(index) {
  //   let clickLeft = this.itemArray[index].clicksLeft--;
  //   clickLeft--;
  //   // _determineVisibility(clicksLeft);
  // }
}

const SERVICE = new ItemService();
export default SERVICE;

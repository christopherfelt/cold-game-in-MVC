import Item from "../models/ItemModel.js";

let _numberOfItems = 114;

function _generateItemObject() {}

function _generateItemType() {}

function _calculateClickLeft(type) {}

function _generateItemTemplate(itemObj) {}

function _generateItemImagePath(type) {}

function _generateRandomChoice() {}

function _determineVisibility() {}

export default class ItemService {
  constructor() {
    console.log("Item Service");
    this.itemArray = [];
    for (let i = 1; i <= _numberOfItems; i++) {
      let newItem = new Item();
      this.itemArray.push();
    }
  }

  reduceItemClicksLeft(index) {
    this.itemArray[index].clicksLeft--;
  }
}

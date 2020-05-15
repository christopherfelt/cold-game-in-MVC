import { generateId } from "../utilities.js";

export default class Item {
  constructor(typeObj) {
    this.id = generateId();
    this.type = typeObj.type;
    this.visible = typeObj.visible;
    this.clicksLeft = typeObj.clicksLeft;
    this.imagePath = typeObj.imagePath;
  }

  get Template() {
    return /*html*/ ` 
              <div id='${this.id + "-area"}' class="area-square pt-1">
                <img
                  class="img-fluid resize-img ${
                    this.clicksLeft > 0 ? "" : "d-none"
                  }"
                  src="${this.imagePath}"
                  alt=""
                  onclick="app.itemController.detectUserClickOnItem('${
                    this.id
                  }')"
                />
                <span id='${this.id}' class="clicks-left ${
      this.clicksLeft > 0 ? "" : "d-none"
    }">${this.clicksLeft}</span>
              </div>`;
  }
}

import ItemController from "./controllers/ItemController.js";

class App {
  constructor() {
    console.log("App Online");
    this.itemController = new ItemController();
  }
}

window["app"] = new App();

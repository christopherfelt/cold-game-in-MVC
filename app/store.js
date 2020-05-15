import Item from "./models/ItemModel.js";

let _state = {
  items: [
    new Item({
      index: "234sdf",
      type: "rabbit",
      visible: "true",
      clicksLeft: 15,
      imagePath: "assets/rabbit.svg",
    }),
  ],
};

class Store {
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;

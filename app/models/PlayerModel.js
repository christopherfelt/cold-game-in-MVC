// this holds data models or how we will eventually store the model on the db
// one class per file

export default class Player {
  constructor() {
    this.health = 100;
    this.totalAreaClicks = 0;
    this.intervalClicks = 0;
    this.healthMetrics = {
      temp: 100,
      rest: 100,
      hydration: 100,
      calories: 100,
    };
    this.inventory = {
      food: 0,
      wood: 0,
      shelter: 0,
      water: 0,
    };
    this.actionDurations = {
      fire: 0,
      rest: 0,
    };
    // I feel like the user would be connected to the upgrades model some how
    this.upgrades = {
      lockpick: false,
      saw: false,
      trap: false,
      pot: false,
    };
    this.upgradeUses = {
      lockpick: 0,
      saw: 0,
      trap: 0,
      pot: 0,
    };
    this.upgradeUnlocked = {
      lockpick: false,
      saw: false,
      trap: false,
      pot: false,
    };
    this.upgradeAvailable = {
      lockpick: false,
      saw: false,
      trap: false,
      pot: false,
    };
    this.totalResourceCollection = {
      food: 0,
      wood: 0,
      shelter: 0,
      water: 0,
    };
  }
}

import PlayerService from "../services/PlayerService";

export default class PlayerController {
  constructor() {
    this.service = new PlayerService();
  }
}

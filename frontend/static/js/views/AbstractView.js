import axios from "axios";

export default class {
  constructor(params) {
    this.params = params;
  }
  setTitle(title) {
    document.title = title;
  }

  async getDataListe() {
    const axios = require("axios");
    const response = await axios.get("data.json");
  }

  async getHtml() {
    return "";
  }
}

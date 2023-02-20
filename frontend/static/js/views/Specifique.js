import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Specifique");
  }

  async getHtml() {
    return `<h1>Specifique</h1>`;
  }
}

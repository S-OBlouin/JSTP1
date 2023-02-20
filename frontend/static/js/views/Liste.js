import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Liste");
  }

  async getHtml() {
    return `<h1>Liste</h1>`;
  }
}

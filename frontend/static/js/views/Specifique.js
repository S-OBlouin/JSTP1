import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Specifique");
  }

  async getHtml() {
    return `<div class="container p-3">
              <h1>Spécifique</h1>
            </div>`;
  }
}

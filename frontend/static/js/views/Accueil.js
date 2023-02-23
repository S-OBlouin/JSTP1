import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Accueil");
  }
  // écrit le html dans la vue
  async getHtml() {
    return `<div class="container p-3">
              <h1>Bienvenue!</h1>
            </div>`;
  }
}

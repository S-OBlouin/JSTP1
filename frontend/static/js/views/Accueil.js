import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Accueil");
  }

  async getHtml() {
    return `<h1>Bienvenue!</h1>`;
  }
}
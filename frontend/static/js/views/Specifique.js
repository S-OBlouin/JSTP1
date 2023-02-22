import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Specifique");
  }

  async getHtml() {
    let result = await this.getData();
    result = result[Math.floor(Math.random() * result.length)];
    return `<div class="container p-3">
              <h1>Observation Aléatoire</h1>
              <div class="card">
                <h5 class="card-header">${result.comName}</h5>
              <div class="card-body">
                <p class="card-text">Nom scientifique : ${result.sciName}</p>
                <p class="card-text">Lieu d'observation : ${result.locName}</p>
                <p class="card-text">Dernière observation : ${result.obsDt}</p>
                <p class="card-text">Individu.s apperçu : ${result.howMany ? result.howMany : "Non défini"}</p>
              </div>
             </div>
           </div>`;
  }
}

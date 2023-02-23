import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Aléatoire");
  }

  async getHtml() {
    //fetch les données de data.json, choisi aléatoirement un des objets et print le html avec les données.
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
              <a href="/specifique" class="btn btn-outline-success mt-2" data-link>Aléatoire</button>
           </div>`;
  }
}

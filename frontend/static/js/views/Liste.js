import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Liste");
  }

  async getHtml() {
    const result = await this.getData();
    return `<div class="container p-3">
              <h1>Détail d'un oiseau aléatoire</h1>
              <div>
                <table class="table table-striped table-bordered">
                  <tr>
                    <th>Nom anglais</th>
                    <th>Nom scientifique</th>
                    <th>Lieu</th>
                    <th>Date de l'observation</th>
                    <th>Combien?</th>
                  </tr>
                  ${result.map((row) => {
                    return `<tr>
                              <td>${row.comName}</td>
                              <td>${row.sciName}</td>
                              <td>${row.locName}</td>
                              <td>${row.obsDt}</td>
                              <td>${row.howMany ? row.howMany : "Non défini"}</td>
                            </tr>`;
                  })}
                </table>
              </div>
            </div>`;
  }
}

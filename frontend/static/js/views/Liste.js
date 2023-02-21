import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Liste");
  }

  async getHtml() {
    return `<div class="container p-3">
              <h1>Observations récentes</h1>
              <div>
                <table class="table table-striped table-bordered">
                  
                </table>
              </div>
            </div>`;
  }
}

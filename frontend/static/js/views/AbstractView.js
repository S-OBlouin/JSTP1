export default class {
  constructor(params) {
    this.params = params;
  }
  //change le titre de la page
  setTitle(title) {
    document.title = title;
  }
  // fetch les données dans le data.json pour les envoyer vers les vues
  async getData() {
    const result = await fetch("http://localhost:8081/api/file", { method: "POST" });
    return await result.json();
  }
  // pour écrire le html dans les vues
  async getHtml() {
    return "";
  }
}

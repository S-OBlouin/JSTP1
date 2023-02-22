export default class {
  constructor(params) {
    this.params = params;
  }
  setTitle(title) {
    document.title = title;
  }

  async getData() {
    const result = await fetch("http://localhost:8081/api/file", { method: "POST" });
    return await result.json();
  }

  async getHtml() {
    return "";
  }
}

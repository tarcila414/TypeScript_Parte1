class NegociacaoController {
  private _inputData;
  private _inputQuantidade;
  private _inputValor;

  constructor() {
    this._inputData = document.querySelector("#data");
    this._inputQuantidade = document.querySelector("#quantidade");
    this._inputValor = document.querySelector("#valor");
  }

  adiciona(event) {
    alert("minha lógica");
  }
}

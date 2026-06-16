let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  tamanhoFonte -= 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function alternarContraste() {
  document.body.classList.toggle("contraste");
}

function modoLeitura() {
  alert("Modo leitura ativado: versão simplificada recomendada para acessibilidade.");
}

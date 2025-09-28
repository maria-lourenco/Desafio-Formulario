const campos = document.querySelectorAll(".campo");

const botao = document.getElementById("botao");

botao.addEventListener("click", (e) => {
  e.preventDefault();

  campos.forEach((campo) => {
    valor = campo.Value.trim();

    if (valor === "") {
      campo.classList.add("campo-preenchido");
      campo.classList.add("campo-vazio");
      campo.classList.add("campo-obrigatorio");
    } else {
      campo.classList.remove("campo-vazio");
      campo.classList.add("campo-preenchido");
      campo.classList.remove("campo-obrigatorio");
    }
  });
});

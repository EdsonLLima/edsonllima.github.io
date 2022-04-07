//Button Enviar desabilitado
btnEnviar = document.getElementById("btnEnviar");
btnEnviar.disabled = true;

const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputSubject = document.querySelector("#inputSubject");
const inputMsg = document.querySelector("#inputMsg");

// validar nome
inputName.addEventListener("blur", () => {
  if (inputName.validity.valueMissing) {
    inputName.parentElement.classList.add("input-container--invalido");
    inputName.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "O campo nome não pode estar vazio.";
  } else {
    inputName.parentElement.classList.remove("input-container--invalido");
    inputName.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "";
  }
});

// validar e-mail
inputEmail.addEventListener("blur", () => {
  if (inputEmail.validity.valueMissing) {
    inputEmail.parentElement.classList.add("input-container--invalido");
    inputEmail.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "O campo de e-mail não pode estar vazio";
  } else if (inputEmail.validity.typeMismatch) {
    inputEmail.parentElement.classList.add("input-container--invalido");
    inputEmail.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "";
    inputEmail.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "O e-mail digitado não é válido.";
  } else {
    inputEmail.parentElement.classList.remove("input-container--invalido");
    inputEmail.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "";
  }
});

// validar assunto
inputSubject.addEventListener("blur", () => {
  if (inputSubject.validity.valueMissing) {
    inputSubject.parentElement.classList.add("input-container--invalido");
    inputSubject.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "O campo Assunto não pode estar vazio.";
  } else {
    inputSubject.parentElement.classList.remove("input-container--invalido");
    inputSubject.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "";
  }
});

// mensagem do e-mail text area
inputMsg.addEventListener("blur", () => {
  if (inputMsg.validity.valueMissing) {
    inputMsg.parentElement.classList.add("input-container--invalido");
    inputMsg.parentElement.querySelector(".input-mensagem-erro").innerHTML =
      "O campo Mensagem não pode estar vazio.";
  } else {
    inputMsg.parentElement.classList.remove("input-container--invalido");
    inputMsg.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
  }
});

//cria um event listener que escuta mudanças no input
const inputAll = document.querySelector(".input");
inputAll.addEventListener("input", () => {
  //busca conteúdo do input
  let getContent = inputAll.value;

  //valida conteudo do input
  if (getContent !== null && getContent !== "") {
    //habilita o botão
    btnEnviar.disabled = false;
  } else {
    //desabilita o botão se o conteúdo do input ficar em branco
    btnEnviar.disabled = true;
  }
});

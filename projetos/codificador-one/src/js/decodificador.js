let buttonDecrypt = document.getElementById("button-decrypt");

buttonDecrypt.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputText.value == "") {
    alert(
      "Aviso! O campo texto está vazio, digite uma palavra ou frase para criptografar ou descriptografar"
    );
  } else {
    verifyEncrypt(); //descriptografa as letras
  }
  inputText.focus();
});

//verifica se esta criptografado antes de descriptografar
function verifyEncrypt() {
  //recebe palavras chaves de criptografia
  let keyWord = ["enter", "imes", "ai", "ober", "ufat"];
  //verifica se existe alguma conjunto de caracateres na estring ou seja se esta criotigrafada
  let checkWord = keyWord.some((keyWord) => inputText.value.includes(keyWord));

  if (checkWord) {
    decryptLetters();
    cleaningInput();
  } else {
    alert("Erro! Palavra ou frase não está criptografada!");
  }
}

let decryptLetters = () => {
  //recebe conteudo do input e convert as vogais
  let getInputText = inputText.value
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  msgEncript.value = getInputText.toLowerCase(); //add conteudo no input msg
  console.log(msgEncript.value);
};

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

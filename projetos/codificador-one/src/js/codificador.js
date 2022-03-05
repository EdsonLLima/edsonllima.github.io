let inputText = document.getElementById("text-area");
inputText.focus();

let msgEncript = document.getElementById("msg");

let buttonEncrypt = document.getElementById("button-encrypt");

buttonEncrypt.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputText.value == "") {
    alert(
      "Aviso! O campo texto está vazio, digite uma palavra ou frase para criptografar ou descriptografar"
    );
  } else {
    encryptLetters(); //Criptografa as letras
    cleaningInput();
  }
});

let encryptLetters = () => {
  //recebe conteudo do input e convert as vogais
  let getInputText = inputText.value
    .replace(/[e\é\ê]/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  msgEncript.value = getInputText.toLowerCase(); //add conteudo no input msg
  console.log(msgEncript.value);
};

let cleaningInput = () => {
  inputText.value = "";
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

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

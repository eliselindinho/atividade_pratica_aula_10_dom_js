/*Desenvolva uma página HTML com um formulário conforme 
modelo (de baixa fidelidade) abaixo:

Após clicar no botão Salvar valide se os nomes estão preenchidos. 
Caso não estejam, exiba uma mensagem de erro para o usuário.

Caso estejam todos preenchidos, preencha a lista que está na parte de
 baixo do protótipo na mesma ordem que o preenchimento do formulário.

Dicas:

● Usem o que vocês aprenderam até aqui de forma inteligente.
● Deixem esse formulário lindo, usem a criatividade e o CSS para isso.
● As mensagens para o cliente devem ser exibidas através de uma div que aparece 
ou não de acordo com a situação. 
● O processo de salvar pode alterar mais de uma vez a lista, depende do clique do botão!
*/

let nomeDigitado1 = document.querySelectorAll("#cadastroNome1");
let nomeDigitado2 = document.querySelectorAll("#cadastroNome2");
let nomeDigitado3 = document.querySelectorAll("#cadastroNome3");
let listaNome1 = document.querySelectorAll("#cadastro1");
let listaNome2 = document.querySelectorAll("#cadastro2");
let listaNome3 = document.querySelectorAll("#cadastro3");
let botaoSalvar = document.querySelectorAll("#botao");

botaoSalvar.onclick = (event) => {
  listaNome1.innerHTML = nomeDigitado1.value;
  listaNome2.innerHTML = nomeDigitado2.value;
  listaNome3.innerHTML = nomeDigitado3.value;
};

// function validaCampos() {
//   //Verificando se os campos do input estão vazios.
//   if (
//     nomeDigitado1.value === "" ||
//     nomeDigitado2.value === "" ||
//     nomeDigitado3.value === ""
//   ) {
//     alert("Favor preencher todos os campos do formulário.");
//   }
// }

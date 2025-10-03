/**
 * id="nome"
 * id="cpf"
 * id="cep"
 * id="uf"
 * id="rua"
 * id="numero"
 * id="complemento"
 * id="btnCadastrar"
 */

// let botao = documento.getElementById("btnCadastrar");

// botao.addEventListener("click",()=>{
//     let resp = document.getElementById("r");
//     let nomeDigitado = document.getElementById("nome").value;
//     resp.innerHTML = nomeDigitado; 
// });

const API = "http://localhost:3000/alunos";

const frmCadastro = document.getElementById("frmCadastro");
const inputNome = document.getElementById("nome");
const inputCpf = document.getElementById("cpf");
const inputCep = document.getElementById("cep");
const inputUf = document.getElementById("uf");
const inputRua = document.getElementById("rua");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");

async function salvar(e){
    e.preventDefault();
    console.log("Botao Funcionando");
    let nome = inputNome.value
    let cpf = inputCpf.value
    let cep = inputCep.value
    let uf = inputUf.value
    let rua = inputRua.value
    let numero = inputNumero.value
    let complemento = inputComplemento.value

    let novoAluno = {
        nome,cpf,cep,uf,rua,numero,complemento
    }
    console.log(novoAluno)
};

try {
    const resposta = await fetch(API, {
        method:"POST",
        body:novoAluno,
        headers:{"Content-Type" : "application/json"}
    });
    resposta.status === 201 ?window.locationhref="index.html" : 
    console.log("Erro ao Logar");

} catch (e) {
    console.error(e)
}


frmCadastro.addEventListener("submit",salvar)
  

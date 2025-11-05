function numeroAleatorio(){
       return  parseInt(Math.random() * 10 + 1);
    }

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
    function limparCampo(){
        chute = document.querySelector("input");
        chute.value = "";
     }

     function reiniciarJogo(){
        numeroSecreto = numeroAleatorio();
        limparCampo();
        tentativas = 1
        mensagemInicial();
         document.getElementById("reiniciar").setAttribute("disabled", true);
      }

    function mensagemInicial() {
        exibirTexto("h1", "imersão 2");
    exibirTexto("p", "Digite um numero de 1 a 10.");
    }

function verificarChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
    exibirTexto("h1", "Acertou.");
    exibirTexto("p", "Voce descobriu o numero secreto!");
    let palvavraTentativas = tentativas > 1 ? "tentativas." : "tentativa.";
    let mensagemTentativas = `Parabens você descobriu com ${tentativas} ${palvavraTentativas}`;
    exibirTexto("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        exibirTexto("h1", "Errou")
        let dica = chute > numeroSecreto ? "menor" : "maior";
        exibirTexto("p", `O numero secreto é ${dica}`)
            tentativas ++
    }
      
}   let numeroSecreto = numeroAleatorio();
    let tentativas = 1
    mensagemInicial();

    
    


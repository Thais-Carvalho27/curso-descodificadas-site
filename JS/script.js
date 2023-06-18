// Escolha dos tamanhos
function tamanhoSelecionado(botao){
    var botoes = document.querySelectorAll('#tamanhos button');
    for (var i = 0; i < botoes.length; i++){
        botoes[i].classList.remove('selecionado');
    }
    botao.classList.add('selecionado');
}

// Escolha das cores
function corSelecionada(botao){
    var botoes = document.querySelectorAll('#cores button');
    for (var i=0; i < botoes.length; i++){
        botoes[i].classList.remove('selecionado')
    }
    botao.classList.add('selecionado')
}

// Quantidade de camisas
function aumentar(){
    var quant= document.querySelector('.qt');
    var incrementar = parseInt(quant.innerText);
    incrementar++;
    quant.innerText = incrementar;
}

function diminuir(){
    var quant=document.querySelector('.qt');
    var reduzir = parseInt(quant.innerText);

    if (reduzir > 1){
        reduzir--;
    }
    else{
        reduzir = 1;
    }

    quant.innerText = reduzir;
}

// Adicionar ao carrinho
function carrinho1(){
    console.log("Adicionar ao carrinho camisa 1");
}

function carrinho2(){
    console.log("Adicionar ao carrinho camisa 2")
}

function carrinho3(){
    console.log("Adicionar ao carrinho camisa 3");
}

function carrinho4(){
    console.log("Adicionar ao carrinho camisa 4");
}

function carrinho5(){
    console.log("Adicionar ao carrinho camisa 5");
}

function carrinho6(){
    console.log("Adicionar ao carrinho camisa 6");
}

function carrinho7(){
    console.log("Adicionar ao carrinho camisa 7");
}

function carrinho8(){
    console.log("Adicionar ao carrinho camisa 8");
}

function carrinho9(){
    console.log("Adicionar ao carrinho camisa 9");
}

function carrinho10(){
    console.log("Adicionar ao carrinho camisa 10");
}

function carrinho11(){
    console.log("Adicionar ao carrinho camisa 11");
}

function carrinho12(){
    console.log("Adicionar ao carrinho camisa 12");
}

function carrinho13(){
    console.log("Adicionar ao carrinho camisa 13");
}

function carrinho14(){
    console.log("Adicionar ao carrinho camisa 14");
}

function carrinho15(){
    console.log("Adicionar ao carrinho camisa 15");
}



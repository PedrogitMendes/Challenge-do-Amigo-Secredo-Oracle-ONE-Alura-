
let listaAmigos = [];

function adicionarAmigo () {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !listaAmigos.includes(nome)) {

        listaAmigos.push (nome);
        atualizarLista();
        input.value =  "";

    } else {
        alert("Esse nome que você adicionou é inválido... tente novamente!");
    }

}


function atualizarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    listaAmigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);        
    });

}

function sorteioAmigos(){
    
    if(listaAmigos.length < 2 ){
    alert("Pra começarmos, adicione ao menos 2 amigos para serem sorteados.");
    return;
    }

    let sorteiodosamigos = [...listaAmigos];
    let resultadosorteio = [];

    do {
        sorteiodosamigos.sort(()=>Math.random() - 0.5); //embaralhando a lista
} while (sorteiodosamigos.some((nome, i) => nome === listaAmigos[i])); //garantia de que ninguém tirou o próprio nome

        for (let i = 0; i < listaAmigos.length; i++) {
            resultadosorteio.push (`${listaAmigos[i]} ➝ ${sorteiodosamigos[i]}`)
        }

        exibirResultado (resultadosorteio);
    }

    function exibirResultado (resultadosorteio) {
        let listaDoResultado = document.getElementById ("resultado");
        listaDoResultado.innerHTML = "";

        resultadosorteio.forEach (par => {
            let li = document.createElement ("li");
            li.textContent = par;
            listaDoResultado.appendChild(li);
        })
    }



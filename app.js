// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === ""){
        alert ("Por favor, inserte un nombre válido.");
        return;
    }

    if(amigos.includes(nombreAmigo)){
        alert (`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = "";
    inputAmigo.focus();

    actualizarLista();

}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert ("No hay amigos disponibles para sortear. Agrega al menos uno");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos=[];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;

}

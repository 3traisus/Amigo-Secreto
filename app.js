// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = []

function agregarAmigo(){
    const valueInput = document.getElementById('amigo').value
    arrayAmigos.push(valueInput)
    updateAmigos(valueInput)
}

function updateAmigos(valueInput){
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = listaAmigos.innerHTML + `${valueInput}</br>`
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado')
    const  numeroGenerado = arrayAmigos.length>0? Math.floor(Math.random()*arrayAmigos.length): -1
    if(numeroGenerado!=-1)
    {
        resultado.innerText = arrayAmigos[numeroGenerado]
    }
    else
        alert("jaja no tenemos amigos :(")
}
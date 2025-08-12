// variable de la lista de amigos
let amigos = [];


function agregarAmigo() {
   let input = document.getElementById("amigo");
   let nombre = input.value.trim();




    if (nombre === "") {
        alert(`ingresa un nombre válido`);
        return;
    }
    amigos.push(nombre);

    const listaAmigos = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    input.value = ""; // Limpiar el campo de entrada


}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer el sorteo.");
        return;
    }
    
    let desordenados = [...amigos].sort(() => Math.random() - 0.5);


    const resultados =[]
    for (let i =0 ; i < amigos.length; i++) {
       let amigoRegalo =amigos[i];
       let amigoRecibe = amigos[(i + 1) % amigos.length];
        resultados.push(`${amigoRegalo} le regala a ${amigoRecibe}`);
    }

    let listaAmigos = document.getElementById("listaAmigos");   
    listaAmigos.innerHTML = 'lista de amigos' ;




    let resultadoA = document.getElementById("resultado");
    resultado.innerHTML = 'Resultado de parejas' ;


    resultados.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultadoA.appendChild(li);
        
    });




}

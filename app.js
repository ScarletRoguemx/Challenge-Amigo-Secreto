let amigos = []; 

function agregarAmigo() { 
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === "") { 
        alert("Por favor ingrese un nombre válido");
        return;  

    }

    if (amigos.includes (nombreAmigo)) {
        alert ("Este nombre ya fue agregado");
        return
    }

    amigos.push(nombreAmigo);  
    console.log("Lista actualizada de amigos:", amigos); 

    mostrarAmigos();  
    inputAmigo.value = "";  
}


function verificarEnter(event) {

    if (event.key === 'Enter') {

        event.preventDefault();
        
        agregarAmigo();
    }
}


function mostrarAmigos() { 
    const lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => { 
        const li = document.createElement("li"); 
        li.textContent = amigo; 

        
        const botonEliminar = document.createElement("button"); 
        botonEliminar.textContent = " X "; 
        botonEliminar.classList.add("button-remove"); 
        botonEliminar.onclick = () => eliminarAmigo(index); 

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Funcion eliminar amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1); 
    mostrarAmigos(); // 
}

// Función SOLO UN amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos 1 amigo en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSecreto = amigos[indiceAleatorio]; 

    mostrarResultado(amigoSecreto);
}

// Mostrar resultado 
function mostrarResultado(amigoSecreto) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; 

    if (amigoSecreto) {
        const li = document.createElement("li");
        li.textContent = `🎁 El amigo secreto es: ${amigoSecreto}! 🎉`;
        listaResultado.appendChild(li);
    }
}

// Función para reiniciar 
function reiniciarJuego() {
    amigos = [];
    
    mostrarAmigos();
    mostrarResultado(null);

    console.log("Juego reiniciado. Lista de amigos:", amigos);
}
console.log("Lista inicial de amigos:", amigos);



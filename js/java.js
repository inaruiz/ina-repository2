function mostrarMas() {
    let div = document.getElementById("contenido");
    let button = document.getElementById("toggleButton");
    
    if (div.style.display === "none") {
        div.style.display = "block";
        button.textContent = "Mostrar menos";
    } else {
        div.style.display = "none";
        button.textContent = "Mostrar más";
    }
}


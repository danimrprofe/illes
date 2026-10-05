// les dues variables són diferents
let nom = "Ana";
let Nom = "Dani";

// Les constants són variables que no canvien
// el seu valor

const G = 9.8;
const PI = 3.14;

nom = "Pepe";

//Definimos la función
function saluda() {
  let valor = document.getElementById("campNom").value;
  document.getElementById("resultat").innerHTML = "Hola, " + valor;
}

function comprovaLogin() {
  let usuari = document.getElementById("usuari").value;
  let password = document.getElementById("password").value;

  if (usuari == "admin" && password == "1234") {
    alert("Sessió iniciada");
  } else {
    alert("Usuari o contrassenya incorrectes");
  }
}

function calcularPrecio() {
  const precio = document.getElementById("precio").value;
  const radioSi = document.getElementById("residenteSi").checked;
  const radioNo = document.getElementById("residenteNo").checked;

  if (radioSi == true) {
    let precioFinal = precio * 0.25;
    alert(precioFinal);
  } else if (radioNo == true) {
    let precioFinal = precio;
    alert(precioFinal);
  } else {
    alert("Tienes que marcar una casilla");
  }
}

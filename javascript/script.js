let nombreMaestro = "Jose Gabriel";
let apellidoMaestro = "Griffin Silva";
let edadMaestro = 30;

var dataMaestro = document.getElementById("dataMaestro");

dataMaestro.innerHTML = `
Mi nombre es: ${nombreMaestro} ${apellidoMaestro}, tengo ${edadMaestro} años de edad.
`;

let nombreAlumnoUno = "Pedro Alberto";
let apellidoAlumnoUno = "Lima Morales";
let edadAlumnoUno = 22;

var dataAlumnoUno = document.getElementById("dataAlumnoUno");

dataAlumnoUno.innerHTML = `
Mi nombre es: ${nombreAlumnoUno} ${apellidoAlumnoUno}, tengo ${edadAlumnoUno} años de edad.
`;

// COMIENZO DE CODIGO ALUMNOS


// Datos de Wendell Jarquin:

let misNombres = "Wendell Armengol";
let misApellidos = "Jarquin Vivas";
let miCarrera = "Ingeniería en Sistemas"
let miEdad = 18;

var dataWendell = document.getElementById("dataWendell");

dataWendell.innerHTML = `
Mi nombre es: ${misNombres} ${misApellidos}, tengo <span class="miEdad">${miEdad}</span> años de edad, estudio la carrera de <span class="miCarrera">${miCarrera}</span> en URACCAN.
`;
// __________________________________ Final ____________________________________

// Datos de Oscar Vivas:
let miNombres = "Oscar  anival";
let miApellidos = "Vivas  Savedra";
let micarrera = "Ingeniería en Sistemas"
let miedad = 18;
var dataoscar = document.getElementById("dataoscar");

dataoscar.innerHTML = `
Mi nombre es: ${miNombres} <span class="miApellidos"> ${miApellidos}</span>, tengo <span class="miEdad">${miedad}</span> años de edad, estudio la carrera de <span class="miCarrera">${micarrera}</span> en URACCAN.
`;

// Datos de Harry Chow:
let miNombre = "Harry Onaldo";
let miApellido = "Chow Duarte";
let carrera = "Ingenieria en Sistemas";
let edad = 19;

var dataHarry = document.getElementById("dataHarry")

dataHarry.innerHTML = `
Mi nombre es: ${miNombre} ${miApellido} tengo <span class="year">${edad}</span> años de edad y estudio la carrera de <span class= "carrer"> ${carrera} </span> en URACCAN.`;

// Datos de Nathalie:
var nombresnathalie = "Nathalie Wilmara";
var apellidosnathalie = "Castillo Barrera";
var carreranathalie = "Ingieneria en sistemas";
var edadnathalie = 17;
datanathalie.innerHTML = `
Soy <span class="nombresnathalie"> ${nombresnathalie} </span> <span class="apellidosnathalie">${apellidosnathalie} </span> tengo <span class="edadnathalie"> ${edadnathalie}</span> años de edad, estudio la carrera de ${carreranathalie} en la universidad URACCAN.
`;
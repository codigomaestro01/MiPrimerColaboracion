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
let miCarrera = "Igeniaria en sistemas"
let miEdad = 18;

var dataWendell = document.getElementById("dataWendell");

dataWendell.innerHTML = `
Mi nombre es: ${misNombres} ${misApellidos}, tengo <span class="miEdad">${miEdad}</span> de edad, estudio la carrera de <span class="miCarrera">${miCarrera}</span> en URACCAN.
`;
// __________________________________ Final ____________________________________

// Datos de Oscar Vivas:
let miNombres = "Oscar  anival";
let miApellidos = "Vivas  Savedra";
let micarrera = "Igeniaria en sistemas"
let miedad = 18;
var dataoscar = document.getElementById("dataoscar");

dataoscar.innerHTML = `
Mi nombre es: ${miNombres} <span class="miApellidos"> ${miApellidos}</span>, tengo <span class="miEdad">${miedad}</span> de edad, estudio la carrera de <span class="miCarrera">${micarrera}</span> en URACCAN.
`;

// katia silva
 
let nombreEstudent= "Katia Julieth";
let apellidoEstudent="Silva Reyes";
let edadEstudent=18;

var dataKatia= document.getElementById("dataKatia");

dataKatia.innerHTML= `
Mi nombre es ${nombreEstudent} <span class="apellidoEstudent"> ${apellidoEstudent}<span/>, tengo la edad de <span class="edadEstudent">"${edadEstudent}<span/
> `;
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

let nombreIng = "Hadyi Ali"; 
let apellidoIng = "Davila Hernandez"; 
let edadIng = 18;
let colegioSextoGradoIng = "Alfa y Omega";

var dataAlumnoIng = document.getElementById("dataAlumnoIng");
dataAlumnoIng.innerHTML = `
Mi nombre es: ${nombreIng} ${apellidoIng}, tengo ${edadIng} años
`;

var colegioSexto = document.getElementById("colegioSexto");
colegioSexto.innerHTML = `
mi sexto grado lo estudie en el colegio ${colegioSextoGradoIng}
`;
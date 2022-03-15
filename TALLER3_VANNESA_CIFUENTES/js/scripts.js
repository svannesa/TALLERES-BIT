/* 
NOMBRE:  Suly Vannesa Cifuentes Bohórquez
Cc: 1049645386

TALLER # 3 

*/

/* PUNTO 1 : Var a diseñar un algoritmo que tome el valor de dos edades y menciona cual es el mayor.

-----------------------------------------------------------------------------------------------

let edad1 = parseInt(prompt("Ingrese la primer edad"));
let edad2 = parseInt(prompt("Ingrese la segunda edad"));

if (edad1 < edad2) {

    document.write("El mayor es la edad #2 con: " + edad2 + " años");

} else if (edad1 == edad2) {

    document.write("Ambas edades son iguales a " + edad1 + " años");

} else {

    document.write("El mayor es la edad #1 con: " + edad1 + " años");
}

------------------------------------------------------------------------------------------------
*/

//PUNTO 2: El docente de programación quiere capturar la nota de sus 5 estudiante y obtener el promedio de notas

/*

let promedio = 0;
let notas = [];

for (let i = 0; i < 5; i++) {

    notas[i] = parseFloat(prompt("Digite las notas finales en el siguiente orden: \n -Nota estudiante 1. \n -Nota estudiante 2. \n -Nota estudiante 3. \n -Nota estudiante 4. \n Nota estudiante 5. "));
    promedio = promedio + notas[i];

}
document.write("El promedio de notas es = " + (promedio / 5));

-------------------------------------------------------------------------------------------------
*/

/*PUNTO 3: Los magios actualizaron su santo y seña a la palabra: “dom” por eso es necesario que usted cree un algoritmo que solicite la palabra y si es correcta que diga un mensaje: “bienvenidos al nuevo club de los magios” de lo contrario diga: “No puedes ingresar, no eres un miembro”


let santoYseña = "dom";
let palabra = prompt("Digite el nuevo santo y seña");

if (palabra == santoYseña) {

    document.write("Bienvenidos al nuevo club de los magios");

} else {

    document.write("No puedes ingresar, No eres un miembro");
}

-------------------------------------------------------------------------------------------------
*/

/* PUNTO 4: La sala de cine de la ciudad de Pasto requiere realizar el control de los clientes que van a ingresar a ver la función de Batman, el requisito para ver la película debe ser que el cliente esté vacunado. Si está vacunado va aparecer un mensaje que diga: bienvenido, si no está vacunado saldrá un mensaje que diga: por favor ve a vacunarte.

let nombre = prompt("¿Cuál es su nombre?");
let vacuna = parseInt(prompt("Digite: \n 1. Sí esta vacunado \n 2. No esta vacunado"));

switch (vacuna) {
    case 1:
        document.write("Bienvenido/a" + nombre + " a la función de BATMAN ");
        break;

    case 2:
        document.write("lo sentimos," + nombre + " ve a vacunarte para poder disfrutar nuestras funciones");
        break;

    default:

        document.write("Ingrese una opción valida");

        break;
}

-------------------------------------------------------------------------------------------------
*/

/* PUNTO 5: Realiza un algoritmo que solicite una fecha de nacimiento y en razón a ese dato va calcular la edad.

let anio = parseInt(prompt("Porfavor ingrese su año de nacimiento"));

if (anio <= 2022) {

    document.write("Su edad es de " + (2022 - anio) + " años")
} else {

    document.write("No puede ingresar un año superior al actual")
}

-------------------------------------------------------------------------------------------------
*/

/* PUNTO 6: Usted tiene los siguientes países; COLOMBIA, ARGENTINA, PERÚ, JAPÓN,ALEMANIA, al seleccionar alguno de ellos le va mostrar su capital.


let pais = prompt("Digite el pais para saber la capital: \n - COLOMBIA \n - ARGENTINA \n - PERU \n - JAPÓN\n - ALEMANIA");

switch (pais) {
    case "COLOMBIA":
        document.write(" La capital es Bogotá");
        break;

    case "ARGENTINA":
        document.write("La capital es  Buenos Aires");
        break;

    case "PERU":
        document.write("La capital es  Lima");
        break;

    case "JAPÓN":
        document.write("La capital es  Tokio");
        break;
    case "ALEMANIA":
        document.write("La capital es Berlin");
        break;

    default:

        document.write("Ingrese una opción valida");

        break;
}

-----------------------------------------------------------------------------------------------
*/


/*  PUNTO 7: Realiza la tabla de multiplicar de su número favorito hasta el número 100.

let contador = 0;
let tabla = prompt("Digite la tabla que quiere conocer");


while (contador <= 100) {
    document.write(tabla + "x" + contador + "= " + (tabla * contador) + "<br>");
    contador++;

}

------------------------------------------------------------------------------------------------
*/

//PUNTO 8: Diccionario de inglés; por favor traduce 5 palabras que quieras al inglés; el usuario las va observar y al seleccionar cualquiera le va mostrar la traducción al inglés.

/*

let palabra = prompt("Digite el palabra a traducir: \n - CASA \n - CARRO \n - PERRO \n - GATO\n - LUNES");

switch (palabra) {
    case "CASA":
        document.write(" La traducción de CASA es: HOUSE");
        break;

    case "CARRO":
        document.write("La traducción de CARRO es: CAR");
        break;

    case "PERRO":
        document.write("La traducción de PERRO es: DOG");
        break;

    case "GATO":
        document.write("La traducción de GATO es: CAT or MICHI");
        break;
    case "LUNES":
        document.write("La traducción de LUNES es: MONDAY");
        break;

    default:

        document.write("Ingrese una opción valida");

        break;
}

*/
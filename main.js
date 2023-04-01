let n = "<br />";
/*Ciclo de un triángulo
Escriba un ciclo que haga siete llamadas a console
.log para generar el siguiente
triángulo:*/

function ej1(veces) {
  document.write(n + "ejercicio 1 triángulo" + n + n);
  for (var g = "#"; g.length - 1 < veces; g += "#") {
    document.write(g + "<br />");
  }
}
ej1(7)

/*FizzBuzz
Escribe un programa que use console.log para imprimir todos los números de
1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
en lugar del número, y para los números divisibles por 5 (y no 3), imprime
"Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "
FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
o "Buzz" para números divisibles por solo uno de ellos)*/

function ej2(v1, v2) {
  document.write(n + "ejercicio 2 fizzbuzz" + n + n);
  for (let i = 1; i <= 100; i++) {
    if (i % v1 == 0 && i % v2 == 0) {
      document.write("FizzBuzz" + "<br />");
    }
    else if (i % v2 == 0) {
      document.write("Buzz" + "<br />");
    }
    else if (i % v1 == 0) {
      document.write("Fizz" + "<br />");
    }
    else {
      document.write(i + "<br />");
    }
  }
}
ej2(3, 5);

/*
Tablero de ajedrez

Escribe un programa que cree un string que represente una cuadrícula de 8 ×

8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
*/

function ej3(size) {

  document.write(n + "tablero ajedres" + n)
  let negros = "◼️";
  let blancos = "◻️";

  let poner = 0;
  let limite = size * size;
  let i = 0;

  while (limite) {

    i = i + 1;
    if (poner) {
      document.write(negros);
      poner = false;
    } else {
      document.write(blancos);
      poner = true;
    }
    if (i % size == 0) {
      document.write(n)

      if (poner) {
        poner = false
      } else {
        poner = true
      }
    }
    if (limite == i) { break }
  }
}
ej3(8)


//*-*-*-*-EJERCICIOS DE FUNCIONES-*-*-*-*


/*El capítulo anterior introdujo la función estándar Math.min que devuelve su
argumento más pequeño. Nosotros podemos construir algo como eso ahora.
Escribe una función min que tome dos argumentos y retorne su mínimo.*/

function min(a, b) {

  if (a > b) {
    return b
  } else if (a < b) {
    return a
  } else {
    return "son equivalentes"
  }

}

console.log(min(10, 9));

/*otra manera de definir si un número entero positivo es par o impar:
• Zero es par.
• Uno es impar.
• Para cualquier otro número N, su paridad es la misma que N - 2.
Define una función recursiva esPar que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero, positivo) y devolver
un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes
pensar en una forma de arreglar esto?*/

function esPar(num) {
  if (num < 0) { return "compa su numero es negativo" }
  if (num == 0) { return "numero es par" }
  if (num == 1) { return "numero no es par" }

  return esPar(num - 2);
}

console.log(esPar(50));
console.log(esPar(-1));

/*Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string.
Despues, escribe una función llamada contarCaracteres que se comporte
como contarFs, excepto que toma un segundo argumento que indica el carácter
que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
Reescribe contarFs para que haga uso de esta nueva función.*/

function contarFs(str) {
  let contador = 0;

  for (let c of str) {

    if (c == "F") { contador += 1 }
  }
  return "son " + contador + " caracter(es) de F"
}

console.log(contarFs("Frijoles"));

//segunda funcion
function contarCaracteres(str,caracter) {
  let contador = 0;
  for (let c of str) {
    if (c == caracter) { contador += 1 }
  }
  return "son " + contador + " caracter(es) de "+caracter;
}
console.log(contarCaracteres("frijolessss","s"));

//completado ejercicios de funciones :D


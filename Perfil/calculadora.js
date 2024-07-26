//fizzBuzz 
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//imprimir pares del 1 al 30
for (var i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
//Imprimir múltiplos de 4 en orden descendente
  for (var i = 100; i >= 0; i--) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
//Imprime la secuencia: 
  for (var i = 10; i >= -5; i -= 3) {
    console.log(i);
  }
  let sum = 0;
//Suma todos los números pares del 1 al 50: 
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("La suma de todos los números pares del 1 al 50 es:", sum);
//Factorial
let factorial = 1;

for (let i = 1; i <= 20; i++) {
  factorial *= i;
}

console.log("El factorial de 20 es:", factorial);








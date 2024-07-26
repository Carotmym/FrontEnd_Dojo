//Pizza MAchine
function pizzaOven(corteza, salsa, quesos, ingredientes) {
    return {
        corteza: corteza,
        salsa: salsa,
        quesos: quesos,
        ingredientes: ingredientes
    };
}
// Se crean pizzas utilizando la función
let pizzaChicago = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizzaChicago);

let pizzaLanzada = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizzaLanzada);

let pizzaPersonalizada2 = pizzaOven("corteza crujiente", "salsa blanca", ["gorgonzola", "parmesano"], ["espinacas", "tomates secos", "ajo asado"]);
console.log(pizzaPersonalizada2);
// Array de objetos

const pizzas = [
  {
    id: 1,
    nombre: 'Margheritta',
    ingredientes: ['Mozzarella', 'Albahaca', 'Tomates'],
    precio: 2650,
  },
  
  {
    id: 2,
    nombre: 'Cuatro Quesos',
    ingredientes: ['Mozzarella', 'Gorgonzola', 'Parmesano', 'Fontina'],
    precio: 2900,
  },
  
  {
    id: 3,
    nombre: 'Pepperoni',
    ingredientes: [ 'Pepperoni', 'Mozzarella', 'Albahaca', 'Orégano', 'Aeituna'],
    precio: 3200,
  },
  
  {
    id: 4,
    nombre: 'Funghi',
    ingredientes: ['Parmezano', 'Chapiñones', 'Tomate', 'Orégano' ],
    precio: 3600,
  },
  
  {
    id: 5,
    nombre: 'Hawainana',
    ingredientes: ['Mozzarella', 'Ananá', 'Tomate', 'Jamón', 'Especias'],
    precio: 2800,
  },
  
  {
    id: 6,
    nombre: 'Marinara',
    ingredientes: ['Cebollas', 'Tomate', 'Ajo', 'Aceite de oliva'],
    precio: 2100,
  },
  
]

const separador = (actividad) => {
  console.log('');
  console.log(`Actividad '${actividad}'`);
  console.log(`=============`);
}

// Testing
// console.log(pizzas);


// Actividad A
separador('A');

const pizzaConIdImpar = pizzas.filter((pizza) =>pizza.id % 2 !== 0); // Tuki, Sugar Code

pizzaConIdImpar.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} contiene el id: ${pizza.id} y es impar.`);
});


// Actividad B 
separador('B');

// Solución (Copyright Rodri)

// const pizzaDeMenorValorQue = (precio) => {
//   return pizzas.some((pizza) => {
//     return pizza.precio < precio;
//   })
//     ? console.log(`Si hay pizzas menores a $${precio}! :)`)
//     : console.log(`No hay pizzas menores a $${precio} :(, Podes buscar por otro valor!!`);
// };

// // Solución alternativa :)
const pizzaDeMenorValorQue = (precio) => {
  const valor = pizzas.some(pizza => pizza.precio < precio);
  if (valor) {
  console.log(`Si hay pizzas menores a $${precio}! :)`)
  } else {
  console.log(`No hay pizzas menores a $${precio} :(, Podes buscar por otro valor!!`);
  };
};

pizzaDeMenorValorQue(600)

// // Actividad C
separador('C');

pizzasPrecios = pizzas.forEach((pizzas) => console.log(`La pizza ${pizzas.nombre} tiene un costo de $${pizzas.precio}`));

// // Solución ctividad D
separador('D');

// // Solución Alternativa

// const ingredientesDePizza = pizzas.forEach((pizza) => {
//   console.log(`La pizza ${pizza.nombre} está hecha con:`);
//   const ingredientesDePizzas = pizza.ingredientes.forEach((ingrediente) => {
//     console.log(`Ingrediente ${pizza.ingredientes.indexOf(ingrediente) + 1} - ${ingrediente}`);
//   });
//   console.log('');
// });

const pizzaConIngrendientes = pizzas.forEach((pizza) => {
  const ingredientesConcatenados = pizza.ingredientes.map((ingrediente, i) => (i + 1 + ') ' + ingrediente) ).join('; ');

  console.log(`La pizza ${pizza.nombre} contiene ${Object.keys(pizza.ingredientes).length} ingredientes: ${ingredientesConcatenados}`);
  console.log('');
});

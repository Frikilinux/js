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
    ingredientes: [ 'Pepperoni', 'Mozzarella', 'Albahaca', 'Orégano'],
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
    ingredientes: ['Mozzarella', 'Ananá', 'Tomate', 'Jamón'],
    precio: 2800,
  },
  
  {
    id: 6,
    nombre: 'Marinara',
    ingredientes: ['Cebollas', 'Tomate', 'Ajo', 'Aceite de oliva'],
    precio: 2100,
  },
  
]

// Testing
// console.log(pizzas);


// Actividad A
const pizzaConIdImpar = pizzas.filter((pizza) =>{
  return pizza.id % 2 !== 0;
});

pizzaConIdImpar.forEach((pizza) => {
  console.log(`La pizza ${pizza.nombre} contiene el id: ${pizza.id} y es impar.`);
});


// Actividad B 
// Solución (Copyright Rodri)

// const pizzaDeMenorValorQue = (precio) => {
//   return pizzas.some((pizza) => {
//     return pizza.precio < precio;
//   })
//     ? console.log(`Si hay pizzas menores a $${precio}! :)`)
//     : console.log(`No hay pizzas menores a $${precio} :(`);
// };

// Solución alternativa :)
const pizzaDeMenorValorQue = (precio) => {
  const valor = pizzas.some((pizza) => {
    return pizza.precio < precio;
  });
  if (valor) {
  console.log(`Si hay pizzas menores a $${precio}! :)`)
  } else {
  console.log(`No hay pizzas menores a $${precio} :(`);
  }
};

pizzaDeMenorValorQue(600)

// Actividad C

pizzasPrecios = pizzas.forEach((pizzas) => {
  return console.log(`La pizza ${pizzas.nombre} tiene un costo de $${pizzas.precio}`);
});

// Actividad D

// const ingredientesDePizza = pizzas.forEach((pizza) => {
//   console.log(`La pizza ${pizza.nombre} está hecha con:`);
//   const ingredientesDePizzas = pizza.ingredientes.forEach((ingrediente) => {
//     console.log(`Ingrediente ${pizza.ingredientes.indexOf(ingrediente) + 1} ${ingrediente}`);
//   });
// });


const ingredientesParaPizza = pizzas.forEach((pizza) => {
  const ingrediente = pizza.ingredientes.map((ingrediente, i) => (i + 1 + '- '+ingrediente) ).join('; ');

  console.log(`La pizza ${pizza.nombre} contiene los ingredientes ${ingrediente}`);

})

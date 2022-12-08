// // Array de objetos

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

// separador = (actividad) => {
//   console.log('');
//   console.log(`Solución de la actividad '${actividad}'`);
//   console.log(`============================`);
// }

// // // Testing
// // // console.log(pizzas);


// // // Actividad A
// separador('A');

// const pizzaConIdImpar = pizzas.filter( pizza => pizza.id % 2 !== 0 ); // Tuki, syntactic sugar.

// pizzaConIdImpar.forEach((pizza) => {
//   console.log(`La pizza ${pizza.nombre} contiene el id: ${pizza.id} y es impar.`);
// });


// // // Actividad B 
// separador('B');

// // Solución (Copyright Rodri)

// const pizzaDeMenorValorQue = (precio) => {
//   return pizzas.some((pizza) => {
//     return pizza.precio < precio;
//   })
//     ? console.log(`Si hay pizzas menores a $${precio}! :)`)
//     : console.log(`No hay pizzas menores a $${precio} :(, Podes buscar por otro valor!!`);
// };

// // // Solución alternativa :)
// const pizzaDeMenorValorQue = (precio) => {
//   const valor = pizzas.some(pizza => pizza.precio < precio);
//   if (valor) {
//   console.log(`Si hay pizzas menores a $${precio}! :)`)
//   } else {
//   console.log(`No hay pizzas menores a $${precio} :(, Podes buscar por otro valor!!`);
//   };
// };

// pizzaDeMenorValorQue(600)

// // // Actividad C
// separador('C');

// pizzasPrecios = pizzas.forEach((pizzas) => console.log(`La pizza ${pizzas.nombre} tiene un costo de $${pizzas.precio}`));

// // // Actividad D
// separador('D');

// // Solución Alternativa
// const ingredientesDePizza = pizzas.forEach((pizza) => {
//   console.log(`La pizza ${pizza.nombre} está hecha con:`);
//   const ingredientesDePizzas = pizza.ingredientes.forEach((ingrediente) => {
//     console.log(`Ingrediente ${pizza.ingredientes.indexOf(ingrediente) + 1} - ${ingrediente}`);
//   });
//   console.log('');
// });

// const pizzaConIngrendientes = pizzas.forEach((pizza) => {
//   const ingredientesConcatenados = pizza.ingredientes.map((ingrediente, i) => (i + 1 + ') ' + ingrediente) ).join('; ');

//   console.log(`La pizza ${pizza.nombre} contiene ${Object.keys(pizza.ingredientes).length} ingredientes: ${ingredientesConcatenados}`);
//   console.log(''); // salto de línea
// });

let container = document.querySelector('.pizzas')
let button = document.querySelector('.btn')
let input = document.querySelector('#search')

const pizzaEncontrada = (array, id) => {
  return array.filter((pizza) => {
   return pizza.id === parseInt(id)
  });
};

// console.log(pizzaEncontrada(pizzas, 4))

const render = (pizza) => {
  return container.innerHTML = `<h2>Pizza ${pizza[0].nombre}</h2>\n<h3>$ ${pizza[0].precio}</h3>`
}

// console.log(render(pizzaEncontrada(pizzas, 4)));

const renderError = (error) => {
  return error === 'notfound'
    ? container.innerHTML = `<h2>No se encontró el ID</h2>`
    : error === 'notNumber'
      ? container.innerHTML = `<h2>No es un número</h2>`
      : container.innerHTML = ''
}



// const searchPizza = (lista, id) => {
//   lista.forEach( (pizza) => {
//     return  pizza.id === id
//       ? render(pizza.nombre, pizza.precio)
//       : 
//   });
// };


console.log(container);

// searchPizza(pizzas, 4)

button.addEventListener('click', () => {
  // console.log(input.value);
  const pizza = pizzaEncontrada(pizzas, input.value);
  // console.log(pizza.length === 0);
  input.value === ''
    ? renderError('notNumber')
    : pizza.length === 0
      ? renderError('notfound')
      : render(pizza)
      
});

// renderError('dfrrr')

// render('Calabreza', '$ 500')

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
// const pizzaDeMenorValorQue = (precio) => {
//   return pizzas.some((pizza) => {
//     return pizza.precio < precio;
//   })
//     ? console.log(`Si hay pizzas menores a $${precio}! :)`)
//     : console.log(`No hay pizzas menores a $${precio} :(`);
// };

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

pizzaDeMenorValorQue(6000)
// pizzaDeMenorValorQue(1000);

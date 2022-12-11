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
    nombre: 'Hawaiana',
    ingredientes: ['Mozzarella', 'Ananá', 'Tomate', 'Jamón', 'Especias'],
    precio: 2800,
  },
  
  {
    id: 6,
    nombre: 'Marinara',
    ingredientes: ['Cebollas', 'Tomate', 'Ajo', 'Aceite de oliva'],
    precio: 2100,
  },

  {
    id: 7,
    nombre:'Napolitana',
    ingredientes:['Mozzarella', 'Tomate', 'Albahaca'],
    precio: 1600,
  },
];

let messageContainer = document.querySelector('.msg-container')
let formInput = document.querySelector('#search')
let form = document.querySelector('.form');

const searchPizza = (array, id) => {
  return array.find((pizza) => pizza.id == id);
};

const checkAvailId = (value) => value >= 1 && value <= pizzas.length;

const renderPizza = (pizza, input) => {
  formInput.parentElement.style.backgroundColor = 'rgb(28, 69, 21)';
  messageContainer.innerHTML = `<h2 class="fa-beat">Pizza ${pizza.nombre}
      </h2> <h3 class="fa-beat">$ ${pizza.precio}</i></h3>`;
  formInput.setAttribute('placeholder', `${input}`);
  form.reset();
};

const renderError = (msg) => {
  messageContainer.innerHTML = msg
  formInput.parentElement.style.backgroundColor = 'rgb(80, 23, 23)';
  messageContainer.querySelector('h2').classList.add('error');
  formInput.setAttribute('placeholder', `#ID`);
  form.reset();
};

const error = (error) => {
  if (error == 'notFound') renderError(`<h2>No se encontró el ID, probá con uno
      entre 1 y ${pizzas.length}</h2>`);
  if (error == 'notNumber') renderError(`<h2>Ingresá un número, please...
      </h2>`);
  };

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let input = formInput.value;
  input === '' ? error('notNumber')
    : !checkAvailId(input) ? error('notFound')
      : renderPizza(searchPizza(pizzas, input), input)
});

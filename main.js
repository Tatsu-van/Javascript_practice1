// exe1

let dog = document.getElementById('dog');
let cat = document.getElementById('cat');
let lion = document.getElementById('lion');
let tiger = document.getElementById('tiger');
let penguin = document.getElementById('penguin');

dog.innerHTML = 'One';
cat.innerHTML = 'Two';
lion.innerHTML = 'Three';
tiger.innerHTML = 'Four';
penguin.innerHTML = 'Five';


// exe2

let Calc = document.getElementById('exe2');
Calc.innerHTML = 49 + 30 - 19;

// exe3

let x = 40;
let y = 20;
let z = 10;

let variables = document.getElementById('exe3');
variables.innerHTML = x + y * z;

// exe4

const Func = document.getElementById('exe4');

function myFunction1 () {
  const el = 40 + 20 - 10;
  return el;
}

Func.innerHTML = myFunction1();

// Or
//  function myFunction1 (a, b, c) {
//   const el = a + b - c;
//   return el;
// }

// Func.innerHTML = myFunction1(40, 20, 10);

// exe5

const change = document.getElementById('exe5');
const el = document.getElementById('btn');

 el.addEventListener('click', () => {
   if (change.textContent === ('First Text')){
     change.innerText = 'Second Text';
   } else {
    change.innerText = 'First Text';
   }
  });



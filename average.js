// **Iteración #4: Calcular el promedio **

//Calcular un promedio es una tarea extremadamente común.Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

let avge = 0;
function average(list) {
  let sum = 0;
  let item = list.length;
  


  for (let i = 0; i < list.length; i++) {
    sum = list[i] + sum;
  }

  avge = sum / item;
  
}


average(numbers);
console.log(avge);


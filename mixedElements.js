//Iteración #5: Calcular promedio de strings**

// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

let sum = 0;
function averageWord(list) {
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == "number") {
      sum = list[i] + sum;
      
    } else {
      sum = list[i].length + sum;
      
    }
  }
}

averageWord(mixedElements);

console.log('El resultado de total del Arrays de String es '+ sum);

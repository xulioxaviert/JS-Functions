// **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];



function finderName(list, name) {
  //     //for (let i = 0; i < list.length; i++) {

  if (list.includes(name)) {
    console.log("El nombre " + name + " existe en el Arrays de String");
  } else {
    console.log("El nombre " + name + " NO existe en el Arrays de String");
  }
}

finderName(nameFinder, "Xabier");
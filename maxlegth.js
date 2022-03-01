//Iteración #2: Buscar la palabra más larga**
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(list) {
  let maxWord = 0;
  let index = 0;

  for (let i = 0; i < list.length; i++) {
    if (maxWord == 0) {
      maxWord = list[i].length;
      index = i;
    } else {
      if (list[i].length > maxWord) {
        maxWord = list[i].length;
        index = i;
      }
    }
  }

  console.log(list[index]);
}


findLongestWord();

// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let duplicateWord = [];

function removeDuplicates(list) {
  list.sort();
  console.log(list);

  for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i + 1]) {
      

      list.splice(i, 1);
      duplicateWord.push(list[i]);
    }
  }
}

removeDuplicates(duplicates);
console.log(duplicates);
console.log("Palabras duplicadas: " + duplicateWord);

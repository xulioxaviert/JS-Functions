// **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(list) {
  list.sort();
  //console.log(list);

  let index = 0;
  let result = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] == list[j]) {
        index = index + 1;
      }
    }

    if (index > 1 && list[i] != list[i + 1]) {
      console.log(list[i] + " Se repite " + index + " veces");
      index = 0;
    } else {
      index = 0;
    }
  }
}

repeatCounter(counterWords);

// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]

}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let major = array[0];
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > major) {
      major = array[i];
    }
  }
  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === major) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse + cat1) > (cat2 + mouse)) {
    return 'cat2';
  } if ((mouse - cat1) === (cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat1';
  }
  
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
 for (let i = 0; i < array.length; i +=1 ) {
  if (array[i] % 3 == 0 && array[i] % 5 == 0){
    newArray.push('fizzBuzz');
  } else if (array[i] % 3 == 0){
    newArray.push('fizz');
  } else if (array[i] % 5 == 0){
    newArray.push('buzz');
  } else if (array[i] % 3 != 0 && array[i] % 5 != 0){
    newArray.push('bug!');
  }
 }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

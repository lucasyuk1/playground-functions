// Desafio 1
function compareTrue(par1, par2) {
  if (par1 === true && par2 === true){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(sentence) {
  return sentence;
}

// Desafio 4
function concatName(array) {
  return array[array.length-1]+', '+ array[0]
  
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
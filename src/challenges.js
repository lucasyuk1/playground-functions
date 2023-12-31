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
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      newArray.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
      newArray.push('fizz');
    } else if (array[i] % 5 == 0) {
      newArray.push('buzz');
    } else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let array = str;

  array = str.replace(/a/g,'1').replace(/e/g,'2').replace(/i/g,'3').replace(/o/g,'4').replace(/u/g,'5');

  return array;
}
function decode(str) {
  let array = str;

  array = str.replace(/1/g,'a').replace(/2/g,'e').replace(/3/g,'i').replace(/4/g,'o').replace(/5/g,'u');

  return array;
}

// Desafio 10
function techList(tech2, name2) {
  let array = [];
  tech2.sort();
  for (let i = 0; i <tech2.length; i += 1){

    let info = {
      tech: tech2[i],
      name: name2,
    };

    array[i] = info;
  }
  if(array != 0){
    return array;
  }
  return 'Vazio!';
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

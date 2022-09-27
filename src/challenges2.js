// Desafio 11
function generatePhoneNumber(number) {
  

  if (number.length != 11){
    return 'Array com tamanho incorreto.';
  }

 
  for (let i = 0; i < number.length; i += 1) {
    let cont = 0;
    if (number[i] > 9 || number[i] < 0){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = 0; j < number.length; j += 1) {
    if (number[j] === number[i]){
      cont += 1;
    }
    if (cont >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    } 
    }
    
  }
  
  
  
  return '(' + number[0] + '' + number[1] + ')' + ' ' + number[2] + '' + number[3] + '' + number[4] + '' + number[5] + '' + number[6] + '-' + number[7] + '' + number[8] + '' + number[9] + '' + number[10] + '';;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB+lineC) || lineB > (lineA+lineC) || lineC > (lineB+lineA)){
    return false;
  }
  if (lineA < (lineB+lineC) && lineA > Math.abs(lineB-lineC) || lineB < (lineA+lineC) && lineB > Math.abs(lineA-lineC) || lineC < (lineB+lineA) && lineC > Math.abs(lineB-lineA)){
    return true;

  }
}

// Desafio 13
function hydrate(str) {

  let result = str.match(/\d+/g).map(Number);
  let sum = 0;
  for (let i = 0; i < result.length; i += 1) {
    sum += result[i];
    
  }
  if (sum > 1){
    return sum+' copos de água';
  }
  
  return sum+' copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

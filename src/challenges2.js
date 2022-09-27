// Desafio 11
function generatePhoneNumber(number) {
  

  if (number.length != 11){
    return 'Array com tamanho incorreto.';
  }

  let cont = 0;
  
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = 0; j < number.length; j += 1) {
    if (number[j] === number[i]){
      cont += 1;
    }
    }
    if (cont >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    } 
  }
  let phone = number.replace(/\D/g, '')

  .replace(/(\d{2})(\d)/, '($1)$2')

  .replace(/(\d{4})(\d)/, '$1-$2')

  .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')

  .replace(/(-\d{4})\d+?$/, '$1')

  return phone;
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

// Desafio 11
function generatePhoneNumber(number) {
  
  return number.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"); 

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

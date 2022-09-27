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
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

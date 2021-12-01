const vin = '1HGCM82633A004352';

// Função de criptografia
function encryptVIN(vinNumber) {
  // chaves para alterar os charCodes
  const keys = [2, 4];

  // Verifica se foi passado algo como parâmetro
  if(!vinNumber) {
    console.log('Informe um VIN number !!!');
  } else {
    // Converte o valor passado como parametro para string
    const stringConverted = vinNumber.toString();

    const caractersToAscii = [];
    const encryptCaracters = [];

    // Itera por toda a string do VIN number e guarda o charCode de cada caracter
    for (let index = 0; index < vinNumber.length; index += 1) {
      caractersToAscii.push(vinNumber[index].charCodeAt());
    }

    // Altera o charCode de cada caracter gerando assim os valores finais criptografados
    for (let index = 0; index < caractersToAscii.length; index += 1) {
      // Número par
      if (vinNumber[index] % 2 === 0) {
        const number = caractersToAscii[index] + keys[0];
        encryptCaracters.push(number);
      } else {
        const number = caractersToAscii[index] + keys[1];
        encryptCaracters.push(number);
      }
    }

    console.log(caractersToAscii);
    console.log(encryptCaracters);
  }
}

// Função de descriptografia
function decryptVIN(encrypt) {

}

encryptVIN()
encryptVIN(vin)
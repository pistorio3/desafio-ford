// VIN number exemplo
const vin = '1HGCM82633A004352';

const keys = [2, 4];

// Função de criptografia
function encryptVIN(vinNumber) {
  // chaves para alterar os charCodes
  

  // Verifica se foi passado algo como parâmetro
  if(!vinNumber) {
    console.log('Informe um VIN number !!!');
  } else {
    // Converte o valor passado como parametro para string
    const stringConverted = vinNumber.toString();

    // Variáveis
    const caractersToAscii = [];
    const encryptCaracters = [];
    let result = '';

    // Itera por toda a string do VIN number e guarda o charCode de cada caracter
    for (let index = 0; index < stringConverted.length; index += 1) {
      caractersToAscii.push(stringConverted[index].charCodeAt());
    }

    // Altera o charCode de cada caracter gerando assim os valores finais criptografados
    for (let index = 0; index < caractersToAscii.length; index += 1) {
      // Número par soma 2
      if (vinNumber[index] % 2 === 0) {
        const number = caractersToAscii[index] + keys[0];
        encryptCaracters.push(number);
      // Número ímpar soma 4 
      } else {
        const number = caractersToAscii[index] + keys[1];
        encryptCaracters.push(number);
      }
    }

    // Salva em uma string final com o VIN criptografado
    for (let index = 0; index < encryptCaracters.length; index += 1) {
      result += encryptCaracters[index].toString();
    }

    console.log(`VIN encrypted: ${result}`);

    return encryptCaracters;
  }
}

// Função de descriptografia
function decryptVIN(encrypt) {
  if(!encrypt) {
    console.log('Informe um VIN number criptografado !!!');
  } else {
    // Variáveis
    const caractersFinal = [];
    const decryptedCaracters = [];
    let result = '';

    // Altera o charCode de cada caracter gerando assim os valores finais descriptografados
    for (let index = 0; index < encrypt.length; index += 1) {
      // Número par retira 2
      if (Number(encrypt[index]) % 2 === 0) {
        const number = Number(encrypt[index]) - keys[0];
        decryptedCaracters.push(number);
      // Número ímpar retira 4 
      } else {
        const number = Number(encrypt[index]) - keys[1];
        decryptedCaracters.push(number);
      }
    }

    // Itera por toda a string do VIN number e guarda a string referente ao charCode de cada caracter
    for (let index = 0; index < decryptedCaracters.length; index += 1) {
      const string = String.fromCharCode(decryptedCaracters[index]);
      caractersFinal.push(string);
    }

    // Salva em uma string final com o VIN descriptografado
    for (let index = 0; index < caractersFinal.length; index += 1) {
      result += caractersFinal[index].toString();
    }

    console.log(`VIN decrypted: ${result}`);
  }
}

console.log(`Original VIN: ${vin}`);
const encryptedVIN = encryptVIN(vin);
decryptVIN(encryptedVIN)
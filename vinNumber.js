const vin = '1HGCM82633A004352';

function encryptVIN(vinNumber) {
  const stringConverted = vinNumber.toString();

  for (let index = 0; index < vinNumber.length; index += 1) {
    console.log(vinNumber[index])
  }
}

function decryptVIN(encrypt) {

}

encryptVIN(vin)
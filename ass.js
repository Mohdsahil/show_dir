const encrypt = require('./lib/encrypt');
const decrypt = require('./lib/decrypt');
const test = require('./lib/test');

const [mode, file, password] = process.argv.slice(2);
const shouldEncrypt = mode === 'encrypt';
const shouldDecrypt = mode === 'decrypt';
const shouldTest = mode === 'test';

if (shouldEncrypt) {
    encrypt({ file, password });
}

if (shouldDecrypt) {
    decrypt({ file, password });
}


if (shouldTest) {
    test(file);
}
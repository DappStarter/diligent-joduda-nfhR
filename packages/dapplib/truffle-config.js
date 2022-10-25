require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember evil good private blue giant'; 
let testAccounts = [
"0x0d1149ded72db6f597a8f67f9ae73509ef1b42ae3bd9bf7dd3a6eb9b7d209d53",
"0xe790634b6026218cad686b0f6f8fbb27173d4f9742d35298b54dd8903b8ac627",
"0x089abc18ffcd9204d1186f17cd1142dd44df155088b3a34eda7f7fdcbb740b51",
"0xf542c103498d56ae177c78e73a0c07dcd8d7c875e98532a9a68461c3bdc5141a",
"0x9b50c2cf7ada44ed8880b367bfa0811f0d5ed9e403dcd33fe1e3557634a268b6",
"0xddae1a3e1dcf3e7196b29511b7df9390255b7564d151f5f2a662218b8104abff",
"0xeabfd4dac88097fca019cbb4dc7e0ee12cfb09ff35ac703daf89a69ce8583ab4",
"0x6b412adeefafedf810833e92fe6689ce233b1b8d1de046e3223df930189305d0",
"0x280bc17eb9971de220953185d3de7fc8ab06d003711ccc5de3afe1542d50b0f0",
"0x3c4e7f30affdea102f34bfb902be5ee78cb6617fcc340b0c17739142cb766fa3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


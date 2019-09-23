#! /bin/bash

geth --datadir ~/eth-dev/ --networkid 2022 --verbosity 5 --ipcdisable --rpcapi web3,eth,personal,miner,net,txpool --rpc --port 30301 --rpcport 8545 --rpcaddr 172.31.20.1 --allow-insecure-unlock console 2>> ~/eth-dev/eth.log

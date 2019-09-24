#! /bin/bash

geth --preload 'ASC_Alice.js' --datadir ~/eth-dev/ --networkid 2022 --verbosity 5 --ipcdisable --wsapi "eth,net,web3,network,debug,txpool" --rpcapi "eth,net,web3,network,debug,txpool" --rpc --port 30301 --rpcport 8545 --rpcaddr 172.31.20.1 --allow-insecure-unlock console 2>> ~/eth-dev/eth.log

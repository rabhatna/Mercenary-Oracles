#! /bin/bash

nohup geth --wsapi "eth,net,web3,network,debug,txpool" --rpcapi "eth,net,web3,network,debug,txpool" --preload 'ASC_X.js' --allow-insecure-unlock --datadir ~/eth-dev/ --networkid 2022 --verbosity 3 --ipcdisable --rpc --port 30302 --rpcport 8546 2>> ~/eth-dev/eth.log &

node attack.js

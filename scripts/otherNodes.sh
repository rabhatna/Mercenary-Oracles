#! /bin/bash

geth --preload 'ASC_X.js' --datadir ~/eth-dev/ --networkid 2022 --verbosity 3 --ipcdisable --wsapi "eth,net,web3,network,debug,txpool" --rpcapi "eth,net,web3,network,debug,txpool" --rpc --port 30302 --rpcport 8546 --allow-inscure-unlock console 2>> ~/eth-dev/eth.log

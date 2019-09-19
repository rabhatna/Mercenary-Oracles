#! /bin/bash

geth --datadir ~/eth-dev/ --networkid 2019 --verbosity 3 --ipcdisable --rpc --port 30301 --rpcport 8545 --rpcaddr 172.31.20.1 --preload "deployment.js" --allow-insecure-unlock console 2>> ~/eth-dev/eth.log

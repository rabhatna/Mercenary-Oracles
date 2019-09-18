#! /bin/bash

geth --datadir ~/eth-dev/ --networkid 2020 --verbosity 3 --ipcdisable --rpc --port 30301 --rpcport 8545 --rpcaddr 172.31.20.1 console 2>> ~/eth-dev/eth.log

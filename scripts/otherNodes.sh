#! /bin/bash

geth --datadir ~/eth-dev/ --networkid 2022 --verbosity 3 --ipcdisable --rpc --port 30302 --rpcport 8546 --allow-inscure-unlock console 2>> ~/eth-dev/eth.log

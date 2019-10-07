miner.start();

personal.unlockAccount(eth.accounts[0], 'charlie', 0);

cont.set( "enode://bef2c7d58405c57f90f807a73f76004bce30565f763c7a1a85b19ac49efb39da497a52c2c7e0cba6ca0f4423a3be2c637ab95d8268c4f14d3e360372a1ba5903@52.32.59.108:30302","172.31.19.87","8546" , { from: eth.accounts[ 0 ] } );

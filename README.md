# Mercenary Oracles #
### A New Threat Vector ###
---

The attack surface, for a blockchain network, is characterized by the complexity in execution space and arbitrary node behavior. Complex execution space are difficult to reason about, expose new threat vectors, and have unique edge cases. Arbitrary node behavior is a key factor in increasing complexity within the execution space, creating opportunities for nodes to game the system.

As blockchain networks scale, building trust and resilient networks are key to increasing user adoption. Identifying and building new threat vectors is a way, as developers, to ensure tomorrows networks are more robust.

## Mercenary Oracles Flow Chart
---

#### Step 1: One oracle deploys and others register
[![Contract Deployment](https://github.com/deadlycandy/Mercenary-Oracles/blob/master/Images/Deployment.png?raw=true)](https://github.com/deadlycandy/Mercenary-Oracles/tree/master/Images)

#### Step 2: Customer submits transaction with information
[![Hiring](https://github.com/deadlycandy/Mercenary-Oracles/blob/master/Images/Hiring.png?raw=true)](https://github.com/deadlycandy/Mercenary-Oracles/tree/master/Images)

#### Step 3: Oracles pull victim's information
[![Obtaining Information](https://github.com/deadlycandy/Mercenary-Oracles/blob/master/Images/Obtaining.png?raw=truee)](https://github.com/deadlycandy/Mercenary-Oracles/tree/master/Images)

#### Step 4: Oracles perform DDoS attack on victim
[![Attacking](https://github.com/deadlycandy/Mercenary-Oracles/blob/master/Images/Attack.png?raw=true)](https://github.com/deadlycandy/Mercenary-Oracles/tree/master/Images)

#### Step 5: Victim is removed from the network
[![Offline](https://github.com/deadlycandy/Mercenary-Oracles/blob/master/Images/Ofline.png?raw=true)](https://github.com/deadlycandy/Mercenary-Oracles/tree/master/Images)

## Tech
---
Mercenary Oracles are built using native ethereal tools

* AWS EC2 - Hosting private Ethereum network
* Geth - CLI Ethereum node
* Web3 - Communication between nodes (used to perform DDoS attack)
* Solidity - Ethereum Smart Contract language
* Truffle - Deploy contract onto private network
* NodeJS - Automatic attack scripts
* Bash scripts - Streamlining deployment and use.

*Truffle was used to speed and smoothen smart contract deployment*

## Future
---

The current version of the product relies on trust model centered around the oracles performing the requested work. Future version work towards chipping away at the trust required for deploying and verification completed work. The more trust-less the threat vector is

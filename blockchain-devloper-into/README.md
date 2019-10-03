# Blockchain Developer Intro Workshop

The following is a 3 hour workshop designed to introduce developers to blockchain and to creating a distributed app 
using Ethereum and InterPlanetary File System (IPFS)

Requirements
* Install git
* Install the JVM (needed for Batect)
* Install Docker (needed for Batect)
* Install MetaMask https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn
* Get Ethereum from Test Net faucet https://faucet.rinkeby.io/

go to http://localhost:5001/webui 

test from docker container  
``` 
curl -H "Content-Type: application/json" -X POST --data '{"id":1337,"jsonrpc":"2.0","method":"evm_revert","params":["0x1"]}' http://ganache-env:8545 
```

 
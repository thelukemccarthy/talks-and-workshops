# Blockchain Developer Intro Workshop

## Blurb: 
Have you ever wonder what's blockchain? 
Do you wonder what blockchain can actually be used for? 
Do you want to build something that can never be taken down?
Then come to Blockchain SuperFriday!
We will cover
 1. What is blockchain
 2. What you could and shouldn't use it for
 3. Build an application on the Ethereum and IPFS (InterPlanetary File System) blockchains

The following is a 3 hour workshop designed to introduce developers to blockchain by creating a distributed app 
using Ethereum and IPFS

## Setup if using Batect and Docker (Reconmmended Setup)
* git
* JVM (needed for Batect)
* Docker (needed for Batect)

## Setup if running locally
* git
* node v10
* yarn v1.19.0
* ganache https://www.trufflesuite.com/ganache
* ipfs https://docs.ipfs.io/guides/guides/install/#installing-from-a-prebuilt-package

## Setup for Both Batect and local
* Checkout the workshop code ```git clone --depth 1 --filter=blob:none --no-checkout "git@github.com:thelukemccarthy/talks-and-workshops.git" blockchain; cd blockchain; git checkout master -- blockchain-devloper-into/``` 
    * this will create a new directory called ```blockchain```, inside you will find the directory ```blockchain-devloper-into```
* Install the MetaMask extension/add-on for one of the following browsers 
    * [Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
    * [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
    * [Opera Extension](https://addons.opera.com/en/extensions/details/metamask/)
    * [Brave Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
* Setup MetaMask
    * Click on 'Get Started'
    * Click on Create a wallet
    * Decide if you want to send anonymous data
    * Create a **STRONG** password, and agree to the terms
    * Click on create
    * Backup your *'Secret Backup Phase'* **This is very important** don't be the person that loses millions worth of 
        crypto because you didn't back up
    * Click on 'Next'
    * Enter the *'Secret Backup Phase'* from the previous step
    * Click on 'Confirm'
    * You now have an Ethereum wallet. It currently has a balance of zero, well fix that soon :)
* Install [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/)

## Test setup Batect
1. Open the terminal 
1. Change directory to ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog```
1. Run start the application suite with batect ```./batect website-start```
1. In a browser go to ```http://localhost:3000``` You should see a very basic blogging website
1. In a browser go to ```http://localhost:5001/webui```
    #### Please Note   
    * The first load of ```http://localhost:5001/webui``` may take more than a minute to load
    * Once the site loads you will see a website that has been deployed to the IPFS blockchain
    * After the initial load the page will be fast to load, as you have a local copy
    * IPFS is a file system stored on a blockchain, and works something like bittorrent
1. From the terminal run the command 
```curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://localhost:8545```   
You should get a response similar to 
```
{
  "id":1,
  "jsonrpc":"2.0",
  "result":[
    "0x12d39cdaacdcd23e4a6a4859b5a0f11ce90b5fe4",
    "0xb288127c197edfcd20baeefda81a29e662543065",
    "0xf308ace80909e62d61207abe1f80eab4df3e4efb",
    "0x3a48f8d712811fb21291fb398d7f0c507b632d1a",
    "0xfe8f67fbfcb1e4a28e57a2077d6572396dd11ac0",
    "0x2d03af8770c909b02d0489124474aa41f1b45b20",
    "0xaccea49d10ea6e918992a5c3f13a8ea72d3ddcc6",
    "0xda8c755c8d6299d232416340cb44dd4e89d9749e",
    "0x82389224f7ce112a0a853fb47cd643fbb32f7dc8",
    "0xe9c0799bc51aa77147942659c364c9f4b81455a6"
  ]
}
```

## Test setup running locally
test from docker container  
``` 
curl -H "Content-Type: application/json" -X POST 
--data '{"id":1337,"jsonrpc":"2.0","method":"evm_revert","params":["0x1"]}' http://ganache-env:8545 
```
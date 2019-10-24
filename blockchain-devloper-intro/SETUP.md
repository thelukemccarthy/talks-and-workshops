## Setting up a Dev Environment
You have two options for setting up your development environment for this workshop. 
You can use Batect and Docker or you can install all the tools you need on your local machine.
I recommend using Batect and Docker setup as it 
* Simplifies installation
* Simplifies running all the dependencies
* Makes it easy to clean up / uninstall
* You will need a lot less terminal windows open

## Setup for Both Batect and Local
1. Install the MetaMask extension/add-on for one of the following browsers 
    1. [Chrome Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
    1. [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
    1. [Opera Extension](https://addons.opera.com/en/extensions/details/metamask/)
    1. [Brave Extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
1. Setup MetaMask
    1. Click on 'Get Started'
    1. Click on Create a wallet
    1. Decide if you want to send anonymous data
    1. Create a **STRONG** password, and agree to the terms
    1. Click on create
    1. Backup your *'Secret Backup Phase'* **This is very important** don't be the person that loses millions worth of 
        crypto because you didn't back up
    1. Click on 'Next'
    1. Enter the *'Secret Backup Phase'* from the previous step
    1. Click on 'Confirm'
    1. You now have an Ethereum wallet. It currently has a balance of zero, well fix that soon :)
1. Install [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) 

## Setup if using Batect and Docker (Recommended Setup)
1. Install git
1. Install JVM (needed for Batect)
1. Install Docker (needed for Batect)
1. Install node v10 (not strictly needed for Batect setup, but makes development easier)
1. Install yarn v1.19.0 (not strictly needed for Batect setup, but makes development easier)

## Test Batect setup
1. Open a new terminal 
1. Change directory to ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog```
1. Start the application suite with batect ```./batect website-start```
1. In a browser go to http://localhost:3000 you should see a very basic blogging website
1. In a browser go to http://localhost:5001/webui
    #### Please Note   
    * The first load of http://localhost:5001/webui may take more than a minute to load
    * Once the site loads you will see a website that has been deployed to the IPFS blockchain
    * After the initial load the page will be fast to load, as you have a local copy
    * IPFS is a file system stored on a blockchain, and works something like bittorrent
1. Open a new terminal and run the command 
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

If everything worked, skip the local setup and go to [Send some Ether](#send-some-ether)

## Setup if running locally
1. Install git
1. Install node v10
1. Install yarn v1.19.0
1. Install ganache-cli
    1. Open a new terminal  
    1. Run the command ```yarn global add ganache-cli```
    1. Try and run the command 
        ```ganache-cli --account_keys_path --accounts 10 --deterministic --mnemonic "lion today perfect mosquito actual wait magnet rent all sun unhappy sell"``` from the terminal
    1. If you get the error message "ganache-cli: command not found" check you have the yarn global bin directory on you path
        * TIP: You can display your yarn global bin directory with the command ```yarn global bin```
    1. If you still get the error message "ganache-cli: command not found" you will need to run install with sudo
        ```sudo yarn global add ganache-cli```
    1. If you see the follow you have successfully install ganache-cli
    ```
        Ganache CLI v6.7.0 (ganache-core: 2.8.0)

        Available Accounts
        ==================
        (0) 0x12d39CDaACDcd23E4A6a4859B5A0f11cE90b5Fe4 (100 ETH)
        (1) 0xb288127C197Edfcd20baEefda81a29E662543065 (100 ETH)
        (2) 0xF308ace80909E62D61207AbE1f80eAb4df3E4eFb (100 ETH)
        (3) 0x3a48F8D712811FB21291Fb398d7f0c507b632D1A (100 ETH)
        (4) 0xFe8F67FbfcB1e4A28e57A2077d6572396Dd11aC0 (100 ETH)
        (5) 0x2d03Af8770c909B02D0489124474Aa41f1b45b20 (100 ETH)
        (6) 0xacCEa49d10ea6E918992a5c3f13A8ea72D3dDcc6 (100 ETH)
        (7) 0xdA8C755c8d6299d232416340CB44Dd4e89d9749E (100 ETH)
        (8) 0x82389224F7cE112a0a853fb47cD643fbb32F7dc8 (100 ETH)
        (9) 0xE9c0799bc51AA77147942659c364C9F4b81455A6 (100 ETH)
    ```
1. Install Truffle
    1. Open another terminal
    1. Run the command ```yarn global add truffle```
    1. cd into ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog/smart-contract```
    1. Run the command ```truffle init```
    1. Select yes when asked 'Proceed anyway'
    1. If everything worked you should see the following output
    ```
        This directory is non-empty...
        ? Proceed anyway? Yes
        ✔ Preparing to download
        ✔ Downloading
        ✔ Cleaning up temporary files
        ✔ Setting up box
        
        Unbox successful. Sweet!
        
        Commands:
        
          Compile:        truffle compile
          Migrate:        truffle migrate
          Test contracts: truffle test
    ``` 
    1. Run the command ```truffle compile```
    1. If you see the following output truffle is working correctly
    ```
    Compiling your contracts...
    ===========================
    > Compiling ./contracts/Migrations.sol
    > Artifacts written to blockchain/blockchain-devloper-into/bombproof-blockchain-blog/smart-contract/build/contracts
    > Compiled successfully using:
       - solc: 0.5.8+commit.23d335f2.Emscripten.clang

    ```
1. Install IPFS https://docs.ipfs.io/guides/guides/install/#installing-from-a-prebuilt-package
    1. Open a terminal and run the command ```ipfs init```
    1. If you see output similar to the following, IPFS has been installed correctly
    ```
    initializing IPFS node at /home/luke/.ipfs
    generating 2048-bit RSA keypair...done
    peer identity: Qma1VYwttpQEj7zUnZSsZJCitpiFERsjvHhTgzoV43wGoQ
    to get started, enter:
    
        ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/readme
    ```

## Test setup running locally
1. Open another terminal 
1. Change directory to ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog/website```
1. Start the website with the command ```yarn start```
1. In a browser go to http://localhost:3000 You should see a very basic blogging website
1. If you closed ganache-cli in the setup instructions
    1. Open a new terminal 
    1. Run the command ```ganache-cli --account_keys_path --accounts 10 --deterministic --mnemonic "lion today perfect mosquito actual wait magnet rent all sun unhappy sell"```
    1. Leave it running and open another terminal
    1. Run the command ```curl -X POST --data '{"jsonrpc":"2.0","method":"eth_accounts","params":[],"id":1}' http://localhost:8545```
    You should see out similar to the following
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
1. To test IPFS run the command ```ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/readme```
You should see out similar to the following
    ```
    Hello and Welcome to IPFS!
    
    ██╗██████╗ ███████╗███████╗
    ██║██╔══██╗██╔════╝██╔════╝
    ██║██████╔╝█████╗  ███████╗
    ██║██╔═══╝ ██╔══╝  ╚════██║
    ██║██║     ██║     ███████║
    ╚═╝╚═╝     ╚═╝     ╚══════╝
    
    If you're seeing this, you have successfully installed
    IPFS and are now interfacing with the ipfs merkledag!
    ```

If all of that worked, you're setup and ready to go 
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

## Setting up a Dev Environment
You have two options for setting up your development environment for this workshop. 
You can use Batect and Docker or you can install all the tools you need on your local machine.
I recommend using Batect and Docker setup as it 
* Simplifies installation
* Simplifies running all the dependencies
* Makes it easy to clean up / uninstall
* You will need a lot less terminal windows open

## Setup for Both Batect and Local
1. Checkout the workshop code 
    ```git clone --depth 1 --filter=blob:none --no-checkout "git@github.com:thelukemccarthy/talks-and-workshops.git" blockchain; cd blockchain; git checkout master -- blockchain-devloper-into/``` 
    1. this will create a new directory called ```blockchain```, inside you will find the directory 
        ```blockchain-devloper-into```
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

## Send some Ether
Now you have everything setup, let's send some Ether from ganache (Mock Ethereum Blockchain) to MetaMask 
(Browser Ethereum Wallet)
1. Open Insomnia or Postman
1. Create a new Post request to http://localhost:8545 (this is the ganache)
1. Paste the following body into the request
    ```json  
      {
        "jsonrpc":"2.0",
        "method":"eth_sendTransaction",
        "params":[{
            "from": "0x12d39CDaACDcd23E4A6a4859B5A0f11cE90b5Fe4",
            "to": "",
            "gas": "0x76c0",
            "gasPrice": "0x9184e72a000",
            "value": "10000000000000000000"
        }],
        "id":1
      }
    ```
1. Click on orange fox head in the browser toolbar
1. Log into your wallet, you may need the *Secret Backup Phase* again
1. Click on the dropdown at the top, it will most likely have the value 'Main Ethereum Network'
1. Select 'localhost:8545'
1. Click on 'Account 1' to copy the wallet address
1. Paste the address into the "to" field of the body of the request
1. Send the request
If everything worked you should have 10 Ether in you MetaMask wallet. Don't get to excited it's not real Ether.
If it's not real Ether what good is it?
Ganache is a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while 
controlling how the chain operates. [1]:(https://www.trufflesuite.com/ganache)

Because a blockchain, like Ethereum, can't be edited or deleted once a record has been written, we need an environment we
can control to test our code before we ship to the real blockchain. Ganache is that blockchain.
[Docs](https://github.com/trufflesuite/ganache-cli) for ganache-cli 

Metamask is a Ethereum wallet that works with all the test nets including Ganache. Metamask allows you to run Ethereum
Smart contracts from your browser. 

## Smart Contracts
To understand smart contracts you first need to understand that Ethereum is a bit like the JVM, and code can be executed
on the Ethereum blockchain. Once the code is deployed on the Ethereum blockchain it's called a Distributed Application, 
or DApp for for short. A smart contract is the code that is deployed to the Ethereum blockchain and is part of a DApp. A 
DApp might include code including a web fontend that isn't deployed on Ethereum.  

## Intro to Solidity
"Solidity is an object-oriented, high-level language for implementing smart contracts. Solidity was influenced by C++, 
Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM).

Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features." 
[2]:(https://solidity.readthedocs.io/en/v0.5.12/)

Lets walk through a sample contract as a group, 
you can find the code in
``` blockchain/blockchain-devloper-into/sample-smart-contract/contracts ```
you can find the test code in 
``` blockchain/blockchain-devloper-into/sample-smart-contract/test ``` 

You can find the (Docs for Solidity)[https://solidity.readthedocs.io/en/v0.5.12/] on the solidity website
The (Introduction to Smart Contracts)[https://solidity.readthedocs.io/en/v0.5.12/introduction-to-smart-contracts.html]
Is quite good when you're starting out

## Intro to the project
We are going to take a very basic blog, and use blockchain to not only publish content but also host the website.
Because a blockchain can't be edited or deleted it can never be taken down. This is one of the unique features of
blockchain

When we look at the data structures for the blog, they will look a bit strange and you might be temped to refactor them. 
They have been designed so they can be easily stored on a blockchain. Try not to refactor them until you have completed 
the workshop.

Let's look at the code as a group

## Store Data in Ethereum
Let's start by storing a blog post on Ethereum

First lets add some dependencies we need
1. Open a terminal
1. cd into ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog/smart-contract```
1. Run the command ```yarn add -D truffle-assertions```

Next lets setup our tests
1. cd into ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog/smart-contract```
1. Run the command ```touch ./test/BlogTest.js```
1. Run the command ```touch ./contracts/Blog.sol```
1. Open the file ```./test/BlogTest.js```
1. Paste in the following code
```javascript
    const Blog = artifacts.require('Blog');
    const truffleAssert = require('truffle-assertions');
    
    contract('Blog', accounts => {
      let contract;
      beforeEach(async () => {
        contract = await Blog.new({from: accounts[0]});
      });
    
      describe('can create a blog post', () => {
        it('can not create a blog post without a title', async () => {
          await truffleAssert.reverts(contract.post('', {from: accounts[0]}), 'A title is required');
        });
      });
    });
```
If you are know any JavaScript testing frameworks this should look very familiar. Infact truffle-assert is a wrapper 
around mocha. truffle-assert adds a few features to make testing smart contracts easier, like passing in an array of 
accounts you can use for testing.

Lets run our new test
For batect
1. In a terminal cd to ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog```
1. Run the command ```./batect truffle-test```

For local
1. In a terminal cd to ```blockchain/blockchain-devloper-into/bombproof-blockchain-blog/smart-contract```
1. Run the command ```truffle test```

The test fails because the smart contract we are trying to test doesn't exist yet
Let's get the test to pass. paste the following code into ```contacts/Blog.sol```   
```solidity
pragma solidity ^0.5.8;

contract Blog {
    function checkForEmptyString(string memory _value, string memory _errorMessage) private pure {
        bytes memory convertedString = bytes(_value);
        require(convertedString.length > 0, _errorMessage);
    }

    function post(string memory _title) public {
        checkForEmptyString(_title, 'A title is required');
    }
}
```

Most of the code above should make sense, but let's go over the things that might not be clear.  
* Line 1: specifies the version of Solidity we are using
* Line 3: the key word 'contract' is the same as class in other OO languages. Contract names should start with a capital 
 letter
* Lines 4,5,6: Solidity requires you specify if a variable is only held in memory or stored on the blockchain
* Lines 5,6: check is the string passed in is empty. Solidity doesn't provide any string manipulation functions, however, 
    third-party string libraries do exist. If you don't use a third party library you will need to do strange things with
    type conversion
* Line 6: the require statement checks the first argument is true, if it is false then the contract throws an error. The
    second argument to require is optional and is the error message that will be returned. This just like throw in other
    OO languages
    
Run the tests again and make sure everything is working

Let's write another test. This time we will provide the title and store it on Ethereum
Add the following code to BlogTest.js
```javascript
  it('given a valid blog post, then the data should be stored', async () => {
      const blogTitle = 'New Blog Post';
      await contract.post('New Blog Post');
      const result = await contract.blogPosts(0);
      
      assert.equal(result, blogTitle);
  });
```
You should have a failing test. The following is the code you will need to get the test to pass
```solidity
pragma solidity ^0.5.8;

contract Blog {
    struct BlogPostData {               // add this line to Blog.sol
        string title;                   // add this line to Blog.sol
    }                                   // add this line to Blog.sol

    BlogPostData[] public blogPosts;    // add this line to Blog.sol

    function checkForEmptyString(string memory _value, string memory _errorMessage) private pure {
        bytes memory convertedString = bytes(_value);
        require(convertedString.length > 0, _errorMessage);
    }

    function post(string memory _title) public {
        checkForEmptyString(_title, 'A title is required');
        BlogPostData memory newPost = BlogPostData(_title); // add this line to Blog.sol
        blogPosts.push(newPost);                            // add this line to Blog.sol
    }
}
```
Nothing to surprising here
* Lines 4-6: Add a struct to store the a blog post
* Line 8: Creat an array to store all the blog posts
* Line 18: Create a new instance of BlogPostData struct. In Solidity you create a new instance of a struct by calling it
* like a function. The order of the arguments should be the same as the order the fields are declared in.
* Line 19: Add the blog post passed in to the array

Now you have added the title field of a blog post add the following fields. For now use string as the type for all 
fields and don't forget to add tests.
```solidity
    title
    published
    author
    content
```

Now all the fields we need have been added let's create a function to return a single blog post. Write the follow test
```javascript
   it('given a blog posts has been stored, then getPost should return the blog post', async () => {
      const blogTitle = 'New Blog Post';
      const published = '2019-10-01';
      const author = 'Homer Simpson';
      const content = 'Mmmmmm Donuts';
      await contract.post(blogTitle, published, author, content);
      const result = await contract.getPost(0);

      assert.equal(result[0], blogTitle);
      assert.equal(result[1], published);
      assert.equal(result[2], author);
      assert.equal(result[3], content);
    });
```
You might have noticed we have multiple asserts and the result is an array.
This is a limitation of Solidity, as currently it can't return user defined types. 
Add the following function into Blog.sol to get the tests to pass.
```solidity
    function getPost(uint256 _index) public view returns(string memory, string memory, string memory, string memory) {
        BlogPostData memory blogPost = blogPosts[_index];
        return (
            blogPost.title,
            blogPost.published,
            blogPost.author,
            blogPost.content
        );
    }
```
The above function introduces a few new concepts let's go over them now.
* Line 1: The view keyword is introduced. This tell the Ethereum data is only read in the contract. Without the view 
    keyword this function would return the blockchain transaction and not the values we expect to see.  
* Line 1: Solidity can't return user defined types, however it can return mulitple values. Because all of the values in 
    BlogPostData are strings we return four strings. What is returned to our test is the following
    ```json
        Result {
            '0': 'New Blog Post',
            '1': '2019-10-01',
            '2': 'Homer Simpson',
            '3': 'Mmmmmm Donuts', 
        }
    ```
* Lines 1,2: Use the memory keyword to tell Ethereum to only store values in memory and not on the blockchain
* Lines 3-8: Return the multiple values, we wrap all the return values in () so Ethereum knows all the values to return

Currently user define types can't be returned from functions in Solidity, that might change in the future. 
We can see this by turning on an experimental feature.
The following code is not needed for this workshop, I just want you see 
```solidity
pragma solidity ^0.5.8;
pragma experimental ABIEncoderV2; // add this line after line 1 of the contract, to turn on the experimental feature
```
Add this function inside the contract 
```solidity
    function getPosts() public view returns (BlogPostData[] memory){
        return blogPosts;
    }
```
The Solidity code becomes a lot simpler, however what is returned might not be what you expect.
The following is what is returned from the getPosts() function to our Javascript tests
```javascript
[ 
  [ 
    'New Blog Post',
    '2019-10-01',
    'Homer Simpson',
    'Mmmmmm Donuts',
    title: 'New Blog Post',
    published: '2019-10-01',
    author: 'Homer Simpson',
    content: 'Mmmmmm Donuts', 
  ],
]
```
You might have expected an array of JSON objects, instead an array of arrays is returned. The values are listed in an 
array then repeated with labels.

A final note about returning values using the ABIEncoderV2, you will get the following compiler warning
```
    Blog.sol:3:1: Warning: Experimental features are turned on. Do not use experimental features on live deployments.
    pragma experimental ABIEncoderV2;
    ^-------------------------------^
```

## Connect the website to out Ethereum Smart Contract 

## Why you shouldn't store data in Ethereum

(source)[https://itnext.io/build-a-simple-ethereum-interplanetary-file-system-ipfs-react-js-dapp-23ff4914ce4e]
## Whats IPFS

## Store data on IPFS

## Link IPFS data to Ethereum

## Add data from anyone

## Add permissions to the website

## Contracts can run out of gas

## Host website on IPFS

## Hacks and Security
 
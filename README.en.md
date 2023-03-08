# WIDE CAMP Mar "Introduction to BoF Blockchain Application Development"

The purpose of this BoF is to experience the development procedures of de-facto applications in the so-called Web3 industry and to discuss their challenges.
Simple NFT application development on the Etereum blockchain will be explained.

## Step.1 Preparation

### Install VScode/Live Preview (optional)
This hands-on assumes the use of Visual Studio Code.
We will also use the "Live Preview" plugin to start a simple local server for hosting HTML.
https://azure.microsoft.com/ja-jp/products/visual-studio-code

If you already have a development environment with similar functionality available, this step is not necessary.

### Installing the Metamask Wallet

MetaMask is a software wallet that can complement and manage Ethereum-based blockchain currencies and NFTs in one place, and is available in browser extension and mobile app versions ([from Wikipedia](https://ja.wikipedia.org/wiki/ MetaMask)).

Install MetaMask, a chrome extension, from the chrome web store.
After installation, please set your password and other initial settings.

https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja

! [](. /images/metamask.png)

https://docs.metamask.io/guide/getting-started.html#basic-considerations

### Getting Test ETH from faucet



Paste the address into the following spread sheet.

### Using API Key in infura.io

https://www.infura.io/


! [](. /images/infuraio.png)



## Step 2. Contruct operation in Remix IDE


Open [Remix IDE](https://remix.ethereum.org/).
! [](. /images/remix.png)

### Step2-1. Create a contract file
Open the CONTRACTS directory and click on the icon ①.

! [](. /images/2_1_create_contract.png)

Create a contract file by entering the file name "DelightToken".
Copy the contents of the file "DelightToken.sol" under the contracts directory of the handout into the created file and paste it into the contract file created in Remix.

! [](. /images/2_2_paste_contract.png)


### Step2-2. Compile the contract file
Click the icon in ① to display the "SOLIDITY COMPILER" screen.
Click the "Compile DelightToken.sol" button in ② to start compilation.
! [](. /images/2_3_compile_contract.png)

### Step2-2. Deploy the contract file
Deploy the contract to the test environment provided by Remix IDE.
Click the "Deploy" button in ①.

! [](. /images/2_4_deploy_contract.png)

When deployment is complete, you will see the following in the lower right corner of the screen.
! [](. /images/2_4_deploy_result.png)


### Step2-2. Operation of the contract
The deployed contracts will appear in the "Deployed Contracts" column in the lower left corner of the screen.

! [](. /images/2_5_play_contract.png)

### Step2-2. Operation of the contract (NFT issuance / information acquisition)

Paste the address into the player field of "newItem," enter any string in the tokenURI field, and click the "tramsact" button.
! [](. /images/2_7_issue_token.png)
Now the NFT has been issued.

Next, you can click on the button that allows you to retrieve the contract information, as shown below, and then click on the button that allows you to retrieve the contract and NFT information.
! [](. /images/2_8_call_contract.png)


### Step2-2. Operation of the contract (transfer of NFT)
Transfer the token.

Copy the address of another account from "ACCOUNT" in the upper left corner of the screen. (At this time, re-select the address to the original owner's address.)
! [](. /images/2_9_transfer_token.png)

Enter "the original owner's address" in the from field, the copied "address of the party to be transferred" in the to field, and "1" in the tokenId field, and execute transact.　
! [](. /images/2_6_select_account.png)


After the transfer is executed, try again to press the various buttons where the contract information can be obtained.
The information should have changed.


### Step 2 Deploy to the test net

Next, deploy the contract to the test net.
Change the ENVIRONMENT to "Inject Provider - MetaMask" and connect to the Metamask wallet.

! [](. /images/2_connect_metamask.png)


Click the "Deploy" button and click "Confirm" for the Metamask transaction. (Wait a moment for the transaction to be approved.)

! [](. /images/2_copy_contract_address.png)

Please note the contract address after deployment for later use.

! [](. /images/2_copy_contract_address.png)


## Step 3. Web application development

Edit "app.js" and operate the web application.

### Step3-0 Setup contract address, MetaMask password, and Contract ABI

Enter the contract address and MetaMask wallet password that you wrote down in Step2- in the fields below.


Next, set the Contract ABI.
Reopen the Remix IDE and go to the "FILE EXPLORER" page.
Under the CONTRACTS/artifacts/build-info folder, you will find a file named "DelightToken_metadata.json".
Copy the output.abi array data in the file.
! [](. /images/3_0_copy_abi.png)


Paste into the CONTRACT_ABI variable in "app.js".
! [](. /images/3_0_paste_abi.png)


Right click on index.html and click "Open With Live Server".
The web application will then start at [http://localhost:3000/index.html](http://localhost:3000/index.html).

! [](. /images/3_0_webapp.png)

### Step3-1. Connect to MetaMask Wallet

Press the "Connect Metamask" button and you will see the following message "You have connected with MetaMask.

! [](. /images/3_1_connect_metamask.png)

### Step3-2. Issue NFT


With "http://127.0.0.1:3000/filestorage/metadatas/metadata.json" entered in the input field, click the "Issue Token" button.
The file URI entered here will be set to the NFT as the tokenURI.

! [](. /images/3_2_issue_token.png)

The MetaMask confirmation screen will appear. Click the "Confirm" button. (In some cases, you may need to change Gas.)
! [](. /images/3_2_isuue_token_confirm.png)

### Step3-3. Confirm NFT information
Execute the contract's method to obtain contract and NFT information.
The following functions are implemented in the web application.

- Total Supply": Displays the total number of NFTs issued under the contract.
- Get Token Name": Displays the name of the Token set for the contract.
- Get Token Symbol: Displays the Symbol of the Token set in the contract.
- Get TokenURI": When a tokenId (e.g., 1) is entered, the TokenURI set in the NFT associated with that tokenId is displayed.
- Get Token Balace"; Enter the Wallet address, and the number of NFTs in this contract owned by that address will be displayed.


### Step 3-4 Confirm the transaction with Etherscan
Click the "Open Etherscan" button to open EtherScan, the Block Explorer.
Check the information about the transaction.

### Step3-5 Check the NFT metadata/image.

Open [http://localhost:3000/filestorage/metadatas/metadata.json](http://localhost:3000/filestorage/metadatas/metadata.json) to see the metadata. You will see the metadata.

! [](. /images/metadata.png)


Open [http://localhost:3000/filestorage/images/photo.png](http://localhost:3000/filestorage/images/photo.png) displayed in the metadata to see the image associated with the NFT. NFT and the image associated with the NFT will be displayed.

! [](. /images/complete.png)
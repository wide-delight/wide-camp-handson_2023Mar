const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "tokenURI",
        "type": "string"
      }
    ],
    "name": "newItem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSuply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];


//-------------  --------------
// const CONTRACT_ADDRESS = "< ここにContract Addressを入力 >"
const CONTRACT_ADDRESS = "0x00510229590adEf1Ee56b6b598b8fCC2502f1A20"
const API_KEY = "fa48f1f1a46b43079288aa3ddfa97067"
const INFURA_URL = `
https://goerli.infura.io/v3/${API_KEY}`;
//--------------------------


let web3
let contract;
let address;

window.addEventListener('load', async () => {
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  // const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));
  contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  })

const connectMetamask = document.querySelector('#connectMetamask');
const issueToken = document.querySelector('#issueToken');
const callTotalSupply = document.querySelector('#callTotalSupply');
const callName = document.querySelector('#callName');
const callTokenURI = document.querySelector('#callTokenURI');
const callBalanceOf = document.querySelector('#callBalanceOf');
const callSymbol = document.querySelector('#callSymbol');

connectMetamask.addEventListener('click', async () => {
  let accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  document.getElementById('metamask_state').innerHTML = "MetaMaskと接続できました";
  address = accounts[0]
});

issueToken.addEventListener('click', async () => {
  let filepath = document.getElementById("issue_token_input").value;
  console.log(address)
  let data = await contract.methods.newItem(address, filepath).encodeABI();
  let tx = await _genetateTx(address, data);
  console.log(tx)
  await _sendSignedTx(tx);
});

callTotalSupply.addEventListener('click', async () => {
  let data = await contract.methods.totalSuply().call();
  document.getElementById("token_total_supply").innerHTML = data;
})

callName.addEventListener('click', async () =>  {
  let data = await contract.methods.name().call();
  document.getElementById("token_name").innerHTML = data;
});

callTokenURI.addEventListener('click', async () =>  {
  let tokenId = document.getElementById("input_token_uri").value;
  let data = await contract.methods.tokenURI(tokenId).call();
  document.getElementById("token_uri").innerHTML = data;
});


callBalanceOf.addEventListener('click', async () => {
  let address = document.getElementById("input_token_balance").value;
  let data = await contract.methods.balanceOf(address).call();
  document.getElementById("token_balance").innerHTML = data;
});

callSymbol.addEventListener('click', async () => {
  let data = await contract.methods.symbol().call();
  console.log(data);
  document.getElementById("token_symbol").innerHTML = data;
});

async function _genetateTx(address, data){
  let gasPrice = await web3.eth.getGasPrice();
  const tx = {
    'from': address,
    'to': CONTRACT_ADDRESS,
    'nonce': "0x00",
    'gas': gasPrice+ 9000,
    'data': data
  };
  return tx;
}

async function _sendSignedTx(tx) {
  const signedTx = await ethereum.on('eth_sign', tx);
  await ethereum.request({
    method: 'eth_sendTransaction',
    params: [signedTx],
  });
}



function openEtherscan() {
  window.open("https://goerli.etherscan.io/address/"+CONTRACT_ADDRESS)
}

function changeEquip() {
  var tokenId = document.getElementById('text_tokenId').value;
  window.contract.setEquipmentTokenId.sendTransaction(tokenId, {from:web3.eth.accounts[0], gas:5500000}, (err, res) => {
      if(!err) {
          appendLog("装備を変更しました。反映まで少しお待ち下さい。");
      } else {
          console.log("setEquipmentTokenId:NG" + err);
      }
  });
}


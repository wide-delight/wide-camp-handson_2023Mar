const CONTRACT_ABI = "< ここにABIをペースト(配列データ) >";

//---------------------------
const CONTRACT_ADDRESS = "< ここにコントラクトアドレスをペースト >"
const METAMASK_PASSWORD = "< ここにMetamask Walletパスワードをペースト >";
const API_KEY = "fa48f1f1a46b43079288aa3ddfa97067"
const INFURA_URL = `https://sepolia.infura.io/v3/${API_KEY}`;
//--------------------------

let web3
let contract;
let address;

window.addEventListener('load', async () => {
  web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));
  contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
})

const connectMetamask = document.querySelector('#connectMetamask');
const issueToken = document.querySelector('#issueToken');
const callTotalSupply = document.querySelector('#callTotalSupply');
const callName = document.querySelector('#callName');
const callTokenURI = document.querySelector('#callTokenURI');
const callBalanceOf = document.querySelector('#callBalanceOf');
const callSymbol = document.querySelector('#callSymbol');
const openEtherscan = document.querySelector('#openEtherscan');

connectMetamask.addEventListener('click', async () => {
  let accounts = await ethereum.request({ method: 'eth_requestAccounts' })
  document.getElementById('metamask_state').innerHTML = "MetaMaskと接続できました";
  address = accounts[0]
});

issueToken.addEventListener('click', async () => {
  let filepath = document.getElementById("issue_token_input").value;
  let data = await contract.methods.newItem(address, filepath).encodeABI();
  await _sendSignedTx(address, data);
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
  document.getElementById("token_symbol").innerHTML = data;
});


async function _sendSignedTx(address, data) {
  const tx = {
    to: CONTRACT_ADDRESS,
    from: address,
    data: data,
  }
  await ethereum.request({
    method: 'eth_sendTransaction',
    params: [tx],
  });
}

openEtherscan.addEventListener("click", async () => {
  window.open("https://sepolia.etherscan.io/address/"+CONTRACT_ADDRESS)
})

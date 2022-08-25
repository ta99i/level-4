require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const URL_RPC = process.env.URL_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    rinkeby:{
      url: URL_RPC,
      accounts: [PRIVATE_KEY],
    }
  }
};
//0x46adB7ae915B71205Ee53a6D5b2349654ff5e16A

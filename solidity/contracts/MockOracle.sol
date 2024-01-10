// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MockOracle {

    // @dev Returns the latest price    
    function latestAnswer() external pure returns (uint256) {
        return 1000000000000000000;
    }
}

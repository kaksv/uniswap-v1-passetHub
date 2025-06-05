// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyToken is ERC20 {
    // Initialize contract with 1 million tokens minted to the creator of the contract
    constructor() ERC20("Kakooza", "KAKS") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

// 0x3d3212874efB3E770597716d72518c9649FBDAA6
// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract Greeter {
    string public message;

  
    event MessageUpdated(string newMessage);

    
    function setMessage(string memory _message) public {
        message = _message;
        emit MessageUpdated(_message);
    }

    
    function getMessage() public view returns (string memory) {
        return message;
    }
    
}
pragma solidity ^0.4.17;

contract Malicious{
    address private triggerNode;
    address private attackNode;
    address private victimNode;
    string private victimNodeIP;

    function Malicious() public{
        triggerNode = msg.sender;
    }

    modifier restrict() {
        require(msg.sender == triggerNode);
        _;
    }

    function setAttackNode(address node) public restrict{
        attackNode = node;
    }



}

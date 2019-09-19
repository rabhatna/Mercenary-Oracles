pragma solidity ^0.5.11;

contract ASC{
    address private triggerNode;
    address private attackAddr;
    string private attackEnode;
    string private victimEnode;

    constructor() public{
        triggerNode = msg.sender;
    }

    modifier setRestrict() {
        require(msg.sender == triggerNode);
        _;
    }

    modifier victimRestrict() {
        require(msg.sender == attackAddr);
        _;
    }

    function setAttackNode(string memory node, address addrNode) public setRestrict{
        attackEnode = node;
        attackAddr = addrNode;
    }

    function setVictimNode(string memory node) public setRestrict{
        victimEnode = node;
    }

    function getVictim() public victimRestrict view returns(string memory) {
        return victimEnode;
    }

}

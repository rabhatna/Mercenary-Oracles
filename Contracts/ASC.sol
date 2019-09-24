pragma solidity >=0.4.21 <0.6.0;

contract ASC{
   string private victim;
   mapping (address => bool) private oracles;
   event Attack(
     string msg
   );

   constructor() public{
     oracles[0x1566522c558E62B32A39E4F4F7201AA3EC7ebA75]=true;
     oracles[0x666974be90E3c53A85a4B22C1608E7E2c98c09Db]=true;
     oracles[0x6Dee1DF28B8B5827072e264EA77ADbff312C05C8]=true;
   }

   modifier oraclesCheck() {
     require(oracles[msg.sender] == true);
     _;
   }

   function set(string _victim) public{
      victim = _victim;
      emit Attack(_victim);
   }

   function get() public view oraclesCheck returns(string){
      return victim;
   }

}

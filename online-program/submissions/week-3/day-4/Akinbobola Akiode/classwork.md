Summary of yesterday's lesson

Resources: 
1. https://www.geeksforgeeks.org/solidity/solidity-types/
2. https://www.freecodecamp.org/news/learn-solidity-handbook/

We spoke about solidity types which are classed into two:

- Value Types

*  Boolean
*  Integers (signed and unsigned)
*  Fixed point numbers
*  Address
*  Bytes
*  nums

- Reference types

*  Arrays
*  Strings
*  Struct 
*  Mapping

I also learnt about contracts and immutable functions in solidity.
Where contract has to be defined in the code while immutable can be defined in constructors.

there was also fucntion modifiers:

I learnt uint has a default valuee of 256 so if not specified it auto-assigns that value.

I learnt about Variable Scopes in Smart Contracts.

- State  Variable- is not a function scope and it stores permanent data in a smart contract.

- Local Variable- holds information for a short period of time and this doesn't store it on the blockchain.

- Global variable- Used an example like msg.sender yesterday as they are functions made available by Solidity and we don't need to specifically create or import them from anywhere.

We also discusseed visibility specifiers: public, private, Internal, external.

And how solidity supports implicit constructors.

function assert- uses up gas, while revert- saves gas (also allows custom error).

I also learnt since strings uses gas we can can bytes if its betweeen 1-32.
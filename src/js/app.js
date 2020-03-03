import Validator from './Validator';

const valid = new Validator();

console.log(`Name Zombie: validation of the name - ${valid.validateUsername('Zombie')}`);

console.log(`Name __Zombie: validation of the name - ${valid.validateUsername('__Zombie')}`);

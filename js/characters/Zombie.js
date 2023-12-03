import Character from './Character';

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 10;
    this.setAttack(40);
  }
}

export default Zombie;

import Character from './Character';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 25;
    this.setAttack(25);
  }
}

export default Bowman;

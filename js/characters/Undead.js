import Character from './Character';

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.defence = 25;
    this.setAttack(25);
  }
}

export default Undead;

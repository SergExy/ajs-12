class Character {
  constructor(name, type) {
    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Введите корректное значение от 2 до 10 символов');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.stoned = false;
  }

  setStoned(stoned) {
    const validStonedTypes = ['Magician', 'Daemon'];

    if (validStonedTypes.includes(this.type)) {
      this.stoned = stoned;
    }
  }

  getStoned() {
    return this.stoned;
  }

  setAttack(value) {
    this.attack = value;
  }

  getAttack(distance) {
    let { attack } = this;

    const validStonedTypes = ['Magician', 'Daemon'];
    if (validStonedTypes.includes(this.type)) {
      attack *= (1 - ((distance - 1) / 10));

      if (this.stoned) {
        attack -= Math.log2(distance) * 5;
        attack = Math.round(attack);
      }
    }

    return attack < 0 ? 0 : attack;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('нельзя повысить левел умершего');
    }

    this.health = 100;
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;

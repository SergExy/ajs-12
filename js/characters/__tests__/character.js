import Character from '../Character';

test.each([
  ['name', 'Zombie', true, ''],
  [123, 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Character(name, type)).not.toThrow();
  } else {
    expect(() => new Character(name, type)).toThrow(Error);
    expect(() => new Character(name, type)).toThrow(errorMessage);
  }
});

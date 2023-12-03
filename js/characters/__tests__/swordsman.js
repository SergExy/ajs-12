import Swordsman from '../Swordsman';

test.each([
  ['name', 'Swordsman', true, ''],
  [123, 'Swordsman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Swordsman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Swordsman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Swordsman(name, type)).not.toThrow();
  } else {
    expect(() => new Swordsman(name, type)).toThrow(Error);
    expect(() => new Swordsman(name, type)).toThrow(errorMessage);
  }
});

import Zombie from '../Zombie';

test.each([
  ['name', 'Zombie', true, ''],
  [123, 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Zombie', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Zombie(name, type)).not.toThrow();
  } else {
    expect(() => new Zombie(name, type)).toThrow(Error);
    expect(() => new Zombie(name, type)).toThrow(errorMessage);
  }
});

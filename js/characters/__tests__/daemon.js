import Daemon from '../Daemon';

test.each([
  ['name', 'Daemon', true, ''],
  [123, 'Daemon', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Daemon', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Daemon', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Daemon(name, type)).not.toThrow();
  } else {
    expect(() => new Daemon(name, type)).toThrow(Error);
    expect(() => new Daemon(name, type)).toThrow(errorMessage);
  }
});

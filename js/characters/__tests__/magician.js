import Magician from '../Magician';

test.each([
  ['name', 'Magician', true, ''],
  [123, 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Magician', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Magician(name, type)).not.toThrow();
  } else {
    expect(() => new Magician(name, type)).toThrow(Error);
    expect(() => new Magician(name, type)).toThrow(errorMessage);
  }
});

test.each([
  ['name', 'Magician', true, true],
  ['name', 'Magician', false, false],
])('testin set/get stoned', (name, type, stoned, expected) => {
  const magic = new Magician(name, type);
  magic.setStoned(stoned);
  expect(magic.getStoned()).toBe(expected);
});

test.each([
  ['name', 'Magician', 6, false, 5],
  ['name', 'Magician', 20, false, 0],
  ['name', 'Magician', 2, true, 4],
])('test set/get attack with or without stoned', (name, type, distance, stoned, expected) => {
  const magic = new Magician(name, type);
  magic.setStoned(stoned);
  expect(magic.getAttack(distance)).toBe(expected);
});

import Bowman from '../Bowman';

test.each([
  ['name', 'Bowman', true, ''],
  [123, 'Bowman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Bowman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Bowman', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Bowman(name, type)).not.toThrow();
  } else {
    expect(() => new Bowman(name, type)).toThrow(Error);
    expect(() => new Bowman(name, type)).toThrow(errorMessage);
  }
});

test('test levelUp throw error if health <= 0', () => {
  const bowman = new Bowman('name', 'Bowman');
  bowman.health = 0;

  expect(() => bowman.levelUp()).toThrow(Error);
  expect(() => bowman.levelUp()).toThrow('нельзя повысить левел умершего');
});

test('test levelUp props', () => {
  const bowman = new Bowman('name', 'Bowman');
  bowman.health = 50;
  bowman.levelUp();

  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);
});

test.each([
  ['name', 'Bowman', 100, 40, 70],
  ['name', 'Bowman', -10, 10, -10],
])('test damage', (name, type, health, points, afterHealth) => {
  const bowman = new Bowman(name, type);
  bowman.health = health;
  bowman.damage(points);
  expect(bowman.health).toBe(afterHealth);
});

test.each([
  ['name', 'Bowman', true, false],
  ['name', 'Bowman', false, false],
])('testin set/get stoned', (name, type, stoned, expected) => {
  const magic = new Bowman(name, type);
  magic.setStoned(stoned);
  expect(magic.getStoned()).toBe(expected);
});

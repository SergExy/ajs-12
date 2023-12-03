import Undead from '../Undead';

test.each([
  ['name', 'Undead', true, ''],
  [123, 'Undead', false, 'Введите корректное значение от 2 до 10 символов'],
  ['n', 'Undead', false, 'Введите корректное значение от 2 до 10 символов'],
  ['namenamename', 'Undead', false, 'Введите корректное значение от 2 до 10 символов'],
  ['name', 'other', false, 'Введите один из следующих классов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie'],
])('testing character throw error', (name, type, isValid, errorMessage) => {
  if (isValid) {
    expect(() => new Undead(name, type)).not.toThrow();
  } else {
    expect(() => new Undead(name, type)).toThrow(Error);
    expect(() => new Undead(name, type)).toThrow(errorMessage);
  }
});

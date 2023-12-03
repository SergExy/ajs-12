import Bowman from '../../characters/Bowman';
import Daemon from '../../characters/Daemon';
import Magician from '../../characters/Magician';
import Team from '../Team';

const bowman = new Bowman('player1', 'Bowman');
const daemon = new Daemon('player1', 'Daemon');
const magician = new Magician('player1', 'Magician');
const team = new Team(bowman, daemon, magician);

test('test iterator from Team', () => {
  const iterator = team.iterator();
  const expected = [bowman, daemon, magician];
  const result = [];

  result.push(iterator.next().value);
  result.push(iterator.next().value);
  result.push(iterator.next().value);

  expect(result).toEqual(expected);
});

test('test undefined iterator from Team', () => {
  const iterator = team.iterator();
  const expected = { value: undefined, done: true };

  iterator.next();
  iterator.next();
  iterator.next();
  const result = iterator.next();

  expect(result).toEqual(expected);
});

test('test generate from Team', () => {
  const expected = [bowman, daemon, magician];
  const result = [];

  for (const item of team) {
    result.push(item);
  }

  expect(result).toEqual(expected);
});

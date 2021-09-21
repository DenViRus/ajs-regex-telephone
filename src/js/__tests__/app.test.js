import { getTelephone } from '../app.js';

test('check telephone 1', () => {
  const received = getTelephone('8 (927) 000-00-00');
  const expected = '+79270000000';

  expect(received).toBe(expected);
});

test('check telephone 2', () => {
  const received = getTelephone(89272633921);
  const expected = '+79272633921';

  expect(received).toBe(expected);
});

test('check telephone 3', () => {
  const received = getTelephone('+7 960 000 00 00');
  const expected = '+79600000000';

  expect(received).toBe(expected);
});

test('check telephone 4', () => {
  const received = getTelephone('8- 960-000-00-00');
  const expected = '+79600000000';

  expect(received).toBe(expected);
});

test('check telephone 5', () => {
  const received = getTelephone('+86 000 000 0000');
  const expected = '+860000000000';

  expect(received).toBe(expected);
});

test('check telephone 6', () => {
  const received = getTelephone('+(445) 820 000 0000');
  const expected = '+4458200000000';

  expect(received).toBe(expected);
});

test('check telephone 7', () => {
  const received = getTelephone('29(351)-000-999');
  const expected = '+29351000999';

  expect(received).toBe(expected);
});

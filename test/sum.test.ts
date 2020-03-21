import twoSum from '../src/sum'

test('7 will return [0, 1]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 7);
  expect(drink).toHaveReturnedWith([0, 1]);
});

test('8 will return [0, 2]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 8);
  expect(drink).toHaveReturnedWith([0, 2]);
});

test('9 will return [0, 3]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 9);
  expect(drink).toHaveReturnedWith([0, 3]);
});

test('11 will return [1, 2]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 11);
  expect(drink).toHaveReturnedWith([1, 2]);
});

test('12 will return [1, 3]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 12);
  expect(drink).toHaveReturnedWith([1, 3]);
});

test('13 will return [2, 3]', () => {
  const drink = jest.fn(twoSum);

  drink([2, 5, 6, 7], 13);
  expect(drink).toHaveReturnedWith([2, 3]);
});
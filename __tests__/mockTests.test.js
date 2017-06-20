test('mock function', () => {
  const myMock = jest.fn();
  myMock();

  expect(myMock).toHaveBeenCalled();
});

test('mock function 2', () => {
  const myMock = jest.fn();

  myMock('hi');
  myMock('there!');

  expect(myMock).toHaveBeenCalledTimes(2);
  expect(myMock.mock.calls[0][0]).toBe('hi');

  console.log(myMock.mock.calls);
});

test('mock function 3', () => {
  const mockMultiplyFive = jest.fn(number => number * 5);

  const five = mockMultiplyFive(1);
  const ten = mockMultiplyFive(2);

  expect(mockMultiplyFive.mock.calls[1][0]).toBe(2);
  expect(ten).toBe(10);
});

test('mock module', () => {
  jest.mock('../code/banana', () => {
    return jest.fn(() => '🍌');
  });

  const banana = require('../code/banana'); // banana will be explicitly mocked.

  expect(banana()).toBe('🍌'); // will return '🍌' because the function is auto-mocked.
});

// __tests__/test.js

// Talk about mocking from node_modules.

test('mock module from __mocks__', () => {
  // Show failing tests using dates

  // expect(testDate()).toBe(Date.now());
  jest.mock('../code/dateNow', () => {
    return jest.fn(() => '🍌');
  });

  const testDate = require('../code/dateNow');

  expect(testDate()).toBe('F4K371M3574MP');
});

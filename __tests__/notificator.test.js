'use strict';

import Notificator from '../code/notificator';

jest.useFakeTimers();

afterEach(() => setInterval.mockClear());

test('creates an interval waits 1 second', () => {
  Notificator();

  expect(setInterval.mock.calls.length).toBe(1);
  expect(setInterval.mock.calls[0][1]).toBe(1000);
});

test('creates an interval waits 5 second', () => {
  const mockCallback = jest.fn();
  Notificator(mockCallback, 5);

  expect(setInterval.mock.calls.length).toBe(1);
  expect(setInterval.mock.calls[0][1]).toBe(5000);
});

test('callback is called after timeout', () => {
  const mockCallback = jest.fn();
  Notificator(mockCallback, 5);

  jest.runOnlyPendingTimers(); // if use runAll enters a loop
  expect(mockCallback).toHaveBeenCalledTimes(1);
});

test('callback is called 2 times after timeout', () => {
  const mockCallback = jest.fn();
  Notificator(mockCallback, 5);

  jest.runTimersToTime(10000); //ms to run
  expect(mockCallback).toHaveBeenCalledTimes(2);
});

// All Jest tests run through node using a fake DOM implementation. We don’t need to start up a browser so tests are faster and less flaky

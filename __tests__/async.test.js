import getLanguageByCountry from '../code/async';

test("should return the country's language", () => {
  getLanguageByCountry('TV').then(data => {
    expect(data).toBe('Tuvaluan');
  });
});

test('should reject when country is not available', () => {
  getLanguageByCountry('JP').catch(data => {
    expect(data).toBe('😶');
  });
});

// Jest 20.

test.skip('test a promise', () => {
  expect(getLanguageByCountry('TV')).resolves.toBe('Tuvaluan');
});

test.skip('async', async () => {
  await expect(getLanguageByCountry('TV')).resolves.toBe('peanut butter');
});

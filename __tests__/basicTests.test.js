test('adding 1 and 1 should return 2', () => {
  expect(1 + 1).toBe(2);
});

test('adding an item to an array', () => {
  const myArray = ['Spring', '☀️'];

  myArray.push('🌷');

  expect(myArray.length).not.toBeGreaterThanOrEqual(4);
  expect(myArray).toContain('🌷');
});

test('object', () => {
  const states = {
    RI: 'Rhode Island',
    MA: 'Massachusetts'
  };

  states.CT = 'Connecticut';

  expect(states).toEqual({
    CT: 'Connecticut',
    MA: 'Massachusetts',
    RI: 'Rhode Island'
  });
});

test('two add two is four', () => {
  expect(2+2).toBe(3);
})

function getRandom() {
  return Math.random();
}

test('to be greater', () => {
  expect(getRandom()).toBeGreaterThan(0.9);
})
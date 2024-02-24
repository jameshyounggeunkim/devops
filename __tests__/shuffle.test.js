const shuffle = require("../src/shuffle");
const testArray = ['test1', 'test2', 'test3'];

describe("shuffle should...", () => {
  // CODE HERE
  test('testArray has test1 in it', () => {
    const result = shuffle(testArray);
    expect(result).toContain('test1');
  });

  test('shuffle returns an array of the same length as the argument sent in', () => {
    const result = shuffle(testArray);
    expect(result.length).toBe(3);
  });
});

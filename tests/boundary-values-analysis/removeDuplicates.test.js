const removeDuplicates = require('../../main');

test('Validate valid scenario: nums.length between 1 and 30.000 / nums[i] between -100 and 100', () => {
    
    expect(removeDuplicates(1, 2)).toBe(3);
});

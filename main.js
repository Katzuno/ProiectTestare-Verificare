const removeDuplicates = function(nums) {
    let freq = {};
    let uniqueNums = [];
    for (let num of nums)   {
        if (freq[num])  {
            freq[num]++;
        } else {
            freq[num] = 1;
            uniqueNums.push(num);
        }
    }

    for (let index = 0; index < nums.length; index++)   {
        if (uniqueNums.length > index)  {
            nums[index] = uniqueNums[index];
        } else {
            break;
        }
    }

    return uniqueNums.length;
};

module.exports = removeDuplicates;

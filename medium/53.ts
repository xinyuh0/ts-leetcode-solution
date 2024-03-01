function maxSubArray(nums: number[]): number {
    // dp[i]: max value of subarray end at index i
    let dp: number[] = new Array(nums.length);

    dp[0] = nums[0];

    let max = dp[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);

        max = Math.max(max, dp[i]);
    }

    return max;
};
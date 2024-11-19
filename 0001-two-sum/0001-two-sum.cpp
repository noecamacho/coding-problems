#include <iostream>
#include <unordered_map>

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
       // Create an unordered_map to store numbers and their indices
        std::unordered_map<int, int> numMap;

        // Iterate through the array
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i]; // Calculate complement

            // Check if complement exists in the map
            if (numMap.find(complement) != numMap.end()) {
                // If found, return the indices of the two numbers
                return {numMap[complement], i};
            }

            // Store the current number with its index
            numMap[nums[i]] = i;
        }

        // Return an empty vector if no solution is found (not expected per problem statement)
        return {};
    }
};
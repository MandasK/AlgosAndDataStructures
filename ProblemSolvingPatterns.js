//Frequency Counters

//This pattern used objects or sets to collect values/frequencies of values
//This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

//ex write a function called same, whch accepts two arrays. the function should return true 
//if every value in the array has it's corresponding value squared in the second array.
// the frequency values must be the same

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    for(let key in freqCounter1) {
        if(!(key ** 2 in freqCounter2)) {
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false
        }
    }
    return true
}

//given two strings write a function to determine if the second string is an angram of the first
//An anagram is a word or phrase or name formed by rearranging the letts of another such as cinema formed from iceman.

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    //checks to make sure strings are same length if false cannot be anagram
    if(str1.length !== str2.length) {
        return false
    }
    let charMap1 = {}
    let charMap2 = {}
    for(let char of str1) {
        charMap1[char] = charMap1[char] + 1 || 1
    }
    for(let char of str2) {
        charMap2[char] = charMap2[char] + 1 || 1
    }
    for(let char in charMap1) {
        if(charMap1[char] !== charMap2[char]) {
            return false
        }
    }
    return true
  }

  //Multiple Pointers
  //Creating pointers(variable) or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition
  //very efficient for solving problems with minimal space complexity as well
  
  //write a function called sumZero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return
  // an array that includes both values that sum to zero or undefined if the pair does not exist
  sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
  sumZero([-2, 0, 1, 3]) // undefined
  sumZero([1, 2, 3]) // undefined

  function sumZero(arr) {
      let left = 0;
      let right = arr.length -1;
      while(left < right) {
          let sum = arr[left] + arr[right];
          if(sum === 0) {
              return [arr[left], arr[right]];
          } else if(sum >0) {
              right--;
          } else {
              left++
          }
      }
  }

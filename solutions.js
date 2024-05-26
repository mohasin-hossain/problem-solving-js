// 1. Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array.

/*
Test Cases:
myFunction(10)
Expected
[1,0]
myFunction(931)
Expected
[9,3,1]
myFunction(193278)
Expected
[1,9,3,2,7,8]
*/

// First Approach
function myFunction(a) {
  const str_num = String(a);
  let result = [];
  for (let i = 0; i < str_num.length; i++) {
    result.push(Number(str_num[i]));
  }
  return result;
}

// Second Approach
function myFunction(a) {
  const string = a + "";
  const strings = string.split("");
  return strings.map((item) => Number(item));
}

// 2. Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'

/*
myFunction([1,2,3,4,5],3)
Expected
3
myFunction([10,9,8,7,6],5)
Expected
6
myFunction([7,2,1,6,3],1)
Expected
7
*/

function myFunction(a, n) {
  return a[n - 1];
}

// 3. Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result

/*

myFunction([1,2,3,4])
Expected
[4]
myFunction([5,4,3,2,1,0])
Expected
[2,1,0]
myFunction([99,1,1])
Expected
[]

*/

function myFunction(a) {
  return a.slice(3);
}

// 4. Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

/*

myFunction([1,2,3,4])
Expected
[2,3,4]
myFunction([5,4,3,2,1,0])
Expected
[2,1,0]
myFunction([99,1,1])
Expected
[99,1,1]

*/

function myFunction(a) {
  return a.slice(-3);
}

// 5. Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

/*
myFunction([1,2,3,4])
Expected
[1,2,3]
myFunction([5,4,3,2,1,0])
Expected
[5,4,3]
myFunction([99,1,1])
Expected
[99,1,1]
 */

function myFunction(a) {
  return a.slice(0, 3);
}

// 6. Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

/*
myFunction([1, 2, 3, 4, 5], 2)
Expected
[ 4, 5 ]
myFunction([1, 2, 3], 6)
Expected
[ 1, 2, 3 ]
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
Expected
[ 6, 7, 8 ]
*/

function myFunction(a, n) {
  return a.slice(-n);
}

// 7. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

/*
myFunction([1,2,3], 2)
Expected
[1, 3]
myFunction([1,2,'2'], '2')
Expected
[1, 2]
myFunction([false,'2',1], false)
Expected
['2', 1]
myFunction([1,2,'2',1], 1)
Expected
[2, '2']
*/

function myFunction(a, b) {
  return a.filter((item) => item !== b);
}

// 8. Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

/*
myFunction([1,-2,2,-4])
Expected
2
myFunction([0,9,1])
Expected
0
myFunction([4,-3,2,1,0])
Expected
1
*/

// first approach

function myFunction(a) {
  let negative_counts = 0;
  for (let num of a) {
    if (num < 0) {
      negative_counts++;
    }
  }
  return negative_counts;
}

// second approach

function myFunction(a) {
  const negative_counts = a.reduce((total, currentValue) => {
    if (currentValue < 0) {
      total++;
    }
    return total;
  }, 0);
  return negative_counts;
}

// third approach

function myFunction(a) {
  return a.filter((el) => el < 0).length;
}

// 9. Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

function myFunction(arr) {
  return arr.sort();
}

// 10. Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

/*
myFunction([1,3,2])
Expected
[3,2,1]
myFunction([4,2,3,1])
Expected
[4,3,2,1]
*/

function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}

// 11. Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

/*
myFunction([10,100,40])
Expected
150
myFunction([10,100,1000,1])
Expected
1111
myFunction([-50,0,50,200])
Expected
200
*/

// first appraoch
function myFunction(a) {
  let total = 0;
  for (let el of a) {
    total += el;
  }
  return total;
}

//second appraoch
function myFunction(a) {
  return a.reduce((total, currentValue) => (total += currentValue), 0);
}

// 12. Write a function that takes an array of numbers as argument. It should return the average of the numbers.

/*
myFunction([10,100,40])
Expected
50
myFunction([10,100,1000])
Expected
370
myFunction([-50,0,50,200])
Expected
50
*/

function myFunction(arr) {
  return (
    arr.reduce((total, currentValue) => (total += currentValue), 0) / arr.length
  );
}

// 13. Write a function that takes an array of strings as argument. Return the longest string.

/*
myFunction(['help', 'me'])
Expected
'help'
myFunction(['I', 'need', 'candy'])
Expected
'candy'
*/

// first approach
function myFunction(arr) {
  let longest = "";
  for (let el of arr) {
    if (el.length > longest.length) {
      longest = el;
    }
  }
  return longest;
}

// second approach
function myFunction(arr) {
  return arr.reduce((a, b) => (a.length < b.length ? b : a));
}

// 14. Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

/*
myFunction([true, true, true, true])
Expected
true 
myFunction(['test', 'test', 'test'])
Expected
true 
myFunction([1,1,1,2])
Expected
false 
myFunction(['10',10,10,10])
Expected
false
*/

// first approach

function myFunction(arr) {
  let result = arr[0];
  for (let el of arr) {
    if (el === arr[0]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

// secoond approach with set

/*

Creating a Set:

Inside the function, it creates a new Set object using new Set(arr).
A Set is a collection of unique values. When you create a Set from an array, it automatically removes duplicate elements, leaving only the distinct values.
Checking Set Size:

The function then compares the size of the resulting Set with 1.
If all elements in the original array were equal, the Set would only contain one unique value.
Therefore, the size of the Set would be 1 in that case.
Returning the Result:

The function returns a boolean value based on the size comparison:
If the size of the Set is equal to 1 (all elements were equal), it returns true.
Otherwise, it returns false (at least some elements were different).
Why This Works:

Sets don't allow duplicate values.
If all elements in the array are equal, the Set will only contain one unique element (the common value).
By comparing the size of the Set with 1, you can effectively determine if all elements in the original array were equal.

*/

function myFunction(arr) {
  return new Set(arr).size === 1;
}

// 15. Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

/*
myFunction([1, 2, 3], [4, 5, 6])
Expected
[1, 2, 3, 4, 5, 6]
myFunction(['a', 'b', 'c'], [4, 5, 6])
Expected
['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ['a', 'b'])
Expected
[true, true, 1, 2, 'a', 'b']
*/

// first approach
function myFunction(...arrays) {
  let allElements = [];
  for (let arr of arrays) {
    allElements.push(...arr);
  }
  return allElements;
}

// second approach

/*
Explanation of flat():

The flat() method is a built-in function in JavaScript that is used to flatten nested arrays.
It takes an optional depth argument as a parameter.
Without a depth argument (used here): It attempts to flatten any level of nesting within the array.
With a depth argument: It flattens up to the specified depth level.
*/

function myFunction(...arrays) {
  return arrays.flat();
}

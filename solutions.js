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

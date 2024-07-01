// Problem Solving - JavaScript
//////////////////////////////

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

// 16. Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

/*
myFunction([{a:1,b:2},{a:5,b:4}])
Expected
[{a:1,b:2},{a:5,b:4}]
myFunction([{a:2,b:10},{a:5,b:4}])
Expected
[{a:5,b:4},{a:2,b:10}]
myFunction([{a:1,b:7},{a:2,b:1}])
Expected
[{a:2,b:1},{a:1,b:7}]
*/

function myFunction(arr) {
  return arr.sort((a, b) => a.b - b.b);
}

// 17. Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

/*
myFunction([1, 2, 3], [3, 4, 5])
Expected
[ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Expected
[ -11, -10, 5, 22, 41,  42, 333]
*/

// first Approach
function myFunction(a, b) {
  const mergedArr = a.concat(b);
  const uniqueSet = new Set(mergedArr);
  const uniqueArr = Array.from(uniqueSet);
  return uniqueArr.sort((x, y) => x - y);
}

// second appraoch
function myFunction(a, b) {
  const mergedArr = [...a, ...b];
  const uniqueSet = new Set(mergedArr);
  const uniqueArr = [...uniqueSet];
  return uniqueArr.sort((x, y) => x - y);
}

// third - simplified way
function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}

// 18. Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

/*
myFunction({ continent: 'Asia', country: 'Japan' })
Expected
'Japan'
myFunction({ country: 'Sweden', continent: 'Europe' })
Expected
'Sweden'
*/

function myFunction(obj) {
  return obj.country; // obj["country"]
}

// 19. Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'.

/*
myFunction({  one: 1,  'prop-2': 2})
Expected
2
myFunction({  'prop-2': 'two',  prop: 'test'})
Expected
'two'
*/

function myFunction(obj) {
  return obj["prop-2"];
}

// 20. Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

/*
myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
Expected
'Asia'
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
Expected
'Sweden'
*/

function myFunction(obj, key) {
  return obj[key];
}

// 21. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.

/*
myFunction({a:1,b:2,c:3},'b')
Expected
true
myFunction({x:'a',y:'b',z:'c'},'a')
Expected
false
myFunction({x:'a',y:'b',z:undefined},'z')
Expected
true
*/

// first approach
function myFunction(a, b) {
  return Object.keys(a).includes(b);
}

// second appraoch
function myFunction(a, b) {
  return b in a;
}

// 22. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

/*
myFunction({a:1,b:2,c:3},'b')
Expected
true
myFunction({x:'a',y:null,z:'c'},'y')
Expected
false
myFunction({x:'a',b:'b',z:undefined},'z')
Expected
false
*/

// first appraoch
function myFunction(a, b) {
  return b in a && a[b] ? true : false;
}

// second approach

function myFunction(a, b) {
  return a[b] ? true : false;
}

// third appraoch
function myFunction(a, b) {
  return Boolean(a[b]);
}

// 23. Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

/*
myFunction('a')
Expected
{key:'a'}
myFunction('z')
Expected
{key:'z'}
myFunction('b')
Expected
{key:'b'}
*/

function myFunction(a) {
  return { key: a };
}

// 24. Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

/*
myFunction('a','b')
Expected
{a:'b'}
myFunction('z','x')
Expected
{z:'x'}
myFunction('b','w')
Expected
{b:'w'}
*/

function myFunction(a, b) {
  return { [a]: b }; // // Use bracket notation for dynamic property name
}

// 24. Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

/*
myFunction(['a','b','c'],[1,2,3])
Expected
{a:1,b:2,c:3}
myFunction(['w','x','y','z'],[10,9,5,2])
Expected
{w:10,x:9,y:5,z:2}
myFunction([1,'b'],['a',2])
Expected
{1:'a',b:2}
*/

// first appraoch
function myFunction(a, b) {
  let obj = {};
  a.forEach((item, index) => {
    obj[item] = b[index];
  });
  return obj;
}

// second approach
function myFunction(a, b) {
  return a.reduce((acc, cv, i) => ({ ...acc, [cv]: b[i] }), {}); // acc -> Accumulator/Total, cv -> currentValue, i -> index
}

// 25. Write a function that takes an object (a) as argument. Return an array with all object keys.

/*
myFunction({a:1,b:2,c:3})
Expected
['a','b','c']
myFunction({j:9,i:2,x:3,z:4})
Expected
['j','i','x','z']
myFunction({w:15,x:22,y:13})
Expected
['w','x','y']
*/

function myFunction(a) {
  return Object.keys(a);
}

// 26. Write a function that takes an object (a) as argument. Return the sum of all object values.

/*
myFunction({a:1,b:2,c:3})
Expected
6
myFunction({j:9,i:2,x:3,z:4})
Expected
18
myFunction({w:15,x:22,y:13})
Expected
50
*/

function myFunction(a) {
  return Object.values(a).reduce((total, cv) => (cv += total), 0);
}

// 27. Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'

/*
myFunction({ a: 1, b: 7, c: 3 })
Expected
{ a: 1, c: 3 }
myFunction({ b: 0, a: 7, d: 8 })
Expected
{ a: 7, d: 8 }
myFunction({ e: 6, f: 4, b: 5, a: 3 })
Expected
{ e: 6, f: 4, a: 3 }
*/

// first appraoch
function myFunction(obj) {
  let newObj = {};
  for (let key in obj) {
    if (key !== "b") {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

// second approach

/*

Object Destructuring:

It uses object destructuring to unpack the properties of the obj argument.
The b property is explicitly captured and discarded.
The remaining properties are captured using the rest syntax (...rest). This creates a new object (rest) containing all properties except for b.

Return the New Object:

The function returns the rest object, which effectively excludes the 'b' property.
*/

function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

// 28. Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

/*
myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
Expected
{ a: 1, b: 2, c: 3, e: 5, d: 4}
myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
Expected
{ a: 5, b: 4, c: 3, e: 2, d: 1}
*/

// first appraoch
function myFunction(x, y) {
  const { c, b: d, e } = y;
  return { ...x, c, d, e };
}

// second appraoch
function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}

// 29. Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

/*
myFunction({a:1,b:2,c:3},3)
Expected
{a:3,b:6,c:9}
myFunction({j:9,i:2,x:3,z:4},10)
Expected
{j:90,i:20,x:30,z:40}
myFunction({w:15,x:22,y:13},6)
Expected
{w:90,x:132,y:78}
*/

// first appraoch
function myFunction(a, b) {
  const modifiedObj = {};
  for (let key in a) {
    modifiedObj[key] = a[key] * b;
  }

  return modifiedObj;
}

// second appraoch
/*

Understanding the Code:

Object.entries(a):

This line converts the object a into an array of key-value pairs.
Imagine a is { a: 1, b: 2, c: 3 }. Object.entries(a) would become [["a", 1], ["b", 2], ["c", 3]].
Each element in this array is a sub-array with two elements:
The first element is the property key (string, e.g., "a").
The second element is the property value (number, e.g., 1).
reduce((acc, [key, val]) => {...}, {}):

This part uses the reduce method to iterate through the array of key-value pairs created by Object.entries(a).
reduce takes two arguments:
acc: Accumulator (starts as an empty object {}). This will hold the partially built new object with multiplied values.
[key, val]: An array representing the current key-value pair being processed during the loop.
Array Destructuring in reduce:

Inside the reduce function, you're using array destructuring with [key, val]. This unpacks the current key-value pair from the array into separate variables:
key: Holds the current property name (e.g., "a", "b", or "c").
val: Holds the current property value (e.g., 1, 2, or 3).
Creating the New Object:

Within the reduce callback:
{...acc, [key]: val * b}: This line uses the spread operator (...acc) to create a new object based on the current accumulator (acc). It essentially copies the properties from acc into the new object.
[key]: val * b: Here, the square brackets ([]) are used with key to create a dynamic property name for the new object. The current key value (e.g., "a") becomes the property name.
val * b: The value (val) is multiplied by the number b.
The entire expression {...acc, [key]: val * b} creates a new object with the updated property (using key and the multiplied value).
Returning the Result:

The reduce method returns the final accumulated object. This object contains all the original keys from a with their values multiplied by b.
*/

function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

// 30. Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.

/*
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Expected
false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
true
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Expected
false
*/

function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

// 31. Write a function that takes a value as argument. Return the type of the value.

/*
myFunction(1)
Expected
'number'
myFunction(false)
Expected
'boolean'
myFunction({})
Expected
'object'
myFunction(null)
Expected
'object'
*/

function myFunction(a) {
  return typeof a;
}

// 32. Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

/*
myFunction('abcd',1)
Expected
'a'
myFunction('zyxbwpl',5)
Expected
'w'
myFunction('gfedcba',3)
Expected
'e'
*/

function myFunction(a, n) {
  return a[n - 1];
}

// 33. Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

/*

myFunction('m', 'how many times does the character occur in this sentence?')
Expected
2
myFunction('h', 'how many times does the character occur in this sentence?')
Expected
4
myFunction('?', 'how many times does the character occur in this sentence?')
Expected
1
myFunction('z', 'how many times does the character occur in this sentence?')
Expected
0
*/

function myFunction(a, b) {
  return b.split(a).length - 1;
}


// 34 Write a function that takes an object (a) as argument. Return the sum of all object values.

/*
myFunction({a:1,b:2,c:3})
Expected
6
myFunction({j:9,i:2,x:3,z:4})
Expected
18
myFunction({w:15,x:22,y:13})
Expected
50
*/

function myFunction(a) {
  return Object.values(a).reduce((total, cv) => (cv += total), 0);
}

// 35. Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

/*
myFunction([{a:1,b:2},{a:5,b:4}])
Expected
[{a:1,b:2},{a:5,b:4}]
myFunction([{a:2,b:10},{a:5,b:4}])
Expected
[{a:5,b:4},{a:2,b:10}]
myFunction([{a:1,b:7},{a:2,b:1}])
Expected
[{a:2,b:1},{a:1,b:7}]
*/

function myFunction(arr) {
  return arr.sort((a, b) => a.b - b.b);
}



// 36. Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

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

function myFunction(arr) {
  return new Set(arr).size === 1;
}


// 37. Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

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


// 38. Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.

/*
myFunction('a')
Expected
{key:'a'}
myFunction('z')
Expected
{key:'z'}
myFunction('b')
Expected
{key:'b'}
*/

function myFunction(a) {
  return { key: a };
}
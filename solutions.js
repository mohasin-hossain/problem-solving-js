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



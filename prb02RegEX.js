function regexVar(str) {
    let re = /^([aeiou]).+\1$/;
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence

    return re;
}

function stringToCheck(str) {
  const RegExp = regexVar(str);
  console.log(RegExp.test(str));
}
    
stringToCheck('abca');

/* 
Objective

In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

Task

Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

Constraints

The length of string  is  .
String  consists of lowercase letters only (i.e., [a-z]).
Output Format

The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.
*/

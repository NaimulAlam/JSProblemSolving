/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
// ONE WAY
// function reverseString(s) {
//     try {
//       const strSplit = s.split('')
//       const srtReverse = strSplit.reverse()
//       const strJoin = srtReverse.join('')
//       console.log(strJoin)
//     } catch(e) {
//       console.log('err', e.message)
//     } finally {
//       console.log('finally', s)
//     }
// }

// short way of one
function reverseString(s) {
    try {
      const newStr = s.split('').reverse().join('');
      return console.log(newStr);
    } catch(e) {
      console.log('s.split is not a function');
      console.log(s);
    }
}

// SECOND WAY
// function reverseString(s) {
//   try {
//     let newStr = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//       newStr += s[i];
//     }
//     console.log(newStr);
//   } catch(e) {
//     console.log('err', e.message)
//   } finally {
//     console.log('finally', s)
//   }
// }


// asking user parameter in node js cmd line
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter your string to reverse: `, str => {
  // const takeInput = prompt('Enter a string:');
  const result = reverseString(str);
  console.log(result);
  readline.close()
})

/*
Objective:
  In this challenge, we learn about strings and exceptions. Check out the attached tutorials for more details.

Task:
  Complete the reverseString function; it has one parameter, . You must perform the following actions:
  1. Try to reverse string  using the split, reverse, and join methods.
  2. If an exception is thrown, catch it and print the contents of the exception's  on a new line.
  3. Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

Input Format:
  Locked stub code in the editor reads variable  from stdin and passes it to the function.

Output Format:
  You must write two print statements using console.log():
  1. Print the contents of a caught exception's  on a new line. If no exception was thrown, this line should not be printed.
  2. Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
  
Sample Input 0
  "1234"
Sample Output 0
  "4321"
*/


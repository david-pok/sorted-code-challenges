// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

// Example

// For commands = "LLARL", the output should be
// lineUp(commands) = 3.

// Let's say that there are 4 students, and the second one can't tell left from right. In this case, only after the second, third and fifth commands will the students face the same direction.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string commands

// String consisting of characters 'L', 'R' and 'A' only.

// Guaranteed constraints:
// 0 ≤ commands.length ≤ 35.

// [output] integer

// The number of commands after which students face the same direction.

function lineUp(commands) {
  let count = 0;
  let same = true;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == "L" || commands[i] == "R") {
      same = !same;
    }
    if (same == true) count++;
  }
  return count;
}

//other answers
// const lineUp = (commands, flag = true) =>
//   [...commands].reduce(
//     (pre, val) => pre + (flag = val !== `A` ? !flag : flag),
//     0
//   );

// const lineUp = (c) => {
//   var a = 0,
//     b = 0;
//   for (i in c) if ((a += { L: 1, A: 2, R: 3 }[c[i]]) % 2 < 1) b++;
//   return b;
// };

// given a string input , reverse the ints in chunks of k
// where k is the int that comes after the ;

// so for the input 1,2,3,4,5;2
// k = 2
// output = 2,1,4,3,5

// for input 1,2,3,4,5,6,7,8,9;3
// k = 3
// output = 3,2,1,6,5,4,9,8,7

const chunkReverse = (inp) => {
  //first take str input and split it so that we can separate k
  //and also have our input in an array of ints
  //then we loop through array of ints incrementing by k
  //we find the lowest index of the chunk
  //the highest index of the chunk
  //and swap them while working our way towards the middle of the chunk
  //swapping each elem we go by
  //at the end we return our array as a str
  const splitted = inp.split(";");
  const digits = splitted[0].split(",").map(Number);
  const k = splitted.pop();

  for (let i = 0; i < digits.length; i += k) {
    if (i + k >= digits.length) break;
    let low = i,
      high = i + k - 1;

    while (low < high) {
      [digits[low], digits[high]] = [digits[high], digits[low]];
      low++;
      high--;
    }
  }
  return digits.join(",");
};

console.log(chunkReverse("1,2,3,4,5;2"));
console.log(chunkReverse("1,2,3,4,5,6,7,8,9;3"));

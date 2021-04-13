// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string time

// A string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the last two characters, are digits.

// [output] boolean

// true if the given representation is correct, false otherwise.

function validTime(time) {
  if (parseInt(time[0]) > 2) {
    return false;
  }
  if (parseInt(time[0]) == 2 && parseInt(time[1]) > 3) {
    return false;
  }
  if (parseInt(time[3]) > 5) {
    return false;
  }
  return true;
}

//cleaner answers
function validTime(time) {
  return time.split(":")[0] < 24 && time.split(":")[1] < 60;
}

function validTime(time) {
  time = time.split(":");

  if (time[0] > 23 || time[0] < 0) return false;
  else if (time[1] > 59 || time[1] < 0) return false;
  else return true;
}

function validTime(time) {
  time = time.split(":");
  return (
    parseInt(time[0]) > 0 &&
    parseInt(time[0]) < 24 &&
    parseInt(time[1]) >= 0 &&
    parseInt(time[1]) < 60
  );
}

function validTime(time) {
  let times = time.split(":");
  return times[0] < 24 && times[0] >= 0 && times[1] >= 0 && times[1] <= 59;
}

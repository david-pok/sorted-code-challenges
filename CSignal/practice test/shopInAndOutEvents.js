// You have installed a new tracking system in your local shop. The system tracks every time a customer enters or exits the shop. Now you'd like to test if the system works correctly.

// At the beginning and at the end of the day there are no customers in the shop. The system logs all the in and out movements of customers in a two-dimensional array of strings events, where events[i][0] is the unique id of the customer entering or exiting the shop, and events[i][1] is either "in" or "out", depending on the direction of movement of that customer.

// Your task is to write a function shopInAndOutEvents(events), which returns true if the system may have worked correctly, and false otherwise.

// Example

// For

// events = [
//   ["John_0", "in"],
//   ["Mary_0", "in"],
//   ["John_0", "out"],
//   ["Mary_0", "out"]
// ]
// the output should be shopInAndOutEvents(events) = true.

// For

// events = [
//   ["John_0", "in"],
//   ["John_0", "in"],
//   ["John_0", "out"],
//   ["John_0", "out"]
// ]
// the output should be shopInAndOutEvents(events) = false.

// The same person cannot enter the shop twice without exiting.

// For

// events = [
//   ["John_0", "in"],
//   ["John_1", "in"],
//   ["John_1", "out"]
// ]
// the output should be shopInAndOutEvents(events) = false.

// The customer with the id John_0 cannot be in the shop at the end of the day.

// [example explanation]

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.string events

// A two-dimensional array describing the entrances and exits of customers.

// events[i][0] is the id of the customer;
// events[i][1] is either "in" or "out".
// Guaranteed constraints:
// 1 ≤ events.length ≤ 105,
// events[i].length = 2,
// 1 ≤ events[i][0].length ≤ 20,
// events[i][1] ∈ { "in", "out" } .

// [output] boolean

// Whether or not the system may have worked correctly.

function shopInAndOutEvents(events) {
  let inside = {};
  for (let i = 0; i < events.length; i++) {
    const person = events[i][0];
    const action = events[i][1];
    if (!inside[person] && action == "out") return false;
    else if (inside[person] == true && action == "in") return false;
    else if (!inside[person] && action == "in") inside[person] = true;
    else if (inside[person] == true && action == "out") inside[person] = false;
  }
  let peeps = Object.values(inside);
  for (let i = 0; i < peeps.length; i++) {
    if (peeps[i] == true) return false;
  }
  return true;
}

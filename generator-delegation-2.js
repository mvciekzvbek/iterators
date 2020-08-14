/**
 * Example from "Kyle Simpson - You don't know JS: Async and Performance"
 */

function *foo () {
  console.log("1 inside *foo(): ", yield "B");
  console.log("2 inside *foo(): ", yield "C");

  return "D"
}

function *bar () {
  console.log("1 inside *bar(): ", yield "A");
  console.log("2 inside *bar(): ", yield *foo());
  console.log("3 inside *bar(): ", yield "E");

  return "F"
}

var it = bar();

console.log("outside: ", it.next().value);
console.log("outside: ", it.next(1).value);
console.log("outside: ", it.next(2).value);
console.log("outside: ", it.next(3).value);
console.log("outside: ", it.next(4).value);


/**
 * Example from "Kyle Simpson - You don't know JS: Async and Performance"
 */

function *foo () {
  console.log("*foo() starting...");
  yield 3;
  yield 4;
  console.log("*foo() finished...");
}

function *bar () {
  yield 1;
  yield 2;
  
  /**
   * yield * delegates the iterator instance control (of the preset *bar() generator) over to *foo() iterator.
   */
  yield *foo(); // generator/yield delegation
  yield 5;
}

// creating iterator
var it = bar();

/**
 * First two it.next() calls are controling *bar()
 * With it.next() *foo() starts up and iterator is controling *foo() instead of *bar()
 */
it.next().value; // 1
it.next().value; // 2
it.next().value; // *foo() starting...
                 // 3
it.next().value; // 4
it.next().value; // *foo() finished...
                 // 5

/******************
 * YOUR CODE HERE *
 ******************/

//  1. `addMeToEnd` - adds the string 'Colin' to the end of the given array.
function addMeToEnd(array) {
  array.push("Colin");
}

// 2. `addMeToStart` - adds the string 'Colin' to the start of the given array.
function addMeToStart(array) {
  array.unshift("Colin");
}

// 3. `changeLast` - _changes_ (not adds!) the last value in the given array to the value given.
function changeLast(array, value) {
  array[array.length - 1] = value;
}

// 4. `changeAllValuesTo` - changes _every_ value in the given array to the given value.
function changeAllValuesTo(array, value) {
  for (let i = 0; i < array.length; i++) {
    array[i] = value;
  }
}

// 5. `oddOrEven` - changes every numerical value in the given array (you can assume they'll
// all be numbers) to the string 'odd' if the number is odd and 'even' if it's even.
function oddOrEven(array) {
  for (let i = 0; i < array.length; i++) {
    // if current number is odd, change to 'odd'
    if (array[i] % 2 === 1) {
      array[i] = "odd";
    }
    // else if array number is even, change to 'even'
    else {
      array[i] = "even";
    }
  }
}

// 6. `changeNextThreeToValue` -  starting with the given index, changes three consecutive
// values in the given array to the given value. Note the order of our 3 parameters,
// and check the test if you're unsure.
function changeNextThreeToValue(index, array, value) {
  for (let i = index; i < index + 3; i++) {
    array[i] = value;
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof addMeToEnd === "undefined") {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === "undefined") {
  addMeToStart = undefined;
}

if (typeof changeLast === "undefined") {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === "undefined") {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === "undefined") {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === "undefined") {
  changeNextThreeToValue = undefined;
}

module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
};

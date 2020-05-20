// back end logic
var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var roboger = function(input) {
  let str = '';
  for (let i = 0; i < (input+1); i++) {
    str = str + i;
  }
  var numbers = [str.split("")];
  console.log(numbers);
  debugger;

};



// front end logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = roboger(input);
    $("#results").text(result);
  });
});


// take input and make array that includes all numbers up to that number
// search array using index method for 1
// replace 1 with var
// search array using index method for 2
// replace 2 with var
// search array using index method for 3
// replace 3 with var




// function pow(x, n) {
//   let result = 1;

//   // multiply result by x n times in the loop
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 3) ); // 8



// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert( pow(2, 3) ); // 8



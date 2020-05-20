// back-end logic
var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"

var roboger = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i);
  };
  console.log(numbers);
  numbers[numbers.indexOf(1)] = beep;
  numbers[numbers.indexOf(2)] = boop;
  numbers[numbers.indexOf(3)] = neighbor;

  return numbers
};



// front-end logic

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


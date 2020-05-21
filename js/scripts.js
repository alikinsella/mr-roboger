// back-end logic
var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"

var roboger = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i);
  };
  var numberStrings = [];
  numbers.forEach(function(number) {
    numberStrings.push(number.toString());
  });

  numberStrings[numberStrings.indexOf("3")] = neighbor;
  numberStrings[numberStrings.indexOf("2")] = boop;
  numberStrings[numberStrings.indexOf("1")] = beep;

  return numberStrings;
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


// replace a number with any digit of 1, 2, or 3 with corresponding phrase


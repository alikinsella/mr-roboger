// back-end logic
var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"
var poopy = "poopy!"

var roboger = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i);
  };

  var numberStrings = numbers.map(function(number) {
    return number.toString();
  });

  // numberStrings[numberStrings.indexOf("3")] = neighbor;
  // numberStrings[numberStrings.indexOf("2")] = boop;
  // numberStrings[numberStrings.indexOf("1")] = beep;
  
  var robogers = numberStrings.map(function(numberString) {
    if (numberString === "3") {
      return numberString = neighbor;
    } else if (numberString === "2") {
      return numberString = boop;
    } else if (numberString === "1") {
      return numberString = beep;
    } else {
      return numberString;
    };
  });

  return robogers;
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


// back-end logic
var beep = "beep!"
var boop = "boop!"
var neighbor = "Won't you be my neighbor?"


var roboger = function(input) {
  let numbers = [];
  for (let i = 0; i <= input; i++) {
    numbers.push(i.toString());
  };
  
  var robogers = numbers.map(function(number) {
    if (number.includes("3")) {
      return number = neighbor;
    } else if (number.includes("2")) {
      return number = boop;
    } else if (number.includes("1")) {
      return number = beep;
    } else {
      return number;
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



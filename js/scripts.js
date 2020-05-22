// back-end logic

var roboger = function(input) {
  let robogers = [];
  for (let i = 0; i <= input; i++) {
    let numberAsString = i.toString();
    if (numberAsString.includes("3")) {
      robogers.push("Won't you be my neighbor?");
    } else if (numberAsString.includes("2")) {
      robogers.push("boop!");
    } else if (numberAsString.includes("1")) {
      robogers.push("beep!");
    } else {
      robogers.push(numberAsString);
    }
  };
  return robogers;
};


// front-end logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = roboger(input);
    $("#results").text(result);
    $(".output").show();
    $("img").click(function() {
      $("#results").text(result.reverse());
    });
  });
  
});

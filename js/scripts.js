//===================================================
//Front-End Logic
//---------------------------------------------------

//Runs all front-end logic once page has loaded.
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    $("#output").text(createOutput(input));
  })
})

//===================================================
//Back-End Logic
//---------------------------------------------------

//creates output based on conditionals and returns output string.
function createOutput(input) {
  if(Number.isInteger(input)) {
    var listString = "";
    for(let i = 0; i <= input; i++) {
      if(i === input) {
        if(contains1(i)) {
          listString += "Beep!"
        }
        listString += i;
      } else if(contains1(i)) {
        listString += "Beep!, ";
      } else {
        listString += (i + ", ");
      }
    }
    return listString;
  } else {
    return "Error: Please enter a number";
  }
}

//converts number input to string and reutnr true if it contains a "1", else returns false.
function contains1(input) {
  var numString = input.toString();
  for(let i = 0; i < numString.length; i++) {
    if(numString[i] === "1") {
      return true;
    }
  }
  return false;
}
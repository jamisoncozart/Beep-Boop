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
        if(containsNumber(i, "2")) {
          listString += "Boop!";
        } else if(containsNumber(i, "1")) {
          listString += "Beep!";
        } else {
          listString += i;
        }
      } else if(containsNumber(i, "2")) {
        listString += "Boop!, ";
      } else if(containsNumber(i, "1")) {
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

//checks if any character of input contains checkNumberString and returns a boolean.
function containsNumber(input, checkNumberString) {
  var numString = input.toString();
  for(let i = 0; i < numString.length; i++) {
    if(numString[i] === checkNumberString) {
      return true;
    }
  }
  return false;
}
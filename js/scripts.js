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

//checks if input is a number, then calls createNumList() to generate number list output.
function createOutput(input) {
  if(Number.isInteger(input)) {
    return createNumList(input);
  } else {
    return "Error: Please enter a number";
  }
}

//creates the number list string and returns it.
function createNumList(input) {
  var numList = "";
  for(let i = 0; i <= input; i++) {
    if(containsNumber(i, "3")) {
      numList += "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if(containsNumber(i, "2")) {
      numList += "Boop!";
    } else if(containsNumber(i, "1")) {
      numList += "Beep!";
    } else {
      numList += i;
    }
    if(i !== input) {
      numList += ", ";
    }
  }
  return numList;
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
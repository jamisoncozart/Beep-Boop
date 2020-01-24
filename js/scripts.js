//User Interface Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    $("#output").text(createOutput(input));
  })
})

//Backend Logic
function createOutput(input) {
  if(Number.isInteger(input)) {
    var listString = "";
    for(let i = 0; i <= input; i++) {
      if(i === input) {
        listString += i;
      } else {
        listString += (i + ", ");
      }
    }
    return listString;
  } else {
    return "Error: Please enter a number";
  }
}
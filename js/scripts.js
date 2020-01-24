//User Interface Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    $("#output").text(createOutput(input));
  })
})

//Backend Logic
function createOutput(input) {
  return "Error: Please enter a number";
}
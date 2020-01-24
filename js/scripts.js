$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    console.log(input);
  })
})
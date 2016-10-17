var output = $("#output");
var input = $("#input");

input.keydown(function(e) {
  if (e.keyCode == 13) {
  output.html("um. . . I have a boyfriend");
}
})
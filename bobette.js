var output = $("#output");
var input = $("#input");

var inc = 0;
function talking() {
  inc = inc + 1;
}

input.keydown(function(e) {
  talking()
  if (e.keyCode == 13) {
  output.html("um. . . I have a boyfriend");
  }})
   

console.log(inc);

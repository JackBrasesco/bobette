var output = $("#output");
var input = $("#input");

input.keydown(function(e) {
  talking()
  if (e.keyCode == 13) {
    if (inc == 0) {
  output.html("um. . . I have a boyfriend");
    }
    else if (inc ==
}
})

inc = 0
function talking() {
  inc = inc + 1
}
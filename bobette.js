var output = $("#output");
var input = $("#input");

input.keydown(function(e) {
  talking()
  if (e.keyCode == 13) {
    if (inc == 0) {
  output.html("um. . . I have a boyfriend");
    }
    else if (inc == 1) {
      output.html("seriously, don't talk to me")
    }
    else if (inc == 2) {
      output.html("bob is going to kill you if you keep talking to me");
    }
    else if (inc > 2) {
      output.html("you should talk to bob")
      alert("seiously, talk to bob at 'jackbrasesco.github.io/bob'")
    }
}
})

inc = 0
function talking() {
  inc = inc + 1
}
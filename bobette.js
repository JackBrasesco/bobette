var output = $("#output");
var input = $("#input");if (keydownEvent.keyCode == 13) {  
  parseText(gameInput.val()); 
  gameInput.val();
  var str = gameInput.val().toLowerCase();
  var isColor = str.indexOf("color");
  var isName = str.indexOf("name");
  var isFuck = str.indexOf("fuck");
  var isHi = str.indexOf("hi");
  var isAge = str.indexOf("old");
  var isGood = str.indexOf("good");
  var isHow = str.indexOf("how are");
  var isBye = str.indexOf("bye");
  var isBob = str.indexOf("bob");
  var isWorking = str.indexOf("working");
  var CalculateFunction = str.indexOf("/calculate")
  var GoogleFunction = str.indexOf("/google")
  var ClaimFunction = str.indexOf("/say")
  if (ClaimFunction > -1) {
    var thisvalue = str.split("/say")[1]
    //      storeValue("leadervalue", thisvalue);
    //      var damnitJosh = thisvalue.split("<")[1]

    addListItem("saylist", thisvalue);
  }
  if (GoogleFunction > -1) {
    var title = str.split("/google")[1];
    getWikiIntro(title, function(text) {

      gameOutput.html(text)

    })

  }
  if (CalculateFunction > -1) {
    var nS = str.split("/calculate")[1];
    var isAdd = nS.indexOf("+");
    var isTimes = nS.indexOf("x");
    var isMinus = nS.indexOf("-");
    var isDivide = nS.indexOf("/");
    var isFactorial = nS.indexOf("!");
    if (isFactorial > -1) {
      var factthing = nS.split("!")[0];
      console.log(factthing)
    }
    if (isTimes > -1) {
      var timesSplit = nS.split("x");
      var oneNumber = parseFloat(timesSplit[0]);
      var twoNumber = parseFloat(timesSplit[1]);
      var multiply = (oneNumber * twoNumber);        
      console.log(multiply);
      var multiplyFinal = String(multiply);        
      gameOutput.html(multiplyFinal)
    }
    if (isMinus > -1) {        
      var minusSplit = nS.split("-");
      var fNumber = parseInt(minusSplit[0]);
      var sNumber = parseInt(minusSplit[1]);
      var subtract = (fNumber - sNumber);
      var subtractFinal = String(subtract);
      console.log("3")
      gameOutput.html(subtractFinal)
    }
    if (isAdd > -1) {         
      var plusSplit = nS.split("+");
      var firstNumber = parseFloat(plusSplit[0]);
      var secondNumber = parseFloat(plusSplit[1]);
      var add = (firstNumber + secondNumber);
      var addFinal = String(add);
      console.log("3")
      gameOutput.html(addFinal)
    }
    if (isDivide > -1) {         
      var divideSplit = nS.split("/");
      var firstoneNumber = parseFloat(divideSplit[0]);
      var secondtwoNumber = parseFloat(divideSplit[1]);
      var divide = (firstoneNumber / secondtwoNumber);
      var divideFinal = String(divide);
      console.log("3")
      gameOutput.html(divideFinal)
    }
  }
  if (isWorking > -1) {
    gameOutput.html("yes")
  }
  if (isBob > -1) {
    gameOutput.html("that is my name, don't wear it out")
  }
  if (isBye > -1) {
    gameOutput.html("adios!")
  }
  if (isHow > -1) {
    gameOutput.html("IM NOT GOOD")
  }
  if (isGood > -1) {
    gameOutput.html("That's nice... I'm good too")
  }
  if (isAge > -1) {
    gameOutput.html("I am 13490124930492 years old")
  }
  if (isHi > -1) {
    counter()
    if (inc < 3)
      gameOutput.html("Hi, how are you")
      else gameOutput.html("ur mum said hi last night!!!!!") 
        }
  if (isColor > -1) {
    gameOutput.html("My favorite color is blue")
  }
  else if (isName > -1) {
    var response
    =responses[Math.floor(Math.random()*responses.length)];
    gameOutput.html(response)
  }
  else if (isFuck > -1) {
    gameOutput.html("When and where?")
  }
  else {}
  console.log(isFuck)
  gameInput.val("")
}  
})



function parseText(text) {  
    Output.html("Um, I have a boyfriend");
}
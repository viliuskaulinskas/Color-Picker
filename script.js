var input = document.getElementById("color-code");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});

function myFunction() {
  var x = document.getElementById("color-code").value;
  if (x == "") {  }
  else {
    var y = document.getElementById("color-display").style.backgroundColor;
    document.getElementById("color-display").style.backgroundColor = x;
    if (y != document.getElementById("color-display").style.backgroundColor) {
      document.getElementById("color-name").innerHTML = x;
    }
    else {
      document.getElementById("color-name").innerHTML = "no such color: " + x;
    }
    document.getElementById("color-code").focus();
    document.getElementById("color-code").placeholder = "enter color";
    document.getElementById("color-code").value = "";
  }
}

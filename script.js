var input = document.getElementById("color-code");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});

function myFunction() {
  var x1 = document.getElementById("color-code").value; //paima IVESTA spalvos koda is laukelio
  var x = x1.toLowerCase();
  if (x == "") {  } // jei nieko neivesta, nieko nedaro
  else {
    var y = document.getElementById("square").style.backgroundColor; // paima DABARTINE kvadrato spalva
    document.getElementById("square").style.backgroundColor = x; // nustato nauja kvadrato spalva
    if (y != document.getElementById("square").style.backgroundColor) { //jei spalva x gerai ivesta ir nelygi pries tai buvusiai
      document.getElementById("color-name").innerHTML = x; // paraso naujos spalvos koda
    }
    else if (y === x) {  }
    else {
      if (x.length < 18) document.getElementById("color-name").innerHTML = "no such color: " + x;
      else document.getElementById("color-name").innerHTML = "no such color";
    }

    document.getElementById("color-code").focus();
    document.getElementById("color-code").placeholder = "enter color";
    document.getElementById("color-code").value = "";
  }
}

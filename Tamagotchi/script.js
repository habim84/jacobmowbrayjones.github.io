var id = setInterval(frame, 5);

function myMove() {
    console.log("my Move Pressed");
  
  var elem = document.getElementById("petAnimation");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
  
}

function frame() {
    if (/* test for finished */) {
        clearInterval(id);
    } else {
        /* code to change the element style */  
    }
}
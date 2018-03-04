
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

function animatePet() {
    console.log("my Move Pressed");
   var img = document.createElement("img");
    img.src="Images/picture.png"
    img.height = "500px";
    img.width = "500px";
    
    
    document.body.appendChild(img);
}

let choice;
window.onload = makeImageArray();

function makeImageArray() {
console.log("script working");
}

function chooseImage(id) {
    if (id == "image-rock") {
        hideOtherImages("rock");

    } else if (id == "image-paper") {
        hideOtherImages("paper");

    } else if (id == "image-scissors") {
        hideOtherImages("scissors");
    }


}

function hideOtherImages(choice) {
    if (choice == "rock") {
        document.getElementById("image-paper").style.visibility = "hidden";
        document.getElementById("image-scissors").style.visibility = "hidden";
    }
    else if (choice == "paper") {
        document.getElementById("image-rock").style.visibility = "hidden";
        document.getElementById("image-scissors").style.visibility = "hidden";
    }
      else if (choice == "scissors") {
        document.getElementById("image-rock").style.visibility = "hidden";
        document.getElementById("image-paper").style.visibility = "hidden";
    }
    console.log(choice);
}

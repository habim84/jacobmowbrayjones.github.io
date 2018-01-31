let choice;
let rockImage, paperImage, scissorImage;

function prepareImages() {
    console.log("script working");
    rockImage = document.getElementById("image-rock");
    paperImage = document.getElementById("image-paper");
    scissorImage = document.getElementById("image-scissors");
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

        Object.assign(scissorImage.style, {
            visibility: "hidden",
            width: "0"
        });
        Object.assign(paperImage.style, {
            visibility: "hidden",
            width: "0"
        });
    } else if (choice == "paper") {
        Object.assign(scissorImage.style, {
            visibility: "hidden",
            width: "0"
        });
        Object.assign(rockImage.style, {
            visibility: "hidden",
            width: "0"
        });
    } else if (choice == "scissors") {
       Object.assign(rockImage.style, {
                visibility: "hidden",
                width: "0"});
         Object.assign(paperImage.style, {
                visibility: "hidden",
                width: "0"});
    }
    console.log(choice);
}

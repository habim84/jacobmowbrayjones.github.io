let choice;
let rockImage, paperImage, scissorImage, feedback;

function prepareImages() {
    console.log("script working");
    rockImage = document.getElementById("image-rock");
    paperImage = document.getElementById("image-paper");
    scissorImage = document.getElementById("image-scissors");
    feedback = document.getElementById("text-feedback");

}

function feedbackText(textToDisplay) {
    let para = document.createElement("P");
    let t = document.createTextNode(textToDisplay);

    para.appendChild(t);
    document.body.appendChild(para);
    para.id = "feedback-paragraph";
    Object.assign(para.style, {
        fontSize: "200px",
        textAlign: "center",
        marginTop: "-20px"

    });
}

function chooseImage(id) {
    if (id == "image-rock") {
        Object.assign(scissorImage.style, {
            visibility: "hidden",
            width: "0"
        });
        Object.assign(paperImage.style, {
            visibility: "hidden",
            width: "0"
        });
        feedbackText("Rock");
    } else if (id == "image-paper") {
        Object.assign(scissorImage.style, {
            visibility: "hidden",
            width: "0"
        });
        Object.assign(rockImage.style, {
            visibility: "hidden",
            width: "0"
        });
        feedbackText("Paper");

    } else if (id == "image-scissors") {

        Object.assign(rockImage.style, {
            visibility: "hidden",
            width: "0"
        });
        Object.assign(paperImage.style, {
            visibility: "hidden",
            width: "0"
        });
        feedbackText("Scissors");
    }


}

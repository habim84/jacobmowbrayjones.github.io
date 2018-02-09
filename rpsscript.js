//let rockImage, paperImage, scissorImage, feedback;
let t;
let haveClicked;

function prepareImages() {
    console.log("prepareImages");
    //remove children from previous games
    var myNode = document.getElementById("banner-images");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var myNode2 = document.getElementById("text-feedback");
    while (myNode2.firstChild) {
        myNode2.removeChild(myNode2.firstChild);
    }
    haveClicked = false;
    //Setup rock image
    let rImg = document.createElement("img");
    rImg.src = "https://rampages.us/christineandress/wp-content/uploads/sites/11241/2015/09/stone.png"
    rImg.width = "500";
    rImg.height = "500";
    rImg.id = "rockImage";
    rImg.addEventListener('click', function () {
        chooseImage("rock");
    });

    document.getElementById("banner-images").append(rImg);

    //Setup paper image
    let pImg = document.createElement("img");
    pImg.src = "http://cliparts.co/cliparts/6cr/5Br/6cr5Brrei.png "
    pImg.width = "500";
    pImg.height = "500";
    pImg.id = "paperImage";
    pImg.addEventListener('click', function () {
        chooseImage("paper");
    });

    document.getElementById("banner-images").append(pImg);

    //Setup scissor image
    let sImg = document.createElement("img");
    sImg.src = "https://pngimg.com/uploads/scissors/scissors_PNG10.png"
    sImg.width = "600";
    sImg.height = "400";
    sImg.id = "scissorImage";
    sImg.addEventListener('click', function () {
        chooseImage("scissor");
    });
    document.getElementById("banner-images").append(sImg);
}


function computerChoice(humanChoice) {
    console.log(humanChoice);
    if (humanChoice == "rock") {
        document.getElementById("rockImage").width = "0";
        document.getElementById("paperImage").width = "500";
        document.getElementById("feedback").innerHTML = "Paper! You Lose!";
    } else if (humanChoice == "paper") {
        document.getElementById("paperImage").width = "0";
        document.getElementById("scissorImage").width = "500";
        document.getElementById("feedback").innerHTML = "Scissors! Chop chop! You lose!";

    } else if (humanChoice == "scissor") {
        document.getElementById("scissorImage").width = "0";
        document.getElementById("rockImage").width = "500";
        document.getElementById("feedback").innerHTML = "Rock! I crush you!";
    }



}

function chooseImage(id) {
    console.log(id);
    if (!haveClicked) {
        if (id == "rock") {
            document.getElementById("scissorImage").width = "0";
            document.getElementById("paperImage").width = "0";
        } else if (id == "paper") {

            document.getElementById("scissorImage").width = "0";
            document.getElementById("rockImage").width = "0";

        } else if (id == "scissor") {

            document.getElementById("rockImage").width = "0";
            document.getElementById("paperImage").width = "0";
        }
        feedbackText(id);
        setTimeout(function () {
            computerChoice(id);
        }, 1500);

        setTimeout(function () {
            prepareImages();
        }, 3000);
        haveClicked = true;
    }
}

function feedbackText(textToDisplay) {
    console.log("in feedback text")
    let para = document.createElement("P");
    textToDisplay = textToDisplay + ", interesting... well I chose...";
    t = document.createTextNode(textToDisplay);
    para.id = "feedback";
    para.appendChild(t);
    document.getElementById("text-feedback").appendChild(para);
    Object.assign(para.style, {
        fontSize: "150px",
        textAlign: "center",
        marginTop: "-20px"
    });
}

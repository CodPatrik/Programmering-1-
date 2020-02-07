function backColor(inData) {
    let messageBox = document.getElementById("message");
    messageBox.style.backgroundColor = inData;
}

function ordnaNamn(indata) {

    let boxNamn = indata;

    let boxColor = boxNamn.replace("Box", "");

    return boxColor;

}


function translateColor2(indata) {

    let boxColorSv = "";

    let boxColorEng = indata;

    /* en variant att göra det på är att använda if satser */

    if (boxColorEng == "blue") {
        boxColorSv = "blå";
    }
    if (boxColorEng == "red") {
        boxColorSv = "röd";
    }
    if (boxColorEng == "green") {
        boxColorSv = "grön";
    }

    return boxColorSv;
}

function translateColor(indata) {

    let boxColorSv = ""; /*eller null*/

    let boxColorEng = indata;

    /* en variant att göra det på är att använda switch */

    switch (boxColorEng) {
        case 'blue':
            boxColorSv = "blå";
            break;
        case 'red':
            boxColorSv = "röd";
            break;
        case 'green':
            boxColorSv = "grön";
    }

    return boxColorSv;
}


function showMessage(indata) {

    let message = "Du har tryckt på en knapp med färgen ";

    let boxColorEng = ordnaNamn(indata);

    let boxColorSv = translateColor(boxColorEng);

    backColor(boxColorEng);

    let messageBox = document.getElementById("message");

    messageBox.innerText = message + boxColorSv;

    messageBox.style.visibility = "visible";

}

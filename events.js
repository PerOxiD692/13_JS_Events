


//ausgabe(btn);
let btn = document.getElementById("trigBtn");
btn.addEventListener("click",togglStatus);

let status = true;

/***** Änderungen in der View Schicht *****/

//switchClassname("night");

function switchClassname(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}




/***** Tools *****/

function ausgabe(outputStr) {
    console.log(outputStr);
}

function test() {

    let cond = (document.body.className == "day");
    if (cond) {
        // night-mode
        switchClassname("night");
        switchBtnTxt("day");
    } else {
        // day-mode
        switchClassname("day");
        switchBtnTxt("night");
    }
    
}

function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}

function togglStatus() {
    status = !status;
    ausgabe(status);
}
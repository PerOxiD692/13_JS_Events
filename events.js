

/***** Variablen *****/
let btn = document.getElementById("trigBtn");
let status = true;


/***** Event-Listener *****/

// Website geladen --> auf (Anfangs)-Zustand Umschalten
window.addEventListener("load",togglStatus);

// Klick auf Btn --> Zustand umschalten
btn.addEventListener("click",togglStatus);


/***** Tools *****/

function ausgabe(outputStr) {
    console.log(outputStr);
}

function updateView() {
    if (status) {
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
    updateView();
}

/***** Änderungen in der View Schicht *****/

function switchClassname(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}
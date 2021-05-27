
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

let btn = document.getElementById("trigBtn");
ausgabe(btn);

btn.addEventListener("click",test);

function test() {
    ausgabe("hi");
}
function testFunkcija(x) {
    if (x == 1) {
        var y = 2; //let y = 2;
    }
    return y; // Cannot find name 'y'.
}
var h = testFunkcija(1);
var j = testFunkcija(2);
var button = document.createElement('button');
button.textContent = "Pa da pogledamo.";
button.onclick = function () {
    alert("Vrednost h je " + h + " a" + " j je " + j + ".");
};
document.body.appendChild(button);

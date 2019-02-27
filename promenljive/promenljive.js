var GlobalnaPromenljiva = 100;
function FUNKCIJA() {
    var LokalnaPromenljiva = 1;
    return (GlobalnaPromenljiva + LokalnaPromenljiva);
}
var KLASA = /** @class */ (function () {
    function KLASA() {
        this.PromenljivaKlase2 = 5;
    }
    KLASA.PromenljivaKlase = 1;
    return KLASA;
}());
var Objekat = new KLASA();
var Zbir = FUNKCIJA() + Objekat.PromenljivaKlase2;
// 1. Ako izbrišemo deo koda (let Objekat = new KLASA();) i Objekat.PromenljivaKlase2 zamenimo sa PromenljivaKlase2
var Zbir1 = GlobalnaPromenljiva + KLASA.PromenljivaKlase;
// 2. Umesto KLASE.PromenljivaKlase saberite sa LokalnaPromenljiva
var button1 = document.createElement('button');
var button2 = document.createElement('button');
button1.textContent = "Dugme1";
button1.onclick = function () {
    alert(Zbir);
};
button2.textContent = "Dugme2";
button2.onclick = function () {
    alert(Zbir1);
};
document.body.appendChild(button1);
document.body.appendChild(button2);

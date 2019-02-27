var ZdravoSvima = /** @class */ (function () {
    function ZdravoSvima(poruka, ime, prezime) {
        this.pozdrav = poruka;
        this.ime = ime;
        this.prezime = prezime;
    }
    ZdravoSvima.prototype.Zdravo = function () {
        return "Zdravo " + this.pozdrav + " " + this.ime + " " + this.prezime;
    };
    return ZdravoSvima;
}());
var Objekat = new ZdravoSvima("svima", "Mika", "Mikic");
var button = document.createElement('button');
button.textContent = "Dont push the button!";
button.onclick = function () {
    alert(Objekat.Zdravo());
};
document.body.appendChild(button);

class Letelica {
    constructor(proizvodjac, tip, godProizvodnje) {
        this.proizvodjac = proizvodjac;
        this.tip = tip;
        this.godProizvodnje = godProizvodnje;
    }
    get getProizvodjac() {
        return this.proizvodjac;
    }
    set setProizvodjac(value) {
        if (value == "BOEING" || value == "AIRBUS") {
            this.proizvodjac = value;
        }
        else {
            alert("Nije ispravno ime proizvodjaca");
        }
    }
    ispis() {
        return "Proizvodjac letelice je: " + this.getProizvodjac + " tipa: " + this.tip + " god. proizvodnje: " + this.godProizvodnje;
    }
}
class Avion extends Letelica {
    constructor(brojSedista, brojRedova, proizvodjac, tip, godProizvodnje) {
        super(proizvodjac, tip, godProizvodnje);
        this.brojSedista = brojSedista;
        this.brojRedova = brojRedova;
    }
    get getBrSed() {
        return this.brojSedista;
    }
    set setBrSed(sed) {
        this.brojSedista = sed;
    }
    get getBrRed() {
        return this.brojRedova;
    }
    set setBrRed(red) {
        this.brojRedova = red;
    }
    ukupnoSedista() {
        return this.brojSedista * this.brojRedova;
    }
    ispis() {
        return super.ispis() + ", ima " + this.brojRedova + " redova i " + this.brojSedista + " sedista";
    }
}
class Helikopter extends Letelica {
    constructor(spasilacki, proizvodjac, tip, godProizvodnje) {
        super(proizvodjac, tip, godProizvodnje);
        this.spasilacki = spasilacki;
    }
    padobran() {
        return (this.spasilacki == true && this.godProizvodnje > 2000) ? true : false;
    }
}
let l = new Letelica("BOEING", "737", 1989);
l.setProizvodjac = "MICA";
console.log("Proizvodjac: " + l.getProizvodjac);
console.log(l.ispis());
let a = new Avion(5, 12, "AIRBUS", "548", 1997);
console.log("Ukupno sedista u avionu ima: " + a.ukupnoSedista());
console.log(a.ispis());
let h = new Helikopter(true, "AIRBUS", "548", 2001);
console.log("Helikopter spasilacki: " + h.padobran());

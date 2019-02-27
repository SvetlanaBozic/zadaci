class Vozilo {
    constructor(tezina, naziv, opis) {
        this.tezina = tezina;
        this.naziv = naziv;
        this.opis = opis;
    }
}
class TeretnoVozilo extends Vozilo {
    constructor(tezinaTereta, tezina, naziv, opis) {
        super(tezina, naziv, opis);
        this.tezinaTereta = tezinaTereta;
    }
    vozilo() {
        return ("Teretno vozilo " + this.naziv + " je " + this.opis);
    }
    prerTezina() {
        return this.tezina + this.tezinaTereta;
    }
}
class PutnickoVozilo extends Vozilo {
    constructor(tezina, naziv, opis, brojPutnika, tezinaPutnika) {
        super(tezina, naziv, opis);
        this.brojPutnika = brojPutnika;
        this.tezinaPutnika = tezinaPutnika;
    }
    prerTezina() {
        return this.tezina + this.brojPutnika * this.tezinaPutnika;
    }
    vozilo() {
        return ("Putnicko vozilo " + this.naziv + " je " + this.opis);
        ;
    }
}
let tv1 = new TeretnoVozilo(1500, 5000, "s", "addada");
let tv2 = new TeretnoVozilo(1000, 5000, "f", "dsfsf");
let tv3 = new TeretnoVozilo(1200, 8000, "d", "dsdwe");
let tv4 = new TeretnoVozilo(1700, 9000, "r", "desfwefe");
let tv5 = new TeretnoVozilo(1800, 8500, "t", "etreg");
let pv1 = new PutnickoVozilo(1500, "s", "dfdfs", 5, 50);
let pv2 = new PutnickoVozilo(1600, "r", "etet", 4, 60);
let pv3 = new PutnickoVozilo(1750, "y", "addsffsada", 3, 75);
let pv4 = new PutnickoVozilo(1750, "e", "ette", 5, 70);
let pv5 = new PutnickoVozilo(1700, "l", "sffs", 4, 70);
console.log(tv1);
console.log(tv1.vozilo());
console.log(pv1);
console.log(pv1.vozilo());
let nizVozila = [tv1, tv2, tv3, tv4, tv5, pv1, pv2, pv3, pv4, pv5];
function preracunaj() {
    let s = 0;
    for (let i = 0; i < nizVozila.length; i++) {
        s += nizVozila[i].prerTezina();
    }
    return s;
}
function opterecenostMosta() {
    if (preracunaj() > 50000) {
        console.log("Na mostu se ne smeju naci sva vozila, njihova tezina je preko nosivosti mosta!");
    }
    else {
        console.log("Na mostu se mogu naci sva vozila, njihova tezina je manja od nosivosti mosta!");
    }
}
preracunaj();
console.log(opterecenostMosta());

class Osoba {
    constructor(JMBG, godRodjenja, ime, prezime) {
        this.JMBG = JMBG;
        this.godRodjenja = godRodjenja;
        this.ime = ime;
        this.prezime = prezime;
        this.JMBG = JMBG;
        this.godRodjenja = godRodjenja;
        this.ime = ime;
        this.prezime = prezime;
    }
    get getGodRod() {
        return this.godRodjenja;
    }
    set setGodRod(god) {
        if (god < 1900 || god > 2011) {
            alert("Godina nije u opsegu");
        }
        else {
            this.godRodjenja = god;
        }
    }
    ispis() {
        return "Ime: " + this.ime + " Prezime: " + this.prezime;
    }
}
class Adresa {
    /* ulica:string;
     broj:string;
     grad:string;*/
    constructor(ulica, broj, grad) {
        this.ulica = ulica;
        this.broj = broj;
        this.grad = grad;
        this.ulica = ulica;
        this.broj = broj;
        this.grad = grad;
    }
    ispis() {
        return "Ulica: " + this.ulica + " broj: " + this.broj + " grad: " + this.grad;
    }
}
class Student extends Osoba {
    constructor(brojIndeksa, godUpisa, JMBG, godRodjenja, ime, prezime) {
        super(JMBG, godRodjenja, ime, prezime);
        this.brojIndeksa = brojIndeksa;
        this.godUpisa = godUpisa;
        this.JMBG = JMBG;
        this.godRodjenja = godRodjenja;
        this.ime = ime;
        this.prezime = prezime;
        this.brojIndeksa = brojIndeksa;
        this.godUpisa = godUpisa;
    }
    unetiAdresu(adresa) {
        this.adresa = adresa.ispis();
    }
    vratiAdresu() {
        return this.adresa;
    }
    godinePriUpisu() {
        return this.godUpisa - this.getGodRod;
    }
    ispis() {
        return super.ispis() + " sa adresom " + this.vratiAdresu() + " je upisao fakultet sa " + this.godinePriUpisu() + " godine.";
    }
}
let student = new Student("12/06", 2006, "12546565", 1987, "Mika", "Mikic");
let ad = new Adresa("Pere Perica", "7", "Beograd");
student.unetiAdresu(ad);
console.log(student.ispis());

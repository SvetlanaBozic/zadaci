class Vozilo {
    constructor(pomeritiZa) {
        this.pomeritiZa = pomeritiZa;
        this.kilom = 0;
        this.pomeritiZa = pomeritiZa;
    }
    get getPomeriti() {
        return this.pomeritiZa;
    }
    set setPomeriti(value) {
        if (this instanceof Helikopter) {
            if (this.predjenaKilom() + value > 500) {
                alert("Helikopter ne moze da leti dalje od 500km!");
            }
            else {
                this.pomeritiZa = value;
            }
        }
    }
    predjenaKilom() {
        this.kilom += this.getPomeriti;
        return this.kilom;
    }
}
class Letilica extends Vozilo {
}
class Avion extends Letilica {
}
class Helikopter extends Letilica {
}
class Plovilo extends Vozilo {
    constructor(kurs, pomeritiZa) {
        super(pomeritiZa);
        this.kurs = kurs;
        this.pomeritiZa = pomeritiZa;
        this.kurs = kurs;
    }
}
let h = new Helikopter(32);
console.log(h.predjenaKilom());
h.setPomeriti = 480;
console.log(h.getPomeriti);

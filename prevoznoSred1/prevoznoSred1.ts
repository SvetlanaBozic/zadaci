class Vozilo {
    kilom:number=0;
    constructor(protected pomeritiZa: number) {
       
        this.pomeritiZa = pomeritiZa;
    }

    get getPomeriti(){
        return this.pomeritiZa;
    }

    set setPomeriti(value) {
        if (this instanceof Helikopter) {
            if (this.predjenaKilom() + value > 500) {
                alert("Helikopter ne moze da leti dalje od 500km!");
            } else {
                this.pomeritiZa = value;
            }
        }
    }

    predjenaKilom():number{
        this.kilom+=this.getPomeriti;
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
    constructor(public kurs: string,protected pomeritiZa: number) {
        super(pomeritiZa);
        this.kurs = kurs;
    }
}

let h=new Helikopter(32);
console.log(h.predjenaKilom());
h.setPomeriti=480;
console.log(h.getPomeriti);
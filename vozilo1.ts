abstract class Vozilo {
    tezina: number;
    naziv: string;
    opis: string;

    constructor(tezina: number, naziv: string, opis: string) {
        this.tezina = tezina;
        this.naziv = naziv;
        this.opis = opis;
    }

    abstract prerTezina(): number;

    abstract vozilo():string;
    
}


class TeretnoVozilo extends Vozilo {
    tezinaTereta:number;
    constructor( tezinaTereta:number,tezina: number, naziv: string, opis: string){
        super(tezina,naziv,opis);
        this.tezinaTereta=tezinaTereta;
    }
    vozilo(): string {
        return("Teretno vozilo "+this.naziv+ " je "+this.opis);
    }
  

    prerTezina(): number {
        return this.tezina+this.tezinaTereta;
    }

}

class PutnickoVozilo extends Vozilo {
   
    tezinaPutnika:number;
    brojPutnika: number;
 

    constructor(tezina: number, naziv: string, opis: string, brojPutnika: number,tezinaPutnika:number) {
        super(tezina, naziv, opis);
        this.brojPutnika = brojPutnika;
        this.tezinaPutnika=tezinaPutnika;
        
    }
    prerTezina(): number {
        return this.tezina+this.brojPutnika * this.tezinaPutnika;
    }
    vozilo(): string {
        return("Putnicko vozilo "+this.naziv+ " je "+this.opis);;
    }
}




let tv1 = new TeretnoVozilo(1500,5000, "s", "addada");
let tv2 = new TeretnoVozilo(1000,5000,"f","dsfsf");
let tv3 = new TeretnoVozilo(1200,8000,"d","dsdwe");
let tv4 = new TeretnoVozilo(1700,9000,"r","desfwefe");
let tv5 = new TeretnoVozilo(1800,8500,"t","etreg");

let pv1 = new PutnickoVozilo(1500, "s", "dfdfs",5,50);
let pv2 = new PutnickoVozilo(1600, "r", "etet",4,60);
let pv3 = new PutnickoVozilo(1750, "y", "addsffsada",3,75);
let pv4 = new PutnickoVozilo(1750, "e", "ette",5,70);
let pv5 = new PutnickoVozilo(1700, "l", "sffs",4,70);

console.log(tv1);
console.log(tv1.vozilo());
console.log(pv1);
console.log(pv1.vozilo());

let nizVozila:Vozilo[]=[tv1,tv2,tv3,tv4,tv5,pv1,pv2,pv3,pv4,pv5];

function preracunaj():number{
    let s:number=0;
for(let i=0;i<nizVozila.length;i++){
    s+=nizVozila[i].prerTezina();
}
return s;
}

function opterecenostMosta():void{
    if(preracunaj()>50000){
        console.log("Na mostu se ne smeju naci sva vozila, njihova tezina je preko nosivosti mosta!");
    }else{
        console.log("Na mostu se mogu naci sva vozila, njihova tezina je manja od nosivosti mosta!");
    }
}
preracunaj();
console.log(opterecenostMosta());
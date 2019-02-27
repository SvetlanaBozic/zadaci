abstract class OsobaN{
    ime:string;
    constructor(ime:string){
        this.ime=ime;
    }

    prikaz(){
        return "Ime osobe je: "+this.ime;
    }
}

class Sportista extends OsobaN{
    sport:string;
    constructor(sport:string,ime:string){
        super(ime);
        this.sport=sport;
    }
    prikaz(){
        return super.prikaz()+", bavi se sportom: "+this.sport;
    }
}

let sportista1=new Sportista("kosarka","Mika");
let sportista2=new Sportista("odbojka","Mica");
let sportista3=new Sportista("tenis","Pera");

console.log(sportista1.prikaz());
console.log(sportista3.prikaz());

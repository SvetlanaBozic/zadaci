class Osoba{
    
    constructor(public JMBG:string,protected godRodjenja:number,public ime:string,public prezime:string){
        this.JMBG=JMBG;
        this.godRodjenja=godRodjenja;
        this.ime=ime;
        this.prezime=prezime;
    }

    get getGodRod(){
        return this.godRodjenja;
    }

    set setGodRod(god){
        if(god<1900 || god>2011){
            alert("Godina nije u opsegu");
        }else{
            this.godRodjenja=god;
        }
}

ispis():string{
    return "Ime: "+this.ime+" Prezime: "+this.prezime;
}
}

class Adresa{
   /* ulica:string;
    broj:string;
    grad:string;*/

    constructor(public ulica:string,public broj:string,public grad:string){
        this.ulica=ulica;
        this.broj=broj;
        this.grad=grad;
    }
    ispis():string{
        return "Ulica: "+this.ulica+" broj: "+this.broj+" grad: "+this.grad;
    }
}

class Student extends Osoba{
  adresa:string;

    constructor(public brojIndeksa:string,public godUpisa:number,public JMBG:string,protected godRodjenja:number,public ime:string,public prezime:string){
        super(JMBG,godRodjenja,ime,prezime);
        this.brojIndeksa=brojIndeksa;
        this.godUpisa=godUpisa;
    }

    unetiAdresu(adresa:Adresa):void{
        this.adresa=adresa.ispis();
    }

    vratiAdresu():string{
        return this.adresa;
    }

    godinePriUpisu():number{
        return this.godUpisa-this.getGodRod;
    }


    ispis():string{
        return super.ispis()+" sa adresom "+this.vratiAdresu()+" je upisao fakultet sa "+this.godinePriUpisu()+" godine."
    }
}

let student = new Student("12/06",2006,"12546565",1987,"Mika","Mikic");
let ad=new Adresa("Pere Perica","7","Beograd");
student.unetiAdresu(ad);
console.log(student.ispis());
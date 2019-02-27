class ZdravoSvima {
    pozdrav: string;
    ime:string;
    prezime:string;
    constructor(poruka: string, ime:string, prezime:string) {
        this.pozdrav = poruka;
        this.ime=ime;
        this.prezime=prezime;
    }
    Zdravo() {
        return "Zdravo " + this.pozdrav+" "+this.ime+" "+this.prezime;
    }
}

let Objekat = new ZdravoSvima("svima","Mika","Mikic");

let button = document.createElement('button');
button.textContent = "Dont push the button!";
button.onclick = function() {
    alert(Objekat.Zdravo());
}

document.body.appendChild(button); 

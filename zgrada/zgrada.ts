class Zgrada{
    private brojSpratova:number;
    visinaZgrade:number;

    constructor(brojSpratova:number,visinaZgrade:number){
        this.brojSpratova=brojSpratova;
        this.visinaZgrade=visinaZgrade;
    }

        get getBrojSpratova(){
            return this.brojSpratova;
        }

        set setBrojSpratova(brojSp){
            if (brojSp>0 && brojSp<9){
                this.brojSpratova=brojSp;
            }else{
                throw `Zgrada ne moze da ima ${brojSp} spratova`;
            }
        }



    prosecnaVisinaSprata(){
        return (this.visinaZgrade/this.brojSpratova).toFixed(2);
    }

    trebaLift(maxVisina:number,maxBrojSpratova:number):string{
        let vrati:string=(this.visinaZgrade>maxVisina ||this.brojSpratova>maxBrojSpratova)?"Neophodno je ugraditi lift":"Ne treba lift";
        return vrati;
    }
}

let zgrada=new Zgrada(8,20);
console.log("Prosecna visina sprata: "+zgrada.prosecnaVisinaSprata());
console.log("Da li treba lift? "+zgrada.trebaLift(25,9));
zgrada.setBrojSpratova=10;
console.log("Broj spratova: "+zgrada.getBrojSpratova);

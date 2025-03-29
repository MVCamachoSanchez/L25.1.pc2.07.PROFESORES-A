import Cl_profesor from "./Cl_profesor.js";

export default class Cl_contratado extends Cl_profesor{
    constructor(bono, nombre, cantHoras){
        super(bono, nombre)
         this.cantHoras = cantHoras;
    }

    sueldoFinal(){
        return this.bono + this.cantHoras * 10;
    }
}
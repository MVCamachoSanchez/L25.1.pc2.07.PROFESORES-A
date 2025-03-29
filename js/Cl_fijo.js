import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor{
    constructor(bono, nombre, sueldo){
        super(bono, nombre)
        this.sueldo = sueldo;
    }

    sueldoFinal(){
        return this.bono + this.sueldo;
    }
}
export class Users {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(no, ap, em, co) {
        this.nombre = no;
        this.apellido = ap;
        this.email = em;
        this.conectado = co;
    }
}
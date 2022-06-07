export class UsuarioRegistro {
    id?: number;
    dni:string;
    nombre:string;
    email: string;
    password: string;


    constructor(email:string,password:string,dni:string,nombre:string)
    {
        this.dni=dni;
        this.nombre=nombre;
        this.email = email;
        this.password = password;
    }
}

export class Comentario {
    id?: number;
    comentario: string;
    valoracion: number;
    pelicula: any;
    usuario: any;
    constructor(comentario:string,valoracion:number,pelicula:any,usuario:any)
    {
        comentario = this.comentario;
        valoracion = this.valoracion;
        pelicula = this.pelicula;
        usuario = this.usuario;
    }
}

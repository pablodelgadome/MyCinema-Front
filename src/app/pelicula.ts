export class Pelicula {
    id?: number;
    categoria: string;
    duracion: string;
    productor: string;
    sinapsis: string;
    titulo: string;
    valoracion: number
    constructor(categoria:string,duracion:string,productor:string,sinapsis:string, titulo: string, valoracion: number)
    {
        categoria = this.categoria;
        duracion = this.duracion;
        productor = this.productor;
        sinapsis = this.sinapsis;
        titulo = this.titulo;
        valoracion = this.valoracion;
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';
import { Pelicula } from '../pelicula';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  token: any;
  tipo: any;
  activo: any;
  peliculas: any[];
  salas: any[];
  pelicula: any
  categoria: any;
  sala:any;
  complemento:any;
  user:any;
  tridimensional:any;
  precioTotal:any;

  constructor(private http: HttpClient) { }

  login(email: string,password: string):Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/api/login',new Usuario(email,password));

    /*return new Promise(resolve => {
      // <any>: para crearnos una interface, por ejemplo: <Usuario>
      this.http.post<any>('http://localhost:8080/api/login',
      {
        email: email,
        password: password 
        
      }).subscribe(data => {// raul@raul.com devuelve los datos a quien llame a esta función
        this.token = data.data.token;// para guardar solamente el token
        console.log(data);
        this.user();
        resolve(this.token);
      });
  });*/
  }

  register(dni:string,nombre:string,email:string,password:string)
  {
    return new Promise(resolve => {

      this.http.post<any>('http://localhost:8080/api/register',
      {
        dni: dni,
        nombre: nombre,
        email: email,
        password: password,
        
      }).subscribe(data => {

        console.log(data);

        resolve(data);
        
      });
  });
  }

  obtenerPeliculas(): Observable<any>
  {
    return this.http.get<any[]>('http://localhost:8080/api/listPeliculas');
    /*return new Promise(resolve => {
 
      this.http.get('http://localhost:8080/api/listPeliculas', {
        // para crearnos la cabecera
        headers: new HttpHeaders().set('Authorization','Bearer '+token)
      }).subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        console.log('Error, '+err);
      });
    });*/
  }

  obtenerPeliculasFiltro(categoria:string): Observable<any>
  {
    return this.http.get<any[]>('http://localhost:8080/api/filtroPeliculas/'+categoria);
  }

  obtenerSalas(): Observable<any>
  {
    return this.http.get<any[]>('http://localhost:8080/api/listSalas');
  }

  obtenerComplementos(): Observable<any>
  {
    return this.http.get<any[]>('http://localhost:8080/api/listComplementos');
  }

  obtenerComentarios(titulo:any): Observable<any>
  {
    return this.http.get<Pelicula[]>('http://localhost:8080/api/listComentarios/'+titulo);
  }

  /*crearComentario(comentario:string,valoracion:number,pelicula:any,usuario:any): Observable<Comentario>
  {    
    return this.http.post<Comentario>('http://localhost:8080/api/createComentario',new Comentario(comentario,valoracion,pelicula,usuario));
  }*/

  crearComentarioo(comentario:string,valoracion:number,pelicula:any,usuario:any)
  {
    return new Promise(resolve => {
      // <any>: para crearnos una interface, por ejemplo: <Usuario>
      this.http.post<any>('http://localhost:8080/api/createComentario',
      {
        comentario: comentario,
        valoracion: valoracion,
        pelicula: pelicula,
        usuario: usuario,
        
      }).subscribe(data => {

        console.log(data);

        resolve(data);
        
      });
  });
  }
  
  obtenerEntradas(): Observable<any>
  {
    return this.http.get<any[]>('http://localhost:8080/api/listEntradas');
  }

  comprarEntrada(fecha,precio,complemento,pelicula,sala,usuario,butaca,fila)
  {
    return new Promise(resolve => {
      // <any>: para crearnos una interface
      this.http.post<any>('http://localhost:8080/api/comprarEntrada',
      {
        fecha: fecha,
        precio: precio,
        complemento: complemento,
        pelicula: pelicula,
        sala: sala,
        usuario: usuario,
        butaca: butaca,
        fila: fila
        
      }).subscribe(data => {

        console.log(data);

        resolve(data);
        
      });
  });
  }

}

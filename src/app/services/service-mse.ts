import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const URL:string = '/v1/';
//const URL:string = '/v1/sortingHat/';
const KEY:string = "$2a$10$LPZUVHF275suTxDFZtnjBetPZ8TLYDRqvvUhQFOC6P3yK7F9lf4Q."
@Injectable({
  providedIn: 'root'
})
export class ServiceMSE {
   

  httpOptions:any = {};
  constructor(public http: HttpClient) { 
  this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json', 'Access-Control-Allow-Origin': '*'}) };
  /**
   this.httpOptions = { headers: new HttpHeaders(
    { 'Content-Type':  'application/json',
   'Access-Control-All2ow-Origin': '*',
   'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'}) };
   */
  
  }


  /**
   * Metodo de prueba
   * @param service El nombre del servicio al cual se va a consumir los datos
   */
  GetRequest(service: string){
     let url = `${URL}${service}?key=${KEY}`;
    console.log('url ', url )
    return this.http.get(url, this.httpOptions);
  }


  /**
   * Obtiene todas las casas cons sus respectivos miembros
   * @param nameService El nombre del servicio al cual se va a consumir
   */
  GetHouse(nameService:string){
   
    return this.http.get(`${URL}${nameService}?key=${KEY}`, this.httpOptions);
  }

  GetMembers(nameService:string, id:string){
    return this.http.get(`${URL}${nameService}?key=${KEY}&_id=${id}`, this.httpOptions);
  }
}

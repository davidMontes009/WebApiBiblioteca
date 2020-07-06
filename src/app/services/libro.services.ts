import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {GLOBAL} from './global';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';

import {LibroModel} from '../models/Libro.model';

const headers = new Headers({
    'accept': 'application/json',
    'Content-Type': 'application/json'
    ,'Access-Control-Allow-Origin':'*'
    ,'Access-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
 });

 @Injectable({
    providedIn: 'root'
  })
  export class LibroService {
    constructor(private _http:Http){

    }

    //Servicio para registrar un contacto a la agenda
    insertLibro(objLibro:LibroModel){
        //Crea un objeto de tipo auto con los tres puntos hace una replica de las propiedades del objeto auto sin tener que escribirlas todas
      let LibroTemp:LibroModel = {
        ...objLibro
    }
    console.log(LibroTemp);
    //Borra la propiedad id del auto temp por que no se necesita en el put
    delete LibroTemp.IdLibro;
       //convierete los parametros en tipo json 
      let params = JSON.stringify(LibroTemp);
      //recupera el endPoint a utilizar 
      let endPoint = GLOBAL.url + GLOBAL.endPointLibro.addLibro;
      //Ejecuta servicio y devuelve el resultado 
      return this._http.post(endPoint
                              ,params
                              ,{headers}).map(resp => resp.json());
     }

     //Servicio para registrar un contacto a la agenda
    UpdateLibro(objLibro:LibroModel){
       //convierete los parametros en tipo json 
      let params = JSON.stringify(objLibro);
      console.log(objLibro)
      //recupera el endPoint a utilizar 
      let endPoint = GLOBAL.url + GLOBAL.endPointLibro.updateLibro;
      //Ejecuta servicio y devuelve el resultado 
      return this._http.put(endPoint
                              ,params
                              ,{headers}).map(resp => resp.json());
     }

     //Servicio para consultar todos los contactos
     getAllLibros(){
         let endPoint = GLOBAL.url + GLOBAL.endPointLibro.getLibros;
        return this._http.get(endPoint,
                                {headers}).map(resp => resp.json()); 
    }

    //Servicio para eliminar un contacto 
    deleteLibro(idLibro:number){
        let endPoint = GLOBAL.url + GLOBAL.endPointLibro.deleteLibro;
        return this._http.delete(endPoint + idLibro,
            {headers}).map(resp => resp.json());
    }

     

  }

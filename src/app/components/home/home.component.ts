import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {LibroModel} from '../../models/Libro.model';
import {LibroService} from '../../services/libro.services';
import { concat } from 'rxjs';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LibroService]
})

export class HomeComponent  {

  public titulo:string;
  public listLibros:LibroModel[];
  public objLibro:LibroModel; 

  constructor(private _route:ActivatedRoute
              ,private _router:Router
              ,private _libroService:LibroService
              ) { 
    this.titulo = "Biblioteca";
    this.objLibro= new LibroModel(null,null,null,null); 
  }

  ngOnInit() {
    this.getAllLibros();
  }

  //Métdo para consultar todos los contactos 
  getAllLibros(){
    this._libroService.getAllLibros().subscribe(result =>{
      console.log(result);
      this.listLibros = result;
    },
    error => {
        var errorMessaje = <any>error;
        console.log(errorMessaje);
    });
  }

  //Método para agregar un concato a la agenda
  AddLibro(){
    console.log(this.objLibro);
    this._libroService.insertLibro(this.objLibro).subscribe(result =>{
        Swal.fire({
          allowOutsideClick: false,
          title: '!Alert',
          text: result.message
        });
    },
    error => {
        var errorMessaje = <any>error;
        console.log(errorMessaje);
    });
    //Actualiza Contacots 
    this.ngOnInit();
  }

  //Método para agregar un concato a la agenda
  UpdateLibro(Libro:LibroModel){
    this.objLibro.IdLibro = Libro.IdLibro;
    this.objLibro.NoVolumen = Libro.NoVolumen;
    this.objLibro.Titulo = Libro.Titulo;
    this.objLibro.IdLocalizacion = Libro.IdLocalizacion; 
  }

  //Método para confimar la actualizacion de datos 
  confirmInfoLibro(){
      this._libroService.UpdateLibro(this.objLibro).subscribe(result =>{
        Swal.fire({
          allowOutsideClick: false,
          title: '!Alert',
          text: result.message
        });
    },
    error => {
        var errorMessaje = <any>error;
        console.log(errorMessaje);
    });
    //Actualiza Contacots 
    this.ngOnInit();
  }

  //Método para eliminar un contacto por medio de su id
  deleteLibro(IdLibro:number){
    console.log(IdLibro);
    this._libroService.deleteLibro(IdLibro).subscribe(result =>{
        Swal.fire({
          allowOutsideClick: false,
          title: '!Alert',
          text: result.message
        });
    },
    error => {
        var errorMessaje = <any>error;
        console.log(errorMessaje);
    });
    //Actualiza Contacots 
    this.ngOnInit();
  }

   

}

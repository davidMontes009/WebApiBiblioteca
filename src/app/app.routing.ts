//importa mosdulos para el router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, Route} from '@angular/router';

//import {AppComponent} from '../app/app.component';
import {HomeComponent} from '../app/components/home/home.component';
import {ErrorComponent}from '../app/components/error/error.component';


const appRouters: Routes = [
    { path:'home',component:HomeComponent }
    ,{ path:'',component:HomeComponent }
    ,{ path:'**',component:ErrorComponent }
]

//exporta variable appRoutingProviders es un array de cualquier tipo vacio lo ocupa angular para cargar el provider de la ruta y funcione 
export const appRoutingProviders: any[] = [];

// utilza metodo forRoot para decir que array debe cargar para que utilice las rutas creadas 
export const routing: ModuleWithProviders= RouterModule.forRoot(appRouters);
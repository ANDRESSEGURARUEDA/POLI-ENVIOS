// Importamos los módulos necesarios de Angular
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos los componentes que se usarán en las rutas
import { VistaPreviaComponent } from './modules/dashboard/client/vista-previa/vista-previa.component';
import { RegisterComponent } from './modules/dashboard/client/Envios/register.component';
import { LoginComponent } from './modules/dashboard/login/Login/login.component';
import { AcercaDe } from './modules/dashboard/acerca/acerca.component';
import { CreateUserComponent } from './modules/dashboard/administrator/create-user/create-user.component';
import { ListUsersComponent } from './modules/dashboard/administrator/list-users/list-users.component';

// Definimos las rutas de la aplicación
export const routes: Routes = [
    { path: 'envios', component: RegisterComponent }, // Ruta para el componente de registro de envíos
    { path: 'vistaPrevia', component: VistaPreviaComponent }, // Ruta para el componente de vista previa
    { path: 'login', component: LoginComponent }, // Ruta para el componente de login
    { path: 'acerca', component: AcercaDe }, // Ruta para el componente de acerca de nosotros
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección a la ruta de envíos si la ruta está vacía
   // { path: '', redirectTo: '/envios', pathMatch: 'full' }, // Redirección a la ruta de envíos si la ruta está vacía
    { path: 'create-user', component: CreateUserComponent},
    { path: 'list-users', component: ListUsersComponent},

];

// Decorador @NgModule para definir el módulo de enrutamiento
@NgModule({
    imports: [RouterModule.forRoot(routes)], // Importamos el RouterModule con las rutas definidas
    exports: [RouterModule] // Exportamos el RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { } // Exportamos la clase AppRoutingModule

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Módulo de tarjetas de Angular Material
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones de Angular Material
import { Router, RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  document: string;
  email: string;
  rol: String;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Daniela Agredo', document: "100796853", email: "daniela@gmail.com", rol: "Administrador"},
  {position: 2, name: 'Andres Rueda', document: "543432234", email: "andres@gmail.com", rol: "Cliente"},
  {position: 3, name: 'Mateo Rangel', document: "106867865", email: "mateo@gmail.com", rol: "Administrador"},
  {position: 4, name: 'Jhojan Ramirez', document: "15640245", email: "jhojan@gmail.com", rol: "Cliente"},
  {position: 5, name: 'Ruben Castillo', document: "62324543", email: "ruben@gmail.com", rol: "Cliente"},
];

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule, MatPaginatorModule,
    MatButtonModule,
    RouterOutlet
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {

  displayedColumns: string[] = ['position', 'name', 'document', 'email','rol'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router) { }

  goToCreateUser(){
    this.router.navigate(['/create-user']);
  }
}



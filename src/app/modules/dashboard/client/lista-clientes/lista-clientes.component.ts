// Importa módulos comunes de Angular
import { CommonModule } from '@angular/common';
// Importa el decorador Component de Angular
import { Component } from '@angular/core';
// Importa el servicio Router y el componente RouterOutlet de Angular Router
import { Router, RouterOutlet } from '@angular/router';
// Importa varios módulos de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
// Importa el módulo ReactiveFormsModule para formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
// Importa el módulo MatSelectModule de Angular Material
import { MatSelectModule } from '@angular/material/select';

// Define un componente de Angular con el decorador @Component
@Component({
  // Selector del componente, usado en el HTML para insertar este componente
  selector: 'app-vista-previa',
  // Indica que este componente es independiente (standalone)
  standalone: true,
  // Lista de módulos que este componente necesita importar
  imports: [
    CommonModule, 
    RouterOutlet, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule
  ],
  // Ruta al archivo de plantilla HTML del componente
  templateUrl: './lista-clientes.component.html',
  // Ruta al archivo de estilos CSS del componente
  styleUrl: './lista-clientes.component.css'
})

export class ListaClientesComponent {
  // Datos de muestra de clientes
  clientes = [
    {
      nombre: 'Juan Pérez',
      correo: 'juan.perez@example.com',
      telefono: '555-1234',
      direccion: 'Calle Falsa 123',
      edad: 30,
      fechaRegistro: '2023-09-12',
      estado: 'Activo'
    },
    {
      nombre: 'María López',
      correo: 'maria.lopez@example.com',
      telefono: '555-5678',
      direccion: 'Av. Principal 456',
      edad: 25,
      fechaRegistro: '2023-08-25',
      estado: 'Inactivo'
    },
    {
      nombre: 'Carlos García',
      correo: 'carlos.garcia@example.com',
      telefono: '555-9876',
      direccion: 'Plaza Mayor 789',
      edad: 40,
      fechaRegistro: '2023-07-20',
      estado: 'Activo'
    },
    {
      nombre: 'Ana Martínez',
      correo: 'ana.martinez@example.com',
      telefono: '555-6543',
      direccion: 'Calle Nueva 101',
      edad: 35,
      fechaRegistro: '2023-06-10',
      estado: 'Inactivo'
    }
  ];

    // Constructor de la clase, inyecta el servicio Router
    constructor(private router: Router) { }

    // Método para navegar a la ruta '/envios'
    goToEnvios() {
      this.router.navigate(['/envios']);
    }
}

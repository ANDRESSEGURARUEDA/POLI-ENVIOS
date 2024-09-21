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
  templateUrl: './vista-previa.component.html',
  // Ruta al archivo de estilos CSS del componente
  styleUrl: './vista-previa.component.css'
})
// Define la clase del componente
export class VistaPreviaComponent {
  // Constructor de la clase, inyecta el servicio Router
  constructor(private router: Router) { }

  // Método para navegar a la ruta '/envios'
  goToEnvios() {
    this.router.navigate(['/envios']);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// Importación de módulos necesarios para el componente, incluyendo Angular core, enrutador y varios módulos de Angular Material.

@Component({
  selector: 'app-root', // Define el selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [RouterOutlet,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule], // Lista de módulos importados que el componente necesita
  templateUrl: './app.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrl: './app.component.css', // Ruta al archivo de estilos CSS del componente
})
export class AppComponent {
  title = 'POLI-ENVIOS'; // Título de la aplicación

  constructor(private router: Router) { } // Inyección del servicio Router para la navegación

  goToEnvios() {
    this.router.navigate(['/envios']); // Método para navegar a la ruta '/envios'
  }

  goToVistaPrevia() {
    this.router.navigate(['/vistaPrevia']); // Método para navegar a la ruta '/vistaPrevia'
  }

  goToLogin() {
    this.router.navigate(['/login']); // Método para navegar a la ruta '/login'
  }

  goToListUsers() {
    this.router.navigate(['/list-users']); // Método para navegar a la ruta '/envios'
  }

  isCurrentRoute(ruta: string): boolean {
    return this.router.url === ruta;
  }

}

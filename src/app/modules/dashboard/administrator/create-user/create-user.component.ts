import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Módulo de tarjetas de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo de campos de formulario de Angular Material
import { MatInputModule } from '@angular/material/input'; // Módulo de entradas de texto de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Módulo de barras de herramientas de Angular Material
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones de Angular Material
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Herramientas para formularios reactivos
import { MatCheckboxModule } from '@angular/material/checkbox'; // Módulo de checkboxes de Angular Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Importa este módulo
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

}

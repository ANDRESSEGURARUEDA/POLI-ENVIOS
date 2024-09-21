import { CommonModule } from '@angular/common'; // Módulo común de Angular
import { Component, OnInit } from '@angular/core'; // Componentes de Angular
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Herramientas para formularios reactivos
import { MatButtonModule } from '@angular/material/button'; // Módulo de botones de Angular Material
import { MatCheckboxModule } from '@angular/material/checkbox'; // Módulo de checkboxes de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo de campos de formulario de Angular Material
import { MatInputModule } from '@angular/material/input'; // Módulo de entradas de texto de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Módulo de barras de herramientas de Angular Material
import { MatCardModule } from '@angular/material/card'; // Módulo de tarjetas de Angular Material

@Component({
  selector: 'app-register', // Selector del componente
  templateUrl: './register.component.html', // Ruta del archivo HTML del componente
  styleUrls: ['./register.component.css'], // Ruta del archivo CSS del componente
  standalone: true, // Indica que este componente es independiente
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule
  ],
})
export class RegisterComponent implements OnInit {
  registroForm: FormGroup; // Grupo de formulario para manejar el estado del formulario
  passwordsNoCoinciden: boolean = false; // Bandera para verificar si las contraseñas coinciden

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario con sus controles y validaciones
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      aceptarTerminos: [false, Validators.requiredTrue] // Checkbox debe estar seleccionado
    });
  }

  ngOnInit(): void {
    // Suscribirse a los cambios en el campo de confirmación de contraseña
    this.registroForm.get('confirmPassword')?.valueChanges.subscribe(() => {
      // Compara las contraseñas para establecer la bandera
      this.passwordsNoCoinciden = this.registroForm.get('password')?.value !== this.registroForm.get('confirmPassword')?.value;
    });
  }

  onSubmit(): void {
    // Maneja el envío del formulario
    if (this.registroForm.valid && !this.passwordsNoCoinciden) {
      console.log('Formulario enviado', this.registroForm.value);
      // Aquí puedes manejar el envío del formulario
    } else {
      console.log('Formulario no válido');
    }
  }
}

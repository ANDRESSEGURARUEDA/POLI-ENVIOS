import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Aquí puedes agregar lógica para manejar el envío del formulario,
  // autenticación, etc.
    constructor(private router: Router) {}
  
    navigateToAcerca() {
      this.router.navigate(['/acerca']);
    }
    imagePath = '/assets/img_pc_login.png';
}


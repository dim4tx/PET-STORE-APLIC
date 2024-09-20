import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
        // Lógica para autenticar al usuario
        console.log(this.loginForm.value);
        // Aquí puedes agregar la lógica para enviar los datos a tu servicio de autenticación
    } else {
        // Manejar errores de validación
        this.loginForm.markAllAsTouched(); // Marca todos los controles como tocados
        console.log("Formulario no válido. Verifica los campos.");
    }
}

  
}

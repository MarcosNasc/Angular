import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl(""),
    cpf: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  });

  constructor(){}

  ngOnInit(){
  
  }

  AddUser() {
      let formValues = this.registerForm.value;
  }
}

import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm =  this.fb.group({
    name: [""],
    cpf: [""],
    email: [""],
    password:[""],
    confirmPassword:[""]
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(){
  
  }

  AddUser() {
      let formValues = this.registerForm.value;
  }
}

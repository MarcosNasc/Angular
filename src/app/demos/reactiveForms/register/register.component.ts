import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm? : FormGroup;
 
  constructor(private fb: FormBuilder){ }

  ngOnInit(){
    this.registerForm = this.fb.group({
      name: [""],
      document: [""],
      email: [""],
      password:[""],
      confirmPassword:[""]
    });
  }

  AddUser() {
      let formValues = this.registerForm;
  }
}

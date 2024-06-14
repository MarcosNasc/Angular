import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormBuilder, FormGroup } from '@angular/forms';
import { User } from './models/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm? : FormGroup;
  user! : User;
 
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
      this.user = Object.assign({},this.user , this.registerForm?.value)
      console.log(this.user);
  }
} 

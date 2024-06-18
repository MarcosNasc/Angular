import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './models/User';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm? : FormGroup;
  user! : User;
  formResult : string = "";
 
  constructor(private fb: FormBuilder){ }

  ngOnInit(){
    this.registerForm = this.fb.group({
      name: ["",Validators.required],
      document: ["",Validators.required],
      email: ["",[Validators.required,Validators.email]],
      password:["",Validators.required],
      confirmPassword:["",Validators.required]
    });
  }

  AddUser() {
    if(this.registerForm?.dirty && this.registerForm.valid){
      this.user = Object.assign({},this.user , this.registerForm?.value)
      this.formResult = JSON.stringify(this.registerForm?.value);
      console.log(this.user);
    }else{
      this.formResult = "Não submeteu!";
    }
  }
} 

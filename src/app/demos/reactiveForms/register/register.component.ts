import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { User } from './models/User';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validations';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit , AfterViewInit{

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements !: ElementRef[];

  registerForm! : FormGroup;
  user! : User;
  formResult : string = "";

  validationMessages !: ValidationMessages;
  genericValidator !: GenericValidator;
  displayMessage : DisplayMessage = {};

 
  constructor(private fb: FormBuilder){ 
    this.validationMessages = {
      name: {
        required:"O Nome é requerido",
        minlength: "O nome precisa ter no mínimo 2 caracteres",
        maxlength: "O nome precisa ter no máximo 150 caracteres"
      },
      document:{
        required:"O Documento é requerido",
        cpf:"CPF em formato inválido",
      },
      email:{
        required: "O Email é requerido",
        email: "Email em formato inválido",
      },
      password:{
        required:"A Senha é requerida",
        rangelength: "A Senha deve ter entre 6 e 15 caracteres",
      },
      confirmPassword:{
        required:"Informa a  Senha é novamente",
        rangeLength: "A Senha deve ter entre 6 e 15 caracteres",
        equalTo: " As senhas não conferem"
      }
    }

    this.genericValidator =  new GenericValidator(this.validationMessages);

  }

  ngOnInit(){
    this.registerForm = this.fb.group({
      name: ["",Validators.required],
      document: ["",Validators.required],
      email: ["",[Validators.required,Validators.email]],
      password:["",Validators.required],
      confirmPassword:["",Validators.required]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs : Observable<any>[] = this.formInputElements
                       .map((formControl : ElementRef) => fromEvent(formControl.nativeElement, "blur"));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.messagesProcess(this.registerForm)
    })   
  }


  AddUser() {
    if(this.registerForm.dirty && this.registerForm.valid){
      this.user = Object.assign({},this.user , this.registerForm.value)
      this.formResult = JSON.stringify(this.registerForm.value);
      // console.log(this.user);
    }else{
      this.formResult = "Não submeteu!";
    }
  }
} 

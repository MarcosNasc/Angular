import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { RegisterComponent } from "../demos/reactiveForms/register/register.component";

@Injectable()
export class RegisterGuard implements CanDeactivate<RegisterComponent>{

    canDeactivate(component : RegisterComponent) {
        if(component.changeNotSave){
            return window.confirm("Tem certeza que deseja abandonar o preenchimento do formulário?")
        }
        return true;
    }
    
}
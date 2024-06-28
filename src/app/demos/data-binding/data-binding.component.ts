import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  public contadorClique : number = 0;
  public urlImagem : string = "https://analogjs.org/img/logos/angular-gradient.png";
  public nome? : string ;

  show(){
    window.alert(this.contadorClique);
  }

  adicionarClique(){
    this.contadorClique++;
  }

  reduzirClique(){
    if(this.contadorClique == 0) return;
    this.contadorClique--;
  }
  zerarClique(){
    this.contadorClique = 0;
  }

 
}

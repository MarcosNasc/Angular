import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
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

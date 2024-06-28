import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public copyright : string = "2024 Marcos Nascimento";
  public framework : string = "AngularV17";
}

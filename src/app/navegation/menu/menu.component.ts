import { Component } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  nav : Nav[] = [
    {
      id:1,
      link:'/home',
      name:'Home',
      exact:true,
      admin: false,
    },
    {
      id:2,
      link:'/products',
      name:'Products',
      exact:true,
      admin: false,
    },
    {
      id:3,
      link:'/about',
      name:'About',
      exact:true,
      admin: false,
    },
    {
      id:4,
      link:'/contact',
      name:'Contact',
      exact:true,
      admin: false,
    },
    {
      id:5,
      link:'/feature-data-binding',
      name:'Features',
      exact:true,
      admin: false,
    },
    {
      id:6,
      link:'/register',
      name:'Register',
      exact:true,
      admin: false,
    },
  ]
}

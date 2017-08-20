import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="navbar navbar-default">
    <ul class="nav navbar-nav">
      <li><a [routerLink]="['/home']">Home</a></li>
      <li><a [routerLink]="['/quiz']">quiz</a></li>
    </ul>
  </div>
  `
})
export class NavbarComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  //templateUrl: './app.component.html',
  template: `
  <ul class="nav navbar-nav">
    <li><a>Home</a></li>
    <li><a>Product List</a></li>
  </ul>

	<h1>{{title}}</h1>
	<pm-products></pm-products>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product Management';
}
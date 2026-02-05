import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
courseCode: string ='APPDEV1';
description: string ='Angular is web framework that empowers developers to build fast.';
units: number = 3;
isActive: boolean= true;
stat: string = 'Active';
welcoming: string = 'Welcome to the Home Page!';
}

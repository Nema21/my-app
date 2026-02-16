import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// courseCode: string ='APPDEV1';
// description: string ='Angular is web framework that empowers developers to build fast.';
// units: number = 3;
// isActive: boolean= true;
// stat: string = 'Active';
// welcoming: string = 'Welcome to the Home Page!';

appTitle: string = 'Welcome to Angular 20';
userImageUrl: string = 'https://www.pngmart.com/files/23/Anya-Forger-PNG-Isolated-File.png';
isHighlighted: boolean = true;
currentDate: Date = new Date();

}

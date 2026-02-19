import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GradeCalculatorComponent } from './grade-calculator/grade-calculator.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[NaviComponent, RouterOutlet, FormsModule, CommonModule, GradeCalculatorComponent],
  standalone:true,
  
})
export class AppComponent {
   title = 'my-app';
  // title: string = "Angular App";
  // score: number = 95;
  // getGrade(): string { return this.score >= 60 ? "PASS" : "FAIL"; }
  // currentYear: number = new Date().getFullYear();

  // isDisabled: boolean = true;
  // imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZCHcR-xlK1EKY-N_Ylh5XG6zunvUPLeY5g&s";
  // inputMax: number = 100;

  // count: number = 0;
  // typedText: string = '';
  // lastKey: string = "";
  // onClick(): void { this.count++; }
  // onKey(event: KeyboardEvent): void { this.lastKey = event.key; }
  // onInput(event: Event): void {this.typedText = (event.target as HTMLInputElement).value;}

  // studentName: string = "Maria";
  // score2: number = 85;


  // isWide: boolean = false; 
  // span: number = 2;
  // ariaDesc: string = "User score input";
  // userId: string = "u-042";


  // isActive: boolean = false;
  // isError: boolean = true;
   
  // size: string = "medium"; // "small" | "medium" | "large"
  // toggleActive(): void { this.isActive = !this.isActive; }
  // toggleError(): void { this.isError = !this.isError;}




  
}

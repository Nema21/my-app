import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-calculator',
  imports: [FormsModule],
  templateUrl: './grade-calculator.component.html',
  styleUrl: './grade-calculator.component.css'
})
export class GradeCalculatorComponent {
  studentName: string = "Your Name";
  score: number = 75;
  gradeColor: string = "#2E75B6";
  passing: boolean = true;
  colSpan: number = 2;
  isHighlighted: boolean = false;

  onScoreInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.score = Number(input.value);

    this.passing = this.score >= 60;
    if (this.score >= 90) this.gradeColor = '#28a745'; 
    else if (this.score >= 80) this.gradeColor = '#17a2b8';
    else if (this.score >= 70) this.gradeColor = '#ffc107'; 
    else if (this.score >= 60) this.gradeColor = '#fd7e14'; 
    else this.gradeColor = '#dc3545'; 
  }
  // A method to compute the letter grade:
  getLetterGrade(): string {
  if (this.score >= 90) return "A";
  else if (this.score >= 80) return "B";
  else if (this.score >= 70) return "C";
  else if (this.score >= 60) return "D";
  else return "F";
  }
  
  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

}

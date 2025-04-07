import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  quizForm: FormGroup;
  submitted = false;
  score = 0;
  results: string[] = [];

  questions = [
    {
      key: 'q1',
      question: 'Who is the CEO of Tesla?',
      options: ['Elon Musk', 'Jeff Bezos', 'Tim Cook', 'Sundar Pichai']
    },
    {
      key: 'q2',
      question: 'What is the name of Tesla’s self-driving software?',
      options: ['Autopilot', 'DriveSafe', 'AutoGo', 'SmartRide']
    },
    {
      key: 'q3',
      question: 'Which was Tesla’s first car model?',
      options: ['Model S', 'Model 3', 'Roadster', 'Model X']
    },
    {
      key: 'q4',
      question: 'Where is Tesla’s Gigafactory 1 located?',
      options: ['Nevada', 'Texas', 'California', 'New York']
    }
  ];

  correctAnswers: { [key: string]: string } = {
    q1: 'Elon Musk',
    q2: 'Autopilot',
    q3: 'Roadster',
    q4: 'Nevada'
  };

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      q4: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.score = 0;
    this.results = [];

    if (this.quizForm.valid) {
      const answers = this.quizForm.value;

      Object.keys(answers).forEach((key, index) => {
        const typedKey = key as keyof typeof this.correctAnswers;
        if (answers[key] === this.correctAnswers[typedKey]) {
          this.results.push(`Question ${index + 1}: ✅ Correct`);
          this.score++;
        } else {
          this.results.push(`Question ${index + 1}: ❌ Incorrect`);
        }
      });

      this.quizForm.reset();
      this.submitted = false;
    }
  }

  get f() {
    return this.quizForm.controls;
  }
}

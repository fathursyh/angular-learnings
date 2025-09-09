import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  enteredInitialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  onSubmit() {
    console.log('SUBMIT')
  }
}

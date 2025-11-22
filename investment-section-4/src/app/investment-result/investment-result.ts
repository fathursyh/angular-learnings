import { Component, Input, input } from '@angular/core';
import { Result } from '../type';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  // ? newer (signal)
  // results = input<type>()

  @Input() results?: Result[];
}

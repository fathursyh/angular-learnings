import { Component, computed, inject, Input, input } from '@angular/core';
import { Result } from '../type';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  private investmentService = inject(InvestmentService);

  // ? getter way
  // get results() {
  //   return this.investmentService.resultsData();
  // }

  // ? computed way
  // results = computed(() => this.investmentService.resultsData());
  // ? store read only signal way
  results = this.investmentService.resultsData.asReadonly();

}

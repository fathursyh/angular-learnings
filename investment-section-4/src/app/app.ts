import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentType, Result } from './type';
import { InvestmentResult } from "./investment-result/investment-result";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Investment');
  resultsData: Result[] = [];
  calculateInvestmentResults(data: InvestmentType) {
    const annualData = [];
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.resultsData = annualData;
  }
}

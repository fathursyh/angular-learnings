import { Injectable, signal } from "@angular/core";
import { InvestmentType, Result } from "./type";

@Injectable({providedIn: 'root'})
export class InvestmentService {

  // ? old
  // resultsData: Result[] = []

  // ? signal
  resultsData = signal<Result[]>([])

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
    // ? if older
    // this.resultsData = annualData;
    // ? if signal
    this.resultsData.set(annualData);
  }
}

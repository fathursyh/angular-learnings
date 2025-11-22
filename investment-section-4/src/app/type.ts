export type InvestmentType = {
  initialInvestment: number,
  expectedReturn: number,
  duration: number,
  annualInvestment: number
}

export type Result = {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

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
  // ? older
  // resultsData: Result[] = [];

  // ? newer
  // resultsData = signal<Result[]>([]);


}

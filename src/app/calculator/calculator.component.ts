import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(num: string){
   
    if(this.waitForSecondNumber)
    {
      this.currentNumber = num;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = num: this.currentNumber += num;

    }
  }

  getDecimal(){
      if(!this.currentNumber.includes('.')){
          this.currentNumber += '.'; 
      }
    }

  private doCalculation(operFirst , secondOp){
    switch (operFirst){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }

  public getOperation(oper: string){

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = oper;
    this.waitForSecondNumber = true;

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

}


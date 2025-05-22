import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private ds:DataService){

  }

  dpstAcNo="";
  dpstAmnt="";
  dpstUpiPin="";

  wtrwAcNo = "";
  wtrwUpiPin = "";
  wtrwAmnt = "";

  deposit(){
    let AcNo = this.dpstAcNo
    let amount = this.dpstAmnt
    let UPIPin = this.dpstUpiPin
    const result = this.ds.deposit(AcNo,amount,UPIPin)
    if(result){
      alert(`${amount} deposited Successfully Your current balance : ${result.toFixed(2)}`)
      return true
    }
    else{
      alert("Transaction Failed")
      return false

    }
  }
  withdraw(){
    let AcNo = this.wtrwAcNo
    let amount = this.wtrwAmnt
    let UPIPin = this.wtrwUpiPin
    const result = this.ds.withdraw(AcNo,amount,UPIPin)
    if(result){
      alert(`${amount} withdraw Successfully Your current balance : ${result.toFixed(2)}`)
      return true
    }
    else{
      alert("Transaction Failed")
      return false

    }
  }
}

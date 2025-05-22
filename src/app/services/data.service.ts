import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any={
            1000:{
            acno : 1000,
            username : "ajil",
            upiPin : 1111,
            password :"pswd1",
            balance : 10000
            },
            1001:{
            acno : 1001,
            username : "ashok",
            upiPin : 2222,
            password :"pswd2",
            balance : 10000
            },
            1002:{
            acno : 1002,
            username : "albin",
            upiPin : 3333,
            password :"pswd3",
            balance : 10000
            },
            1003:{
            acno : 1003,
            username : "anu",
            upiPin : 4444,
            password :"pswd4",
            balance : 10000
            }
    }
  constructor(private router:Router) { }
  
    // register
    register(acno:number,username:any,upiPin:number,password:any){
        let db = this.database
        if(acno in db){
            
            return false
        }
        else{
            db[acno]={
                acno,
                username,
                upiPin,
                password,
                balance:0
            }
            return true
        }
    }

    login(userAcNo:any,userPswd:any) {
        let db = this.database
        if(userAcNo in db){
            // alert("Button clicked");
            if(userPswd == db[userAcNo]["password"]){
                return true
            }
            else{
                alert("Invalid Password")
                return false   
            }
        }
        else{
            alert("Invalid Account Number")
            return false
        }
    }

    deposit(acNo:any,amount:any,pin:any){
        let db = this.database
        if(acNo in db){
            if(pin == db[acNo]["upiPin"]){
                return db[acNo]['balance']+= +amount
            }
            else{
                alert("Incorrect UPI pin")
                return false
            }
        }
        else{
            alert("Invalid Account Number")
            return false
        }
    }

    withdraw(acNo:any,amount:any,pin:any){
        let db=this.database
        if(acNo in db){
            if(pin == db[acNo]["upiPin"]){
                return db[acNo]['balance']-= amount
            }
            else{
                alert("Incorrect UPI pin")
                return false
            }
        }
        else{
            alert("Invalid Account Number")
            return false
        }

    }
}

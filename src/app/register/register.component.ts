import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private router:Router,private ds:DataService, private fb:FormBuilder){
    this.registerForm=this.fb.group({
      userAcNo:[''],
      userName:[''],
      userPswd:[''],
      upiPin:[''],

    })
  }
  registerForm:FormGroup
  
  register(){
    let uName = this.registerForm.value.userName;
    let uPass = this.registerForm.value.userPswd;
    let uAcNo = this.registerForm.value.userAcNo;
    let upiPin = this.registerForm.value.upiPin;
    if(this.registerForm.valid){
      let result = this.ds.register(uAcNo,uName,upiPin,uPass)
      if(result){
        alert(`${uName} is regestered successfully`)
        this.router.navigate(['/'])
      }
      else{
        alert("Account already exist")
      }
    }
    else{
      alert("invalid credentials")
    }
  }

}

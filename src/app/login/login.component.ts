import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // one way binding - component to view
  aim = "Your Perfect Banking Partner";
  accNo = "Account Number Please";

  // userAcNo = ""
  // userPswd = ""

  constructor(private router:Router,private ds:DataService, private fb:FormBuilder){
    this.loginForm = this.fb.group({
      userAcNo:[''],
      userPswd:['']
    })
  }
  loginForm: FormGroup
  

  login(){
    // let AccNo = this.userAcNo;
    // let password = this.userPswd
    let AccNo = this.loginForm.value.userAcNo;
    let password = this.loginForm.value.userPswd
    let result = this.ds.login(AccNo,password)
    if(result){
      alert("Login Success")
      this.router.navigate(['/home'])
    }
  }
}

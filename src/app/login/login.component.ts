import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private router:Router,private ds:DataService){

  }
  // one way binding - component to view
  aim = "Your Perfect Banking Partner";
  accNo = "Account Number Please";

  userAcNo = ""
  userPswd = ""

  login(){
    let AccNo = this.userAcNo;
    let password = this.userPswd
    let result = this.ds.login(AccNo,password)
    if(result){
      alert("Login Success")
      this.router.navigate(['/home'])
    }
  }
}

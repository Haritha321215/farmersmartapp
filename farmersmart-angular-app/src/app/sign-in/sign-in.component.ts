import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:User =new User();
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
   
  }
  onSubmit(){
    console.log(this.user);
    if(this.user.emailId=="ab123@gmail.com" && this.user.passWord=="abc"){
      console.log("logged in successfully");
      this.router.navigate(['/products']);
    }
    else
    console.log("invalid username and pass word");
  }

}

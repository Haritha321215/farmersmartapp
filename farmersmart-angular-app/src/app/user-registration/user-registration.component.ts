import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user:User =new User();
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() : void{
  
  }

  saveUser(){
    let url="http://localhost:8080/api/v1/registration";
    this.http.post(url,this.user).subscribe(data=>{
      console.log(data);
      this.goToHomePage();
    },
    error => console.log(error));
  }
  goToHomePage(){
    this.router.navigate(['/sign-in']);
  }
    
   onSubmit(){
     console.log(this.user);
     this.saveUser();
   }

}

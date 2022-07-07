import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servises/user.service';
import { LoginResult } from 'src/app/model/login';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

form!:FormGroup

  constructor(private userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      "email":new FormControl(),
      "password":new FormControl()
     
    })
  }

  login(){
    return this.userservice.login(this.form.value).subscribe((res:LoginResult)=>{
         if(res.validlogin==true){
             alert('welcome '+res.username)
            let  userdata={token:res.token,username:res.username,email:res.email}
             localStorage.setItem("userdata",JSON.stringify(userdata));
             this.router.navigate(['dashboard',{username:res.username,email:res.email}])
         }
         else{
               alert(res.res)
         }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from 'src/app/servises/user.service';
import {Router} from '@angular/router'

interface Result{
  res:string
}


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form!:FormGroup




  constructor(private s:UserService,private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null),
      "email":new FormControl(null),
      'usertype':new FormControl('user')
    })



  }


  adduser(){
    this.s.adduser(this.form.value).subscribe((result:Result)=>{
    
      alert(result.res)
      this.router.navigate(['login'])
      
    },
    (err)=>{console.log(err)},
    ()=>{
     console.log('done')
    })

  }


  

}


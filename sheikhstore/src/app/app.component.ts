import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sheikhstore';
  constructor(private router:Router){}
  ngOnInit(){
   let userdata=localStorage.getItem('userdata')
   if(userdata!=null){
  let parseddata=JSON.parse(userdata)
  console.log(parseddata)

  this.router.navigate(['dashboard',{username:parseddata.username,email:parseddata.email}])

   }
  }
}

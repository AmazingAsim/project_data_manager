import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username!:any;
  email!:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.username=this.route.snapshot.paramMap.get('username');
    this.email=this.route.snapshot.paramMap.get('email');

  }

}

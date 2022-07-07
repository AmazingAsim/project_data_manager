import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/servises/product.service';
import {Product} from 'src/app/model/product'


interface Result{
  res:string
};

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})




export class AdminpageComponent implements OnInit {

 

  constructor(private ps:ProductService) { }

  productdata!:FormGroup


 

  ngOnInit(): void {
    this.productdata=new FormGroup({
      "name": new FormControl(),
      "brand":new FormControl(),
      "price":new FormControl(),
      "cat":new FormControl(),
      "gender":new FormControl(),
      "details":new FormControl(),
      'images':new FormControl()
    })
  }
  add(){
    let product=this.productdata.value

    alert(this.productdata.value)

       this.ps.addproduct(product).subscribe((result:Result)=>{
        alert(result.res)
       })
  }

}

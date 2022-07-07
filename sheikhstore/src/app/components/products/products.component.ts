import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { ProductService } from 'src/app/servises/product.service';

import { Product } from 'src/app/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productlist!:Product[];
 
  constructor(private ps:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {


    let cat= this.route.snapshot.paramMap.get('cat')
   

    this.ps.showbycat(cat).subscribe(res=>{
         this.productlist=res;
     
    })
  }
}

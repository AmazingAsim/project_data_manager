import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product} from '../model/product';
import { environment } from 'src/environments/environment';




interface Result{
  res:string
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private url=environment.SERVER_URL;


  constructor(private http:HttpClient) { }

  
addproduct(productdetail:Product):Observable<Result>{
  let jsondata=JSON.stringify(productdetail);

  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });


  return this.http.post<Result>(this.url+"/products/addproduct",jsondata,{headers:headers})
}


showbycat(cat:string|null):Observable<Product[]>{
  return this.http.get<Product[]>(this.url+"/products/find/"+cat)
}


}






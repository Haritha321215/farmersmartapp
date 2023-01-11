import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product =new Product();
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() : void{
  
  }

  saveProduct(){
    let url="http://localhost:8080/api/v1/products";
    this.http.post(url,this.product).subscribe(data=>{
      console.log(data);
      this.goToProductList();
    },
    error => console.log(error));
  }
  goToProductList(){
    this.router.navigate(['/products']);
  }
    
   onSubmit(){
     console.log(this.product);
     this.saveProduct();
   }

}


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  url="http://localhost:8080/api/v1/products";
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
   this.http.get<Product[]>(this.url).subscribe(
      data =>{
        this.products=data;
      },
      err =>{
        alert("An error has accured")
      }
    );
  }

  updateProduct(id: number){
    this.router.navigate(['update-product',id])
  }
  deleteProduct(id:number){
    this.http.delete(`${this.url}/${id}`).subscribe(data=>{
      console.log(data);
      this.getProducts();
    })
  }

  productDetails(id:number){
    this.router.navigate(['product-details',id])
  }
}

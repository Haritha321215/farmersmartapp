import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  product:Product =new Product();
  url="http://localhost:8080/api/v1/products";
  constructor(private http: HttpClient,
    private route:ActivatedRoute,
    private router:Router) { }
  
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];

    
    this.http.get<Product>(`${this.url}/${this.id}`).subscribe(
      data =>{
        this.product=data;
      },
      err =>{
        alert("An error has accuredddd")
      }
    );

  }

  onSubmit(){
    //console.log(product.productName);
    this.http.put(`${this.url}/${this.id}`,this.product).subscribe(data=>{
    this.goToProductList();
    },
      err =>{
      alert("An error has accured")
    });
  }
  goToProductList(){
    this.router.navigate(['/products']);
  }

}

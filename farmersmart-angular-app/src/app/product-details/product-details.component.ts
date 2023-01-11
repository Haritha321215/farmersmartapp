import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadStart } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product:Product;
  url="http://localhost:8080/api/v1/products";
  constructor(private http:HttpClient,
    private route:ActivatedRoute) { }

    ngOnInit() {
      this.id=this.route.snapshot.params['id'];
  
      this.product=new Product();
      this.http.get<Product>(`${this.url}/${this.id}`).subscribe(
        data =>{
          this.product=data;
        });
  
    }

}

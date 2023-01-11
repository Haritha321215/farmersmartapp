import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL:"http://localhost:8080/api/v1/products";
  constructor(private httpClient: HttpClient) { }

  

  getProductsList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }
 

  createProduct(product: Product):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }

  getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

}

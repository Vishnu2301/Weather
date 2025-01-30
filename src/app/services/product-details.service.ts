import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(public httpClinet: HttpClient) {}
  public productURI = 'http://localhost:3000/posts';

  getProductsdata() {
    return this.httpClinet.get(this.productURI);
  }
}

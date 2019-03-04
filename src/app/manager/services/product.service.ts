import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { PageModel } from 'src/app/core/models/PageModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createProduct(product: Product) {
    return this.httpClient.post(
      `${environment.endPoint}${environment.apiPaths.product.main}`,
      product
    ).toPromise();
  }
  updateProduct(product: Product) {
    return this.httpClient.put(
      `${environment.endPoint}${environment.apiPaths.product.main}`,
      product
    ).toPromise();
  }
  getProducts(index :number,pageSize:number,nameSearch:string,codeSearch:string)
  {
    return this.httpClient.get<PageModel<Product>>(
      `${environment.endPoint}${environment.apiPaths.product.main}?index=${index}&pageSize=${pageSize}&nameSearch=${nameSearch}&codeSearch=${codeSearch}`
    ).toPromise();
  }
  getProduct(id:string)
  {
    return this.httpClient.get<Product>(
      `${environment.endPoint}${environment.apiPaths.product.main}/${id}`
      ).toPromise();
  }
  deleteProduct(id:string)
  {
    return this.httpClient.delete(
      `${environment.endPoint}${environment.apiPaths.product.main}/${id}`
      ).toPromise();
  }
}

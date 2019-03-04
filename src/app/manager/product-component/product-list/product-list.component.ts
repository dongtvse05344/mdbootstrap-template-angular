import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PageModel } from 'src/app/core/models/PageModel';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getData();
  }
  data: PageModel<Product> = new PageModel<Product>();

  index: number = 1;
  pageSize: number = 5;
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];

  nameSearch: string = "";
  codeSearch: string = "";

  setPageSize(num: number) {
    this.index = 1;
    this.pageSize = num;
    this.getData();
  }
  setIndex(num: number) {
    this.index = num;
    this.getData();
  }

  getData() {
    this.productService.getProducts(this.index, this.pageSize, this.nameSearch, this.codeSearch)
      .then(
        (response: PageModel<Product>) => {
          this.data = response;
          this.pageNumbers = new Array<Number>();
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
        }
      );
  }
  search() {
    this.setIndex(1);
    this.getData();
  }
  delete(product: Product) {
    this.productService.deleteProduct(product.Id)
      .then(
        (response: any) => {
          this.getData();
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      );
  }
}

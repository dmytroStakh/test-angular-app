import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidht: number = 50;
  imageMargin: number = 2;
  pageTitle: string = "Product List";
  showImage: boolean = false;
  filteredProducts: IProduct[] = []

  private _listFilter: string = '';
  get listFilter(): string
  {
    return this._listFilter
  }

  set listFilter(value: string)
  {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
 
  products: IProduct[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void 
  {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  toggleImage():void
  {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] 
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string):void
  {
    this.pageTitle = 'Product list' + message;
  }
}
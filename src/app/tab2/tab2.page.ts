import { Product } from './../model/product';
import { Component, Input } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CorreiosService } from '../services/correios.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  products!: Observable<Product[]>;

  @Input() product!: Product;

  constructor(

    private firebaseService: FirebaseService,
    private router: Router,
    private productService: ProductService,
    private correiosService: CorreiosService, ){
    this.products = this.firebaseService.list();

    }
newProduct() {
  this.router.navigateByUrl('/tabs/tab1')
}


editProduct(id:string) {
  this.router.navigateByUrl(`/tabs/details/${id}`);
  }

}

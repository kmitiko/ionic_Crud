import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalProductDetailsModule } from '../modal-products-details/modal-product-details.module';

import { ProductService } from './../services/product.service';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HttpClientModule,
    ModalProductDetailsModule
  ],
  declarations: [Tab2Page],
  providers: [ProductService]
})
export class Tab2PageModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductService } from './../services/product.service';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Tab2Page } from './tab2.page';
import { FirebaseService } from '../services/firebase.service';
import { CorreiosService } from '../services/correios.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  declarations: [Tab2Page],
  providers: [FirebaseService, ProductService, CorreiosService]
})
export class Tab2PageModule {}

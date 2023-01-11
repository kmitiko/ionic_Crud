import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import { FirebaseService } from '../services/firebase.service';
import { ProductService } from '../services/product.service';
import { CorreiosService } from '../services/correios.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [Tab4Page],
  providers: [FirebaseService, ProductService, CorreiosService]
})
export class Tab4PageModule {}

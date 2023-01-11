import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseService } from '../services/firebase.service';
import { ProductService } from '../services/product.service';
import { CorreiosService } from '../services/correios.service';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Tab3PageRoutingModule,
    HttpClientModule

  ],
  declarations: [Tab3Page],
  providers: [FirebaseService, ProductService, CorreiosService]

})
export class Tab3PageModule {}

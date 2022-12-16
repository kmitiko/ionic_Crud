import { Product } from './../model/product';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalProductDetailsComponent } from '../modal-products-details/modal-product-details.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  product!: Product[];

  constructor(

    private modalCtrl: ModalController,
    private firebaseService: FirebaseService) {}

  public ionViewWillEnter() {
    this.firebaseService.list().subscribe({
      next: (result) => {this.product = result},
      error: (err) => {console.error(err)}
    });
  }

  listaProduto(){
    this.firebaseService.list().subscribe({
      next: (result) => this.product = result,
      error: (err) => console.error(err),
    })
  }


  async openModal(id:string) {

    const product = this.product.find(product => product.id === id);
    console.log(product)
    const modal = await this.modalCtrl.create({
      component: ModalProductDetailsComponent,
      componentProps: {
        'product': product
      }
    });

    return await modal.present();
  }

}

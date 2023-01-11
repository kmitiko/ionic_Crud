import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product } from '../model/product';

import { CorreiosService } from './../services/correios.service';
import { FirebaseService } from '../services/firebase.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  productList!:Product[];
  searchFG!: FormGroup;

  @ViewChild('searchFGD') searchFGD!: FormGroupDirective;

  constructor(
    private toastController: ToastController,
    private firebaseService: FirebaseService,
    private productService: ProductService,
    private router: Router,
    private correiosService: CorreiosService,
    ) {}

    ngOnInit(): void {

      this.searchFG = new FormGroup({
        'nome': new FormControl('', Validators.required)});
      }

      search(product:any) {
        this.firebaseService.findByName(product.nome).subscribe({
          next: (result) => {
            if(!result) {
              this.presentToast(`contact not found: ${product.nome}`);
            }

            this.productList = result as Product[];
          },
          error: (err) => {
            console.log(err);
            this.presentToast(`Service Unavailable`);

          }
        });
        this.searchFG.reset();
      }
      async presentToast(msg:string) {
        const toast = await this.toastController.create({
          message: msg,
          duration: 2500,
          position: 'middle'
        });
          await toast.present();
      }
}


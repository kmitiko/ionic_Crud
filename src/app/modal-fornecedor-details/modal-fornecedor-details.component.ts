import { Endereco } from './../model/endereco';
import { Fornecedor } from './../model/fornecedor';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FornecedorService } from '../services/fornecedor.service';
import { FirebasefornecedorService } from '../services/firebasefornecedor.service';

@Component({
  selector: 'app-modal-fornecedor-details',
  templateUrl: './modal-fornecedor-details.component.html',
  styleUrls: ['./modal-fornecedor-details.component.scss'],
})
export class ModalFornecedorDetailsComponent implements OnInit {

  @Input() fornecedor!: Fornecedor;
  @Input() endereco!: Endereco;


  constructor(
    private modalCtrl: ModalController,
    private fornecedorService: FornecedorService,
    private router: Router,
    private firebasefornecedorService: FirebasefornecedorService
  ) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {}

  edit(id: string) {
    this.router.navigate(['/tabs/editar_forn', id]);
    this.modalCtrl.dismiss(null, 'cancel');
  }

  delete(id: string) {

    this.firebasefornecedorService.deletefornecedor(id);
    this.modalCtrl.dismiss(null, 'cancel');

}
}

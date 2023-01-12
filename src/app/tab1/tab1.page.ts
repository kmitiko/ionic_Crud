import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlDirective,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './../services/firebase.service';

import { Product } from './../model/product';
import { ProductService } from './../services/product.service';
import { CorreiosService } from './../services/correios.service';
import { Endereco } from '../model/endereco';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ProductFormGroup!: FormGroup;
  product!:Product;
  cep!:Endereco;
  editable:boolean = false;
  @ViewChild('contactFormGroupDirective') contactFormGroupDirective!: FormControlDirective;

  constructor(
    private productService: ProductService,
    private firebaseService: FirebaseService,
    private correiosService: CorreiosService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {

    this.ProductFormGroup = new FormGroup({
      'nome': new FormControl('', Validators.required),
      'quantidade': new FormControl('', Validators.required),
      'valorCompra': new FormControl('', Validators.required),
      'porcentagem': new FormControl('', Validators.required),
      'valorVenda': new FormControl('', Validators.required),
      'fornecedor': new FormControl('', Validators.required),
      'razaoSocial': new FormControl('', Validators.required),
      'cnpj': new FormControl('', Validators.required),
      'telefone': new FormControl('', Validators.required),
      'endereco': new FormControl('', Validators.required),
      'cep': new FormControl('', Validators.required),
      'logradouro': new FormControl('', Validators.required),
      'bairro': new FormControl('', Validators.required),
      'localidade': new FormControl('', Validators.required),
      });

    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!;

      if(productId) {
        this.productService.findProduct(productId).subscribe({
          next: (productDB: Product) => {
            this.product = productDB;
            this.editable = true;
            this.loadForm();
          },
          error: (err) => console.log(err)
        });
      }
    });
}

  createProduct(values: any) {
    let newProduct:Product = {...values};
    this.firebaseService.save(newProduct);
    this.contactFormGroupDirective.reset();

  }

  loadForm() {
    this.ProductFormGroup.patchValue({
      nome: this.product.nome,
      quantidade: this.product.quantidade,
      preco_compra: this.product.valorCompra,
      porcentagem: this.product.porcentagem,
      preco_venda: this.product.valorVenda,
      fornecedor: this.product.fornecedor,
      razaoSocial: this.product.razaoSocial,
      cnpj: this.product.cnpj,
      telefone: this.product.telefone,
      cep: this.product.cep,
      logradouro: this.product.logradouro,
      bairro: this.product.bairro,
      localidade: this.product.localidade,
    });
  }
  loadEndereco(){
    const cep:string = this.ProductFormGroup.get('cep')?.value;
    this.correiosService.getEndereco(cep).subscribe({
      next: (result:Endereco) => {
        this.ProductFormGroup.patchValue({
          cep: result.cep,
          logradouro: result.logradouro,
          bairro: result.bairro,
          localidade: result.localidade,
      });
    },
      error: (err) => {
        console.error(err)
      }
    });
  }
  calcVenda() {
    let valorCompra = this.ProductFormGroup.get('valorCompra')?.value;
    let porcentagem = this.ProductFormGroup.get('porcentagem')?.value;

    let calcVenda = valorCompra + (valorCompra * (porcentagem / 100));

    this.ProductFormGroup.patchValue({
      valorVenda : calcVenda
    })

  }

}

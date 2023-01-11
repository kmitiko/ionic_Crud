import { Endereco } from "./endereco";

export interface Product {
    id:string;
    nome:string;
    quantidade:number;
    valorCompra:number;
    porcentagem:number;
    valorVenda:number;
    fornecedor:string;
    razaoSocial: string;
    cnpj: string;
    telefone: string;
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    endereço: Endereco,

}

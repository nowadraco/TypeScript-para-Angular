import { walkUpBindingElementsAndPatterns } from "typescript";

//objeto se precisibilidade
let produto: object = {
    name: "luiz",
    cidade: "sp",
    idade: 30,
}

type pordutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: pordutoLoja = {
    nome: "tenis",
    preco: 30,
    unidades: 35,
}
//Desenvolver uma calculadora que receba dois valores e execute as operações de soma, subtração, multiplicação e divisao. (Usando POO)

export class Calculadora{
    constructor(v1, v2){
        this.valorUm = v1;
        this.valorDois = v2;
    }

    soma(){
        let resultado = parseFloat(this.valorUm) + parseFloat( this.valorDois);
        return resultado;
    }

    subtracao(){
        let resultado = this.valorUm - this.valorDois;
        return resultado;
    }

    multiplicar(){
        let resultado = this.valorUm * this.valorDois;
        return resultado;
    }

    divisao(){
        let resultado = this.valorUm / this.valorDois;
        return resultado;
    }
}
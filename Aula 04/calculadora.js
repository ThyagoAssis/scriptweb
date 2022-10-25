class Funcionario{
      
    constructor(salario,venda,meta){
        this.salarioAtual = salario;
        this.totalVendas = venda;
        this.totalMeta = meta;
        this._resultado;
    }

    calculo(){
        if(this.totalVendas >= this.totalMeta){
            this._resultado = this.salarioAtual * 1.1;
            return this._resultado; 
        }else{
            this._resultado = this.salarioAtual;
            return this._resultado;
        }
    }
}
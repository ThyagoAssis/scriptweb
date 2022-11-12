
//Decorar a classe - Utilizar um decorator
//Decorarator diz a função da classe

import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

import { Fotos } from './foto';

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent{
  nameButton = "Fotos Pares";
  titulo = "Minhas Fotos";
  control = true;
  
  //Criar um array de objetos para as fotos
  imagens: Fotos[] = [];

  //O metodo contrutor de toda classe é carregada junto com o componente
  //HttpCLient é a ferramenta utilizada para conectar ao banco de dados(json-server(db.json))
  //Ela tambem permite fazer todo o crud
  //Injeção de dependencia(HttpCLient) - Que é disponiilizar a ferrammenta denttorro dos () do constru
  
  constructor(private joao: HttpClient){
    //Metodo get() pega algo
    joao.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixa => this.imagens = caixa)    
  }


  //Método do botao de click
  mudar(){

    this.control = !this.control;

    if(this.nameButton == "Todas Imagens" ){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton = "Todas Imagens";
    }
  }

  deletar(id:number){
    console.log(id);
  }
}
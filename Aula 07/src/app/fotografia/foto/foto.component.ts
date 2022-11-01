
//Decorar a classe - Utilizar um decorator
//Decorarator diz a função da classe

import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

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
  imagens = [];

  constructor(joao: HttpClient){}

  



  //Método do botao de click
  mudar(){

    this.control = !this.control;

    if(this.nameButton == "Todas Imagens" ){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton = "Todas Imagens";
    }
  }
}
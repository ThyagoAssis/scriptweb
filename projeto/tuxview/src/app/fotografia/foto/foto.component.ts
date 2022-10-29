
//Decorar a classe - Utilizar um decorator
//Decorarator diz a função da classe

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
  imagens = [
    {img: "https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg", titulo: "Ponte" },
    {img: "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg", titulo: "Arara"},
    {img: "https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg", titulo: "Gato"},
    {img: "https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg", titulo: "Elefante"},
    {img: "https://cdn.pixabay.com/photo/2022/10/16/18/20/flamingos-7525793__340.jpg", titulo: "Flamingo"},
    {img: "https://cdn.pixabay.com/photo/2022/10/16/18/20/flamingos-7525793__340.jpg", titulo: "Flamingo"}
  ];

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
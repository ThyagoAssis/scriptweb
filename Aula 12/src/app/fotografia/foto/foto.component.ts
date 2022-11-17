
//Decorar a classe - Utilizar um decorator
//Decorarator diz a função da classe
import { Component } from "@angular/core";

import { Fotos } from './foto';
import { DatabaseService } from '../../service/database.service';

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
  //Injeção de dependencia - Que é disponiilizar a ferrammenta dentro dos () do constru
  
  constructor(private database: DatabaseService){}

  ngOnInit(){
    this.database.getFoto().subscribe(caixa => this.imagens = caixa);
  }

  //Metodo deletar - Apaga uma foto em nossa web api
  deletar(id:number){
   /*  this.http.delete('http://localhost:3000/fotos/' + id).subscribe(); */
  }

  mudar(){}
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";

  constructor() { }

  ngOnInit(): void {
  }


  //Todo método pode ou não receber um parametro
  //Para receber um parametro basta criar um avarivel dentro dos () do metodo
  cadastrar(bastao:any){

    alert(bastao);
  }

}

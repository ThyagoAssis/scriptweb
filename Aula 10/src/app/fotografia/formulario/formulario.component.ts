import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";
  //A ferramenta formgroup captura as informações 
  //do formulario e coloca na variavel form
  formulario!: FormGroup; 

  //Injeção de dependencia - 
  constructor(private formBuilder: FormBuilder){ 

    this.formulario = formBuilder.group({
      img: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', ]
    });

  }

  ngOnInit(): void {
  }

  //Método usado no formGroup (data driven)
  cadastro(){
    alert("Cadastrado com sucesso");
    console.log(this.formulario.value);
  }






  //Todo método pode ou não receber um parametro
  //Para receber um parametro basta criar um avarivel dentro dos () do metodo
  

  //Modo usado no ngForm (template driven)
  /* cadastrar(bastao:any){
    alert('Dados Cadastrados!');
    console.log(bastao.value);
  } */

  //Ao clicar no botão cadastrar do formulario
  //As informações devem ser enviadas para o console.log
  //Dica 01 - os dados do formulário devem ser passados para o metodo como parametro
  //Verificar em qual variavel os dados do formularios ficam guardados
}

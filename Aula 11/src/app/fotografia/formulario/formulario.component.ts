import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  //Vou contratar um tradutor - httpOptions
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Cadastrar";

  //A ferramenta formgroup captura as informações 
  //do formulario e coloca na variavel form
  formulario!: FormGroup; 

  //Injeção de dependencia - 
  //O constructor da classe sera somente para injeção de dependecia
  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ){}

  //Ciclo de vida do Angular
  //Executar codigo no inicio, no meio ou no final da aplicação
  //ngOnInit - carrega todo codigo dentro dele no inicio da noassa APP
  ngOnInit(): void {
    this.validaForm();
  }

  validaForm(){
    this.formulario = this.formBuilder.group({
      img: ['', [Validators.required, Validators.minLength(5)]],
      titulo: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  //Método usado no formGroup (data driven)
  //JSON.stringify converte os dados para o formato json
  cadastro(){    
   this.http.post('http://localhost:3000/fotos/',JSON.stringify(this.formulario.value), this.httpOptions).subscribe();
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Fotos } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
}) 

//A função desse serviço sera:
  //Exibir fotos
  //Cadastrar foto
  //Excluir uma foto
  //Atualizar uma foto

export class DatabaseService {

  //Atributo que recebe o endereço da API
  readonly API = 'http://localhost:3000/fotos/';

  constructor(private http: HttpClient) { }

  //Metodo que captura todas as fotos
  getFoto(){
    return this.http.get<Fotos[]>(this.API);
  }

  //Método de cadastro da foto
  postFoto(){}

  //Exclusão da foto
  delFoto(){}
}

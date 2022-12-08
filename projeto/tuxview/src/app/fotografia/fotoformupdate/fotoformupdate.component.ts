

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DatabaseService } from 'src/app/service/database.service';
import { Fotos } from '../foto/foto';


@Component({
  selector: 'app-fotoformupdate',
  templateUrl: './fotoformupdate.component.html',
  styleUrls: ['./fotoformupdate.component.css']
})
export class FotoformupdateComponent implements OnInit {

  caixaFotos: Fotos[] = [];
  imagem: any = {}; 
  
  routerId = null;  

  form!: FormGroup;

  constructor(
    //Ferramenta que captura a rota ativa(URL)
    private activatedRouter: ActivatedRoute,
    private dataBase: DatabaseService,
    private router: Router
    
   
  ){ }

  ngOnInit(): void {
    this.routerId = this.activatedRouter.snapshot.params['id'];   
    
    if(this.routerId){
      this.dataBase.getFotoOne(this.routerId).subscribe(results => this.imagem = results);      
    }    
  }

  autalizar(form: any): void{
    try{
      this.dataBase.updateFoto(form.value, this.imagem.id);
    }finally{
      this.router.navigate(['/fotos']);
    }
    

  } 

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  imagemHome = "https://cdn.pixabay.com/photo/2020/04/20/14/47/car-5068532_960_720.png";
  constructor() { }

  ngOnInit(): void {
  }

}

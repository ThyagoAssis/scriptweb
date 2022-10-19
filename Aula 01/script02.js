/*  Receba 4 notas de um aluno e calcule a média, se a média for maior que 5 exiba a mensagem de aluno aprovado, caso contrario exiba a msg de aluno reprovado.
O atributo resultado deverá ser privado. */
//Utilizando a POO

class Aluno{

  //Passagem de parametro
  constructor(tubo1,tubo2,tubo3,tubo4){
    this.notaUm = tubo1;
    this.notaDois = tubo2;
    this.notaTres = tubo3;
    this.notaQuatro = tubo4;
  }

  calculoMedia(){
    let media = (this.notaUm + this.notaDois + this.notaTres + this.notaQuatro)/4;
    if(media >= 5){
      return "Aluno Aprovado";
    }else{
      return "Aluno reprovado";
    }
  }
}

//Usando o nosso molde Aluno.
//Instanciar é usar molde (Classe)
var aluno1 = new Aluno(0, 0, 0, 0);
console.log(aluno1.calculoMedia());
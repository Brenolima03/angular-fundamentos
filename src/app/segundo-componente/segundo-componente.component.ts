import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Breno";
  dataNascimento = "1997-06-03";
  urlImagem = "/assets/norris.jpg";
  mostrarDataNascimento() {
    alert(`A data de nascimento de Breno é ${this.dataNascimento}`)
  }

}

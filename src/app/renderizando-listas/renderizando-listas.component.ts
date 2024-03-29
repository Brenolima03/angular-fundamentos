import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    {id: 1, nome: "Galaxy S20", descricao: "Preto", esgotado: false},
    {id: 2, nome: "IPhone 14", descricao: "Branco", esgotado: true},
    {id: 3, nome: "Motorola", esgotado: false},
  ];

}

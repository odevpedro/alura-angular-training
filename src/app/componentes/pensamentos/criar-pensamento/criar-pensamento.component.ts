import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'qualquer outra coisa',
    autoria: 'Autor',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

criarPensamento(){
  console.log('ãojsdfopaç~djsf')
  alert('lçaskdjfklçajsdf')
}

cancelarPensamento(){
  console.log('something');
  alert('something like this')
}

}


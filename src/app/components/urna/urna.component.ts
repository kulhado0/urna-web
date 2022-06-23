import {Component, OnInit} from '@angular/core';
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {
  cpf: string = '';
  sexo: string = '';
  presidente: string = '';
  idade: string = ''

  presidentes = ['Luiz Inácio Lula da Silva', 'Jair Bolsonaro', 'Ciro Gomes', 'Marina Silva'];
  sexos = ['Masculino', 'Feminino', 'Outro'];

  constructor() {
  }

  ngOnInit(): void {
  }

  cpfChange(event: any) {
    this.cpf = event.target.value
  }

  presidentChange(event: MatOptionSelectionChange<string>) {
    this.presidente = event.source.value
  }

  sexChange(event: MatOptionSelectionChange<any>) {
    this.sexo = event.source.value
  }

  changeAge(event: any) {
    this.idade = event.target.value
  }
}

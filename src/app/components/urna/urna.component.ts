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
  progressValue: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  cpfChange(event: any) {
    this.cpf = event.target.value;
    this.checkProgressBar();
  }

  presidentChange(event: MatOptionSelectionChange<string>) {
    this.presidente = event.source.value;
    this.checkProgressBar();
  }

  sexChange(event: MatOptionSelectionChange<any>) {
    this.sexo = event.source.value;
    this.checkProgressBar();
  }

  changeAge(event: any) {
    this.idade = event.target.value;
    this.checkProgressBar();
  }

  checkProgressBar() {
    this.progressValue = this.getProgressValue();
  }

  private getProgressValue() {
    return this.progressBarPercent(this.cpf) + this.progressBarPercent(this.idade) + this.progressBarPercent(this.sexo) + this.progressBarPercent(this.presidente);
  }

  private progressBarPercent(field: string) {
    if (field == '')
      return 0;
    else
      return 25;
  }
}

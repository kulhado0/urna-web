import {Component, OnInit} from '@angular/core';
import {MatOptionSelectionChange} from "@angular/material/core";
import {UrnaSenderService} from "../../services/urna-sender.service";

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
  audio: any
  video: any

  presidentes = ['Luiz Inácio Lula da Silva', 'Jair Bolsonaro', 'Ciro Gomes', 'Marina Silva'];
  sexos = ['Masculino', 'Feminino', 'Outro'];
  progressValue: number = 0;

  constructor(
    private sender: UrnaSenderService
  ) {
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

  changeAudio(event: any) {
    const file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.audio = reader.result
    };
  }

  changeVideo(event: any) {
    const file = event.target.files[0];
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.video = reader.result
    };
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

  vote() {
    const body = this.getVoteBody()
    this.sender.vote(body).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err)
      }
    )
  }

  private getVoteBody() {
    return {
      'cpf': this.cpf,
      'sexo': this.sexo,
      'idade': this.idade,
      'presidente': this.presidente,
      'audio': this.audio,
      'video': this.video
    }
  }

  clear() {
    this.cpf = ''
    this.sexo = ''
    this.idade = ''
    this.presidente = ''
    this.audio = ''
    this.video = ''
  }
}

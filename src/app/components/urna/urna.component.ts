import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {
  cpf_input = 'asdasd';

  constructor() { }

  ngOnInit(): void {
  }

  cpfChange(event: any, value: any) {
    console.log(event)
    console.log(value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

formStep2: FormGroup;
teams:['Angular', 'React', 'Svelte'];
seniorityLst:['Traine', 'Junior', 'Semi-Senior','Senior']

  constructor(private fb:FormBuilder) {

this.formStep2= this.fb.group({
team: ['', Validators.required],
seniority:['', Validators.required],
trabaja:[false],
git:['', Validators.required]

})
 }

get team(){ return this.formStep2.get('team');}
get seniority() { return this.formStep2.get('seniority'); }
get trabaja() { return this.formStep2.get('trabaja'); }
get git() { return this.formStep2.get('git'); }


  ngOnInit(): void {
  }
onSave(){
console.log(this.formStep2.value);
}
  getErrorMessage(campo: string): string {

    switch (campo) {
      case 'team':
        if (this.team.hasError('required')) {
          return 'Debe Seleccionar un team';
        break;
        }
      case 'seniority':
        if (this.seniority.hasError('required')) {
          return 'Debe Seleccionar un seniority';
        break;
        }
      case 'git':
        if (this.git.hasError('required')) {
          return 'Debe Ingresar su GitHub';
          break;
        }
     

    }


  }
}

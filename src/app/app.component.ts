import { Component } from '@angular/core';
import { skillsArray } from './components/const/skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InputOutputProject';
  // skillsArray : Array<string> = [`Html`,`css`,`js`,`ts`,`angular`]
  skillsArray: Array<string> = skillsArray
  addTodo(ele:string){
    if(ele){
      this.skillsArray.push(ele)
      console.log(ele)
    }
  }
}




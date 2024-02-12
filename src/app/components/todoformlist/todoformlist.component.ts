import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todoformlist',
  templateUrl: './todoformlist.component.html',
  styleUrls: ['./todoformlist.component.scss']
})
export class TodoformlistComponent implements OnInit {
 @Output()  todoprop: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onbtnClick(todo : HTMLInputElement){
   console.log(todo.value)
    this.todoprop.emit(todo.value)
  }
}
//input:parent to child 
//output:child to parent 
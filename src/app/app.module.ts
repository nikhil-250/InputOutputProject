import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoformlistComponent } from './components/todoformlist/todoformlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

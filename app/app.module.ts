import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ReactComponent} from './hello.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ReactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

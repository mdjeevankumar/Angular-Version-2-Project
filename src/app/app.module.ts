import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ClientComponent }  from './components/client.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,ClientComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

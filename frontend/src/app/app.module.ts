import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterDisplayComponent } from './counterdisplay/counterdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

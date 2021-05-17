import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TraslateModule } from './traslate/traslate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TraslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

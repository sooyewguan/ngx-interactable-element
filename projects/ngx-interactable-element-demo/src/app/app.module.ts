import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxInteractableElementModule } from 'ngx-interactable-element';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInteractableElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

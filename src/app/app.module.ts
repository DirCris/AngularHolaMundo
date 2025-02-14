import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { PHolaMundoComponent } from './p-hola-mundo/p-hola-mundo.component';


@NgModule({
  declarations: [
    //AppComponent,
    PHolaMundoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [PHolaMundoComponent]
})
export class AppModule { }

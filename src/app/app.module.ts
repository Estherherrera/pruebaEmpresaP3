import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuessNumberComponent } from './guess-number/guess-number.component';
import { ModalGuessedNumberComponent } from './modal-guessed-number/modal-guessed-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GuessNumberComponent,
    ModalGuessedNumberComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

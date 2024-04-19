import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens/personagens.component';
import { TreinosDankiComponent } from './personagens/treinos/treinos-danki/treinos-danki.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    TreinosDankiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

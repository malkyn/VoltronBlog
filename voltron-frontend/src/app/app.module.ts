import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonagensComponent } from './personagens/personagens/personagens.component';
import { ChatVoltronComponent } from './Views/Chat-voltron/Chat-voltron.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NameDialogComponent } from './Views/name-dialog/name-dialog.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import * as Chart from 'chart.js'

@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    ChatVoltronComponent,
    NameDialogComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatVoltronComponent } from './Views/Chat-voltron/Chat-voltron.component';
import { PersonagensComponent } from './personagens/personagens/personagens.component';
import { LoginComponent } from './Views/login/login/login.component';

const routes: Routes = [
  {path:'', pathMatch: "full", redirectTo:"login"},
  {path:'login', component: LoginComponent},
  {path:'personagens', component: PersonagensComponent},
  {path:'chat', component: ChatVoltronComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

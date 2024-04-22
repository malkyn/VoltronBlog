import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatVoltronComponent } from './Views/Chat-voltron/Chat-voltron.component';
import { PersonagensComponent } from './personagens/personagens/personagens.component';

const routes: Routes = [
  {path:'', component: PersonagensComponent, pathMatch:"full"},
  {path:'chat', component: ChatVoltronComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

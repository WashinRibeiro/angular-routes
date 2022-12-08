import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch:'full'}, // Rota principal
  { path: 'portfolio', component: CardComponent, children: [
    { path: ':id', component: CardComponent },
  ]},
  { path: '**', redirectTo: ''} // Rota coringa, geralmente voltando para a principal ou então 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

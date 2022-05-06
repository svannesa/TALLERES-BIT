import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componente/cards/cards.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { TablaComponent } from './componente/tabla/tabla.component';
import { PaduaComponent } from './componente/padua/padua.component';



const routes: Routes = [
  {path: 'cards', component:CardsComponent},
  {path:'carrusel', component:CarruselComponent},
  {path:'tabla', component:TablaComponent},
  {path:'padua', component:PaduaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

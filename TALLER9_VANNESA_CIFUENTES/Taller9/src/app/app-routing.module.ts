import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { ComponenteComponent } from './componente/componente/componente.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'calculadora',component:CalculadoraComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'componente',component:ComponenteComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

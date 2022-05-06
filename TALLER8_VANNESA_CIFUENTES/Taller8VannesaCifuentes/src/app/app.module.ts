import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { CardsComponent } from './componente/cards/cards.component';
import { VideoComponent } from './componente/video/video.component';
import { FooterComponent } from './componente/footer/footer.component';
import { TablaComponent } from './componente/tabla/tabla.component';
import { PaduaComponent } from './componente/padua/padua.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    CarruselComponent,
    CardsComponent,
    VideoComponent,
    FooterComponent,
    TablaComponent,
    PaduaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

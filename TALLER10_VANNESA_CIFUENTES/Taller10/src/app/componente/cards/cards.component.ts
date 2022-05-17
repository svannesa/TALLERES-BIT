import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  datosApi!: any;

  pages: number = 1;
  dataset: any[] = ['1','2','3','4','5','6','7','8','9','10'];

  constructor( public apiService:ApiService) { }

  ngOnInit(): void {
    this.obtenerDatosApi();
  }
  obtenerDatosApi(){

    this.apiService.obtenerDatos()
     .subscribe( res =>
      this.datosApi= res,
      err=> console.log(err)
      )
  
  }
  pruebaEvento(e:any){
    e.target
    //alert("El actor se llama: " +e)
    Swal.fire(
      'El personaje es interpretado por:  ' +e,
      'aceptar!',
      'success'

      
  
    )
    Swal.fire({
      title: ( ' El personaje es interpretado por: ' + e ),
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/YSfGv0WySZm3Jesbn6/giphy.gif")
            left top
            repeat
          `
  })
  
}


    //
  }



//


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formValue!:FormGroup;
  public data_detalle:Array<any>=[];
  public estrato= [1,2,3,4,5];
  public ciudad =["Cali", "Pasto", "Bogotá", "Pereira", "Tunja", "Medellin"]
  public contador:any;






  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.obtenerCamposFormulario();
  }

  obtenerCamposFormulario(){

    this.formValue= this.formBuilder.group({
  
      nombres: [''],
      apellidos: [''],
      edad: [''],
      ciudad: [''],
      cantidad: ['']
   
    })
    }
    guardar_detalle(detalleFormulario: any){

      if(detalleFormulario.value.nombres==""){
       // alert("El campo nombre no puede estar vacio")
        Swal.fire(
          'El campo nombre no puede estar vacio!',
          'aceptar!',
          'error'
        )
      }
  
      else if(detalleFormulario.value.apellidos==""){
        //alert("El campo apellido no puede estar vacio")
  
        Swal.fire(
          'El campo apellido no puede estar vacio!',
          'aceptar!',
          'error'
        )
      }
  
      else if(detalleFormulario.value.estrato==0){
       // alert("El campo Edad no puede estar vacio")
  
        Swal.fire(
          'El campo estrato no puede estar vacio!',
          'aceptar!',
          'error'
        )
      }
  
      else if(detalleFormulario.value.ciudad==0){
        //alert("El campo ciudad no puede estar vacio")
  
        Swal.fire(
          'El campo ciudad no puede estar vacio!',
          'aceptar!',
          'error'
        )
  
      }
  
      else{
        this.data_detalle.push({
          nombres: detalleFormulario.value.nombres,
          apellidos: detalleFormulario.value.apellidos,
          edad: detalleFormulario.value.edad,
          ciudad: detalleFormulario.value.ciudad,
          cantidad:detalleFormulario.value.cantidad
        })
  
        this.contador=this.data_detalle.length
        //alert("La información se guardo correctamente")
        //primera forma para limpiar, pero tiene un defecto
        //this.formValue.reset();
  
        Swal.fire(
          'La información se guardo correctamente!',
          'aceptar!',
          'success'
        )
  
        //segunda forma para limpiar, y es mas segura
        this.formValue = this.formBuilder.group({
          nombres : [''],
          apellidos: [''],
          edad : [''],
          ciudad: [''],
          cantidad: [''],
        })
  
  
      }
  
    }
  
    remover(indice:number){
      this.data_detalle.splice(indice,1)
      this.contador=this.data_detalle.length
      //alert("Registro eliminado!")
  
      Swal.fire(
        'Registro eliminado!',
        'aceptar!',
        'warning'
      )
  
    }
  
    //Otra forma de controlar el eliminar
    remover2(indice:number){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.data_detalle.splice(indice,1)
            this.contador=this.data_detalle.length
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
    }
  










//
}

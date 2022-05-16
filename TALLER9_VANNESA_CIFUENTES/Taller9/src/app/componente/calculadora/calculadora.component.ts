import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

titulo= "Mi calculadora";
num1!:number;
num2!:number;
resultado!: number;

mensaje_ok: any;
mensaje_error: any;

  constructor() { }

  ngOnInit(): void {

  }
  sumar():void{

    if (this.num1== null) {
    
      this.mensaje_error= "Ingresar número 1"
      
    }else if (this.num2==null) {
    
      this.mensaje_error= "Ingresar número 2"
      
    }else{{
    
      this.mensaje_ok= "Operación correcta";
     

    }}
    
       
    
      this.resultado= this.num1+ this.num2;
    }
    restar():void{
      if (this.num1 <=0) {
    
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else if (this.num2 <=0) {
      
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else{{
      
        this.mensaje_ok= "Operación correcta"
      }}


      this.resultado= this.num1- this.num2;
    }
    multiplicar():void{
      if (this.num1 < 0 ) {
    
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else if (this.num2 < 0) {
      
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else{{
      
        this.mensaje_ok= "Operación correcta"
      }}
    
      this.resultado= this.num1 * this.num2;
    }
    dividir():void{
      if (this.num1 <= 0) {
    
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else if (this.num2<=0) {
      
        this.mensaje_error= "No se permiten numeros menores a 0"
        
      }else{{
      
        this.mensaje_ok= "Operación correcta"
      }}
    
      this.resultado= this.num1/ this.num2;
    }
    




//

  }



import { Component } from '@angular/core';
import {CartServicesService} from './../../services/cart-services.service'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})


export class CatalogoComponent {
products: any;
	// inyectar la dependencia del servicio en el constructor.
  constructor(private cartServicesService: CartServicesService){

  }
  
  // actualizar el método para añadir un producto al carrito mediante el servicio
  addToCart(product: any) { 
	  // utilizacion del metodo addTocart del servicio cartServicesService 
    this.cartServicesService.addToCart(product)
    // utilizacion del metodo getCart del servicio cartServicesService 
    product.cantidad =0 ; // Reiniciar contador a 0
    //para mostrar en el console.log los producto añadidos
    console.log( this.cartServicesService.getCart() )
  }
	//....

}





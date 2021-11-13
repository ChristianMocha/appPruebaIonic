import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/Productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public producto: Productos;
  public productos: Productos[] = []

  constructor(private productosService: ProductosService) {
    
  }

  ngOnInit(){

    this.producto = {
      nombre: '',
      precio: '',
      descripcion: '',
    };

    this.getProductos();

  }

  onUpload(){
    this.productosService.addProduct(this.producto).then(
      res => {
        console.log("producto agregado");
      }
    );
  }

  getProductos(){
    this.productosService.getProductos().subscribe(
      (res:any) => {
        if (res) {
          console.log(res);
          this.productos= res;
        }
      }
    );
  }

}

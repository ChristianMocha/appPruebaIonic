import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Productos } from '../models/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private fireBase: AngularFirestore) { }

  addProduct(producto: Productos){
    if(producto.id == null){
      producto.id = this.fireBase.createId();
    }
    return this.fireBase.collection('productos').doc(producto.id).set(Object.assign({},producto));
  }

  getProductos(){
    return this.fireBase.collection<Productos>('productos').valueChanges();
  }
}

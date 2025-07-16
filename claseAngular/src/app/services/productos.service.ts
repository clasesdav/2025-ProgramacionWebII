
import { Injectable } from "@angular/core";
import { Producto } from "../models/Producto.models-";


@Injectable({ providedIn: 'root' })
export class ProductosService {
    constructor() {
        console.log("Servicio listo para usar.");
    }
    private productos: Producto[] = [
        { nombre: "Audifonos", img: "img/1.webp", precio: 100 },
        { nombre: "Tenis", img: "img/2.png", precio: 200 },
        { nombre: "Reloj", img: "img/3.png", precio: 300 },
    ];

    getProductos(): Producto[] {
        return this.productos;
    }

    getProducto(id: number) {
        return this.productos[id];
    }

    buscarProductos(termino: string): Producto[] {
        let productosArr: Producto[] = [];
        termino = termino.toLowerCase();

        for (let i = 0; i < this.productos.length; i++) {

            let producto=this.productos[i];
            let nombre=producto.nombre.toLowerCase();
            if(nombre.indexOf(termino)>=0)
            {
                productosArr.push(producto);
            }
        }
        return  productosArr;
    }
}
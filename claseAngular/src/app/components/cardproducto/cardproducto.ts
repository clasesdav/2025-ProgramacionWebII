import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/Producto.models-';

@Component({
  selector: 'app-cardproducto',
  imports: [RouterLink],
  templateUrl: './cardproducto.html',
  styleUrl: './cardproducto.css'
})
export class Cardproducto implements OnInit {

  producto: Producto = new Producto();
  // producto: any = {};
  constructor(
    private activatedRoute: ActivatedRoute
    , private _productoService: ProductosService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';

    this.producto = this._productoService.getProducto(parseInt(id));
    console.log(this.producto);
  }

}

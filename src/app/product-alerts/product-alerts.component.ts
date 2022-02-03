/*si estamos generando un child y vamos a inputear info de parent, NO DEBEMOS OLVIDAR
AGREGAR INPUT ACÁ ARRIBA, al lado de component y de OnInit. De lo contrario, angular
no va a saber que lo que realmente estamos tratando de hacer es importar la info de nuestro parent*/

import { Component, OnInit, Input } from '@angular/core';

//Acá lo que estamos haciendo es importar de nuestro elemento padre
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  //cuando definimos nuestra clase, aclaramos que estamos tomando un input de parent
  @Input() product!: Product;
  constructor() {}

  ngOnInit() {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from 'src/modules/material/material.module';

@NgModule({
	declarations: [
		ProductsComponent,
		ProductCardComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ProductsRoutingModule
	]
})
export class ProductsModule { }

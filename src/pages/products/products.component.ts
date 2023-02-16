import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/core/products.service';
import { Product } from 'src/models/product.mode';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	public products!: Product[];

	constructor(
		private router: Router,
		public productsService: ProductsService
	) { }

	ngOnInit(): void {
		this.productsService.getAll();
	}

	public editProduct(product: Product): void {
		this.router.navigate([`/edit/${product.id}`]);
	}


	public removeProduct(id: string): void {
		this.productsService.remove(id);
	}

}

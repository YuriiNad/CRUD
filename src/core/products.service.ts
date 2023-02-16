import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Product } from 'src/models/product.mode';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly PREFIX = 'USER_PRODUCTS';
	public products!: Product[];

	constructor(
		private api: ApiService,
		private router: Router,
	) { }

	public add(product: Product): void {
		if (this.products) {
			this.api.set<Product[]>(this.PREFIX, [...this.products, product]);
			this.router.navigateByUrl('products');
			return;
		}

		this.api.set<Product[]>(this.PREFIX, [product]);
		this.router.navigateByUrl('products');
	}

	public update(updatedProduct: Product): void {
		if (this.products) {
			const allProductsExceptUpdated = this.products.filter(product => product.id !== updatedProduct.id)
			this.api.set<Product[]>(this.PREFIX, [...allProductsExceptUpdated, updatedProduct]);
			this.router.navigateByUrl('products');
		}
	}

	public remove(id: string): void {
		if (id) {
			const relevantArray = this.products.filter(product => product.id !== id);
			this.api.set<Product[]>(this.PREFIX, relevantArray);
			this.getAll();
		}
	}

	public getById(id: string): Product | undefined {
		return this.products?.find(e => e.id === id);
	}

	public getAll(): void {
		this.products = this.api.get<Product[]>(this.PREFIX)
	}
}

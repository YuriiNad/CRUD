import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/core/products.service';
import { idGenerator } from 'src/helpers';
import { Product } from 'src/models/product.mode';

export type ProductKey = 'title' | 'description' | 'category';

export interface EditProductForm {
	title: FormControl<string>;
	description: FormControl<string>;
	category: FormControl<string>;
}

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent {
	public addProductForm!: FormGroup<EditProductForm>;

	constructor(
		private product: ProductsService,
		private router: Router,
	) { }

	ngOnInit(): void {
		this.initForm();
	}

	public get controls(): Record<ProductKey, FormControl<string>> {
		return this.addProductForm.controls;
	}

	public get isFormValid(): boolean {
		return this.addProductForm.valid;
	}

	public initForm(): void {
		this.addProductForm = new FormGroup<EditProductForm>({
			title: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
			description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(20)] }),
			category: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
		})
	}

	public isControlInvalid(control: FormControl, errorKey: string): boolean {
		return control.errors?.[errorKey]
	}

	public addProduct(): void {
		if (!this.addProductForm.value) return;

		const id = idGenerator();
		const product = { ...this.addProductForm.value, id }
		this.product.add(product as Product)
	}

}

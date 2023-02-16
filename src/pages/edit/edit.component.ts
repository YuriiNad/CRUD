import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/core/products.service';
import { Product } from 'src/models/product.mode';
import { ProductForm, ProductKey } from '../add/add.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	public product!: Product;
	public editProductForm!: FormGroup<ProductForm>;


	constructor(
		private route: ActivatedRoute,
		private productService: ProductsService,
	) { }

	ngOnInit(): void {
		this.productService.getAll();
		this.getProduct();
		this.initForm();
	}

	public get controls(): Record<ProductKey, FormControl<string>> {
		return this.editProductForm?.controls;
	}

	public get isFormValid(): boolean {
		return this.editProductForm?.valid;
	}

	private getProduct(): void {
		this.route.paramMap
			.subscribe(param => {
				const id = param.get('id');
				this.product = this.productService.getById(id as string) as Product;
			})
	}

	public initForm(): void {
		this.editProductForm = new FormGroup<ProductForm>({
			title: new FormControl(this.product?.title, { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
			description: new FormControl(this.product?.description, { nonNullable: true, validators: [Validators.required, Validators.minLength(20)] }),
			category: new FormControl(this.product?.category, { nonNullable: true, validators: [Validators.required] }),
		})
	}

	public isControlInvalid(control: FormControl, errorKey: string): boolean {
		return control.errors?.[errorKey]
	}

	public editProduct(): void {
		if (!this.editProductForm.value) return;

		const id = this.product.id;
		const product = { ...this.editProductForm.value, id };
		this.productService.update(product as Product);
	}
}

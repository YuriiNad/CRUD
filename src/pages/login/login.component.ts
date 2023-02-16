import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/core/api.service';
import { AuthService } from 'src/core/auth.service';

type LoginKey = 'email' | 'password';

export interface Login {
	email: FormControl<string>;
	password: FormControl<string>;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public loginForm!: FormGroup<Login>;

	constructor(
		private router: Router,
		private auth: AuthService
	) { }

	ngOnInit(): void {
		this.initForm();
	}

	public get controls(): Record<LoginKey, FormControl<string>> {
		return this.loginForm.controls
	}

	public get isFormValid(): boolean {
		return this.loginForm.valid;
	}

	public initForm(): void {
		this.loginForm = new FormGroup<Login>({
			email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
			password: new FormControl('', { nonNullable: true, validators: [Validators.minLength(4), Validators.required] })
		})
	}

	public isControlInvalid(control: FormControl, errorKey: string): boolean {
		return control.errors?.[errorKey]
	}

	public login(): void {
		if (this.loginForm.valid && this.loginForm.value) {
			this.auth.login('USER_DATA', this.loginForm.value)
			this.router.navigateByUrl('products');
		}
	}
}

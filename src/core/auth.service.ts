import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Router } from '@angular/router';

interface User {
	email: string;
	password: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private readonly PREFIX = 'USER_DATA';

	constructor(
		private router: Router,
		private api: ApiService
	) { }

	public get isLogged(): boolean {
		const data = this.api.get<User>(this.PREFIX);
		return !!data;
	}

	public login(key: string, value: any): void {
		this.api.set<User>(key, value);
	}

	public logout(): void {
		this.api.delete(this.PREFIX);
		this.router.navigateByUrl('login');
	}
}

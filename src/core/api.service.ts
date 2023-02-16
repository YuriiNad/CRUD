import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private readonly prefix = 'CRUD_';

	public set<T>(key: string, value: T): void {
		if (!key && !value) return;
		localStorage.setItem(`${this.prefix}${key}`, JSON.stringify(value));
	}

	public get<T>(key: string): T {
		const data = localStorage.getItem(`${this.prefix}${key}`)
		return !!data ? JSON.parse(data) : data
	}

	public delete(key: string): void {
		if (!key) return;
		localStorage.removeItem(`${this.prefix}${key}`);
	}
}

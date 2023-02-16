import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/core/auth.service';
import { idGenerator } from 'src/helpers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public year = new Date().getFullYear();

	constructor(public auth: AuthService) {
		idGenerator()
	}

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeaturePaths, Link } from 'src/models/routing.model';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: ['.mdc-button--outlined { border-style: none }']
})
export class HeaderComponent {
	@Input() isLogged!: boolean;
	@Output() onLogout = new EventEmitter<any>();
}

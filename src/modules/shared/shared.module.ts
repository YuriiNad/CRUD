import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

const components = [
	HeaderComponent,
	FooterComponent,
]

const modules = [
	ReactiveFormsModule,
	AppRoutingModule,
	MaterialModule
]

@NgModule({
	declarations: [
		...components,
	],
	imports: [
		...modules,

	],
	exports: [
		...components,
		...modules,
	]
})
export class SharedModule { }

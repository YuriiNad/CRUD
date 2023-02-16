import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

const modules = [
	CommonModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatInputModule,
	MatCardModule,
	MatDividerModule,
]


@NgModule({
	declarations: [
	],
	imports: [
		...modules,

	],
	exports: [
		...modules,
	]
})
export class MaterialModule { }

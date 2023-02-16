import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AddComponent
	],
	imports: [
		CommonModule,
		AddRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
	]
})
export class AddModule { }

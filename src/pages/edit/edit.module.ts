import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MaterialModule } from 'src/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		EditComponent
	],
	imports: [
		CommonModule,
		EditRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
	]
})
export class EditModule { }

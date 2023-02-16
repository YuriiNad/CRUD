import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { FeaturePaths } from 'src/models/routing.model';

const routes: Routes = [
	{ path: '', redirectTo: 'products', pathMatch: 'full' },
	//TODO: routesless pattern to avoid copying the AuthGuard
	{
		path: FeaturePaths.LOG_IN,
		loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule),

	},
	{
		path: FeaturePaths.PRODUCTS,
		loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsModule),
		canActivate: [AuthGuard]
	},
	{
		path: FeaturePaths.ADD,
		loadChildren: () => import('../pages/add/add.module').then(m => m.AddModule),
		canActivate: [AuthGuard]
	},
	{
		path: `${FeaturePaths.EDIT}/:id`,
		loadChildren: () => import('../pages/edit/edit.module').then(m => m.EditModule),
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		redirectTo: FeaturePaths.PRODUCTS,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

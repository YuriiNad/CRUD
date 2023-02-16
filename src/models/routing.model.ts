export enum FeaturePaths {
	LOG_IN = 'login',
	PRODUCTS = 'products',
	ADD = 'add',
	EDIT = 'edit'
}

export interface Link {
	label: string;
	path: string;
}
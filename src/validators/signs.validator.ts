import { AbstractControl, ValidatorFn } from "@angular/forms";

export class SignsValidators {

	static range(min: number): ValidatorFn {
		return (c: AbstractControl): { [key: string]: boolean } | null => {
			const isWhitespace = (c.value || '').trim().length === 0 || c.value.length < min;
			const isValid = !isWhitespace;
			return isValid ? null : { 'whitespace': true };
		};
	}
}
import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  private static validateEmailPattern(control: FormControl): ValidationErrors | null {
    
    const emailRegex: RegExp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[.][a-zA-Z0-9-.]{2,}$');

    const value = control.value;

    if (!emailRegex.test(value)) {
      return { invalidEmail: 'Not a valid email address' };
    }
    return null;
  }

  constructor() { }

  public validate(c: FormControl): ValidationErrors | null {
    return EmailValidatorDirective.validateEmailPattern(c);
  }
}

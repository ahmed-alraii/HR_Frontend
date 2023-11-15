import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function existEmailValidator(existEmails: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let emailValue = control?.value;
    if(existEmails.length == 0 && control.untouched) return null;
    console.log(emailValue);
    let validationError = {'existEmail' : {'value' : emailValue}}
    let foundEmail = existEmails.includes(emailValue);
    if(foundEmail){
        control.setErrors(validationError)
    }else{
        control.setErrors(null);
    }
    return foundEmail? validationError : null;
  };
}
import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(controlName:string,matchingControlName:string){
    return (formgroup:FormGroup)=>{
        const pass=formgroup.controls[controlName];
        const cpass=formgroup.controls[matchingControlName];
        if(pass.value!==cpass.value){
            cpass.setErrors({ConfirmedValidator:true})
        }
        else{
            cpass.setErrors(null);
        }
    }
}

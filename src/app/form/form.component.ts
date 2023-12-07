import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  public loginForm: FormGroup = this.formBuilder.group({
    email:    ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })

  constructor( private formBuilder: FormBuilder ){}

  submitForm(formGroup:FormGroup){
    alert("Loging in ...")
    console.log(formGroup)
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'as-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingFormGroup: FormGroup;
  paymentFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.shippingFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required],
      nameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      contactCtrl: ['', Validators.required],
    });

    this.paymentFormGroup = this._formBuilder.group({
      inputCtrl: ['', Validators.required]
    });

  }

}

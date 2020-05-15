import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup ({
      name: new FormControl(null,{validators: [Validators.required]}),
      email: new FormControl(null,{validators: [Validators.required]}),
      subject: new FormControl(null,{validators: [Validators.required]}),
      message: new FormControl(null,{validators: [Validators.required]}),
    })
  }

  contact() {
    this.submitted = true;
    if(this.form.invalid) return;
    console.log(this.form.value)
    this.http.post<{status:string, msg:string, result:any}>('https://onewater-auth.herokuapp.com/ruc-contact', this.form.value)
    .subscribe(result=> {
      alert(result.result)
    })
  }

}

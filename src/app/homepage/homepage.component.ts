import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
  };
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
      alert(result.msg)
    })
  }
}

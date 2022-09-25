import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'image-upload';

  imageSrc: string = '';
  // Declare form
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', Validators.required),
    fileSource: new FormControl('', Validators.required),
  });

  //  created constructor
  constructor(private http: HttpClient) {}

  get f() {
    return this.myForm.controls;
  }

  submit() {
    console.log(this.myForm.value);
  }
}

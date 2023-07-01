import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor() { }

  openLink(){
    window.open("https://ge.linkedin.com/in/giorgikokaia?trk=people-guest_people_search-card")
  }

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      subscribe: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
  }
}

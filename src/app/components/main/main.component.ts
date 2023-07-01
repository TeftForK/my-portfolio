import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // backgroundImage: any;
  contactForm!: FormGroup;

  constructor(private sanitizer: DomSanitizer) {
    // this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(/assets/img/bckgrnd.jpg)');
  }

  // this.ContactForm = new FormGroup {
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   message: new FormControl('')
  // }

}

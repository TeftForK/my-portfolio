import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutComponent } from './components/main/pages/about/about.component';
import { SkillsComponent } from './components/main/pages/skills/skills.component';
import { ExperienceComponent } from './components/main/pages/experience/experience.component';
import { CertificationsComponent } from './components/main/pages/certifications/certifications.component';
import { ContactComponent } from './components/main/pages/contact/contact.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LayoutComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

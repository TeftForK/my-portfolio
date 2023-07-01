import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/pages/about/about.component';
import { SkillsComponent } from './components/main/pages/skills/skills.component';
import { ExperienceComponent } from './components/main/pages/experience/experience.component';
import { CertificationsComponent } from './components/main/pages/certifications/certifications.component';

const routes: Routes = [
  // {path: '', component: AboutComponent},
  // {path: 'skills', component: SkillsComponent},
  // {path: 'experience', component: ExperienceComponent},
  // {path: 'certifications', component: CertificationsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

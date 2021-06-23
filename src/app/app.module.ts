import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './tabs/experience/experience.component';
import { SkillsComponent } from './tabs/skills/skills.component';
import { ContactComponent } from './tabs/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ]
})
export class AppModule { }

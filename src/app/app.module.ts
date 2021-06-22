import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { GeneralComponent } from './tabs/general/general.component';
import { ExperienceComponent } from './tabs/experience/experience.component';
import { ReviewsComponent } from './tabs/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    ExperienceComponent,
    ReviewsComponent
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
    GeneralComponent,
    ExperienceComponent,
    ReviewsComponent
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from './header/header.component';
import { ExperienceComponent } from './tabs/experience/experience.component';
import { GeneralComponent } from './tabs/general/general.component';
import { ReviewsComponent } from './tabs/reviews/reviews.component';

const TABS: Tab[] = [
  {
    title: 'General',
    component: GeneralComponent
  },
  {
    title: 'Experience',
    component: ExperienceComponent
  },
  {
    title: 'Reviews',
    component: ReviewsComponent
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = TABS;
  selectedTab$: BehaviorSubject<Tab> = new BehaviorSubject(undefined);

  selectedTabChanged(tab: Tab){
    this.selectedTab$.next(tab);
  }
}

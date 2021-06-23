import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tab } from './header/header.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { ExperienceComponent } from './tabs/experience/experience.component';
import { SkillsComponent } from './tabs/skills/skills.component';

const TABS: Tab[] = [
  {
    title: 'Experience',
    component: ExperienceComponent
  },
  {
    title: 'Skills',
    component: SkillsComponent
  },
  {
    title: 'Contact Me',
    component: ContactComponent
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

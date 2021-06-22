import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Tab {
  title: string,
  component: any
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  selectedTab: Tab;

  @Input() tabs: Tab[];
  @Output() selectedTabChanged = new EventEmitter<Tab>();

  ngOnInit() {
    // this.selectTab(this.tabs[0]);
  }

  selectTab(tab: Tab){
    this.selectedTab = tab;
    this.selectedTabChanged.emit(tab);
  }

}

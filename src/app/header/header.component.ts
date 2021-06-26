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
  @Input() selectedTab?: Tab;
  @Input() tabs: Tab[];
  @Output() selectedTabChanged = new EventEmitter<Tab>();

  ngOnInit() {
    if(this.selectedTab) {
      this.selectTab(this.selectedTab);
    }
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
    this.selectedTabChanged.emit(tab);
  }
}

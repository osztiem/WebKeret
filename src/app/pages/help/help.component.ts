import { Component, OnInit } from '@angular/core';
import { SortOverviewExample } from './SortOverviewExample';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  sortOverviewExample: SortOverviewExample;

  title = "Help";

  features: Features[] = [
    {name: 'Add new ticket'},
    {name: 'List tickets'},
    {name: 'Update tickets'},
    {name: 'Delete old ticket'}
  ];

  sortedData: Features[];

  constructor() {
    this.sortedData = this.features.slice();
  }

  ngOnInit(): void {
  }

}

export interface Features {
  name: string;
}

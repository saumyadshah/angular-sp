import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataList: any[] = [];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.data$.subscribe(data => {
      this.dataList = data;
    });
  }

  // Implement your edit logic here
}

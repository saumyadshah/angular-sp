import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  editedData: any[] = [];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    // Initialize the editedData with the data from the shared service
    this.editedData = this.sharedDataService.getData();
  }

  updateData() {
    // Update the data in the shared service with the editedData
    this.sharedDataService.updateData(this.editedData);
  }

  // Implement your edit modal logic here
}

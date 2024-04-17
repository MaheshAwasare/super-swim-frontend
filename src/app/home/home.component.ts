import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  showResults: boolean= false;
   dailyActions = [
    { title: 'Quick Receipt', description: 'View status of batches', action: 'quick-receipt' },
    { title: 'Mark Attendance', description: 'Mark Attendance', action: 'mark-attendance' },
    { title: 'Service Configuration', description: 'Add and maintain new services, pricing', action: 'service-config' }
   
  ];
  
  // Define the list of subscriber-related actions
   subscriberActions = [
    { title: 'Register', description: 'Register new subscriber', action: 'user-register' },
    { title: 'Activate/Deactivate', description: 'Activate or deactivate subscriber', action: 'activate-deactivate' },
    { title: 'Delete Subscriber', description: 'Delete subscriber', action: 'user-delete' }
  ];
  // Define the list of merchandise-related actions
   merchandiseActions = [
    { title: 'Sell', description: 'Sell merchandise', action: 'merchandise-sell' },
    { title: 'Receipts', description: 'View receipts', action: 'merchandise-receipts' },
    { title: 'Reports', description: 'View merchandise reports', action: 'merchandise-sell' }
  ];
  
  // Define the list of general admin actions
   adminActions = [
    { title: 'Batch Management', description: 'Manage swimming batches', action: 'manage-batches' },
    { title: 'Staff Management', description: 'Manage staff members', action: 'manage-staff' },
    { title: 'Reports', description: 'View admin reports', action: 'admin-reports' }
  ];

  searchResults = [ { title: 'Batch Management', description: 'Manage swimming batches', action: 'Manage Batches' }]; // Array to store search results

  search() {
    // Define the list of all actions
    const allActions = [
      ...this.dailyActions,
      ...this.subscriberActions,
      ...this.merchandiseActions,
      ...this.adminActions
    ];
  
    // Filter actions based on search query
    if (this.searchQuery.trim() !== '') {
      this.searchResults = allActions.filter(action =>
        action.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      // Show search results
      this.showResults = true;
    } else {
      // Clear search results and hide if search query is empty
      this.searchResults = [];
      this.showResults = false;
    }
  }
  
 
  
  
  
}

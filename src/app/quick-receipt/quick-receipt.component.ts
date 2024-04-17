import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-receipt',
  templateUrl: './quick-receipt.component.html',
  styleUrls: ['./quick-receipt.component.css']
})
export class QuickReceiptComponent {
  username: string = '';
  selectedService: string = '';
  selectedClothing: string = '';
  batchInTime: string = '';
  batchOutTime: string = '';
  totalCost: number = 0;
  duration: number = 0;
  selectedQuantity: number = 0;
  paymentMode: string ="Cash"
  quantityOptions: number[] = [0, ...Array.from({ length: 20 }, (_, i) => i + 1)];

  // Sample services and clothing options with associated costs
  services = [
    { label: 'Basic Coaching', value: 'Basic Coaching', cost: 100 },
    { label: 'Advance Coaching', value: 'Advanced Coaching', cost: 150 },
    { label: 'Competitive Batch', value: 'Competitive Batch', cost: 200 },
    { label: 'One Day Pass', value: 'One Day Pass', cost: 50 },
    // Add more service options here
  ];

  clothing = [
    { label: 'Ladies Costume 1', value: 'Ladies Costume1', cost: 300 },
    { label: 'Ladies Costume 2', value: 'Ladies Costume2', cost: 350 },
    { label: 'Ladies Costume 3', value: 'Ladies Costume3', cost: 400 },
    { label: 'Gents Costume 1', value: 'Ladies Costume4', cost: 250 },
    // Add more clothing options here
  ];

  constructor( private router: Router) { }

  calculateTotal() {
    // Calculate total cost based on selected service, clothing, and quantity
    const serviceCost = this.services.find(service => service.value === this.selectedService)?.cost || 0;
    const clothingCost = this.clothing.find(cloth => cloth.value === this.selectedClothing)?.cost || 0;
    const totalCost = serviceCost + (clothingCost * this.selectedQuantity);
    
    // Update total cost
    this.totalCost = totalCost;
  }

  openServiceConfig() {
    // Implement logic to open the service configuration component
    console.log('Opening service configuration...');
    
    this.router.navigate(['/service-config']);
  }

  calculateOutTime() {
    // Convert in time to Date object
   
    const inTimeDate = new Date();
    inTimeDate.setHours(parseInt(this.batchInTime.substring(0, 2)));
    inTimeDate.setMinutes(parseInt(this.batchInTime.substring(3, 5)));

    // Add duration in minutes to in time
    const outTimeDate = new Date(inTimeDate.getTime() + this.duration * 60000);

    // Format out time as HH:mm
    const outTime = ('0' + outTimeDate.getHours()).slice(-2) + ':' + ('0' + outTimeDate.getMinutes()).slice(-2);
    this.batchOutTime = outTime
    console.log(this.batchOutTime)
    //return outTime;
  }
  

  printReceipt() {
    // Construct receipt data to be sent to backend API
    const receiptData = {
      username: this.username,
      selectedService: this.selectedService,
      selectedClothing: this.selectedClothing,
      batchInTime: this.batchInTime,
      batchOutTime: this.batchOutTime,
      totalCost: this.totalCost
    };
    
    // Send receipt data to backend API (HTTP POST request)
    // Implement this part as per your backend API requirements
     // Apply CSS styles for printing
     document.body.classList.add('print-mode');

     this.router.navigate(['/receipt'], { queryParams: { userName: this.username, inTime: this.batchInTime,
       outTime: this.batchOutTime, selectedService: this.selectedService,selectedClothing: this.selectedClothing,
       selectedQuantity: this.selectedQuantity, totalCost :this.totalCost , paymentMode: this.paymentMode} });
    
  }
}

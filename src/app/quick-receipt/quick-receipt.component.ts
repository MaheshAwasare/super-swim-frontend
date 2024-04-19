import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-receipt',
  templateUrl: './quick-receipt.component.html',
  styleUrls: ['./quick-receipt.component.css']
})
export class QuickReceiptComponent {
  // User details
  username: string = '';

  // Service and clothing options
  selectedService: string = '';
  selectedClothing: string = '';

  // Batch timings
  batchInTime: string = '';
  batchOutTime: string = '';

  // Cost and duration
  totalCost: number = 0;
  duration: number = 0;

  // Quantity of clothing selected
  selectedQuantity: number = 0;

  // Payment mode
  paymentMode: string ="Cash"

  // Array of quantity options
  quantityOptions: number[] = [0, ...Array.from({ length: 20 }, (_, i) => i + 1)];

  // Receipt number
  receiptNumber : string = "";

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

  // Set to store generated receipt numbers to avoid duplicates
  private generatedNumbers: Set<string> = new Set<string>();

  // Function to generate a unique sequence number for the receipt
  generateSequenceNumber(coachingType: string): string {
    let prefix = '';
    let startNumber = 0;

    // Determine the prefix and starting number based on the coaching type
    switch (coachingType) {
      case 'One Day Pass':
        prefix = 'G1';
        startNumber = 10000;
        break;
      case 'Advanced Coaching':
        prefix = 'A1';
        startNumber = 20000;
        break;
      case 'Competitive Batch':
        prefix = 'C1';
        startNumber = 30000;
        break;
      case 'Basic Coaching':
        prefix = 'B1';
        startNumber = 40000;
        break;
      default:
        throw new Error('Invalid coaching type');
    }

    let sequenceNumber: string;

    // Generate a random 4-digit number and combine it with the prefix and starting number
    do {
      const randomNumber = Math.floor(Math.random() * 10000) + 1; // Generate a 4-digit random number
      sequenceNumber = `${prefix}-${(startNumber + randomNumber).toString().padStart(6, '0')}`;
    } while (this.generatedNumbers.has(sequenceNumber)); // Check if the generated number is unique

    // Add the generated number to the set to avoid duplicates
    this.generatedNumbers.add(sequenceNumber);

    return sequenceNumber;
  }

  constructor( private router: Router) { }

  // Function to calculate the total cost based on selected options
  calculateTotal() {
    // Get the cost of the selected service and clothing
    const serviceCost = this.services.find(service => service.value === this.selectedService)?.cost || 0;
    const clothingCost = this.clothing.find(cloth => cloth.value === this.selectedClothing)?.cost || 0;

    // Calculate the total cost based on the selected quantity
    const totalCost = serviceCost + (clothingCost * this.selectedQuantity);

    // Update the total cost
    this.totalCost = totalCost;
  }

  // Function to open the service configuration component
  openServiceConfig() {
    // Implement logic to open the service configuration component
    console.log('Opening service configuration...');
    
    this.router.navigate(['/service-config']);
  }

  // Function to calculate the batch out time based on the batch in time and duration
  calculateOutTime() {
    // Convert the batch in time to a Date object
    const inTimeDate = new Date();
    inTimeDate.setHours(parseInt(this.batchInTime.substring(0, 2)));
    inTimeDate.setMinutes(parseInt(this.batchInTime.substring(3, 5)));

    // Add the duration in minutes to the in time
    const outTimeDate = new Date(inTimeDate.getTime() + this.duration * 60000);

    // Format the out time as HH:mm
    const outTime = ('0' + outTimeDate.getHours()).slice(-2) + ':' + ('0' + outTimeDate.getMinutes()).slice(-2);

    // Update the batch out time
    this.batchOutTime = outTime;
  }

  // Function to print the receipt
  printReceipt() {
    // Construct the receipt data to be sent to the backend API
    this.receiptNumber = this.generateSequenceNumber(this.selectedService);
    
    const receiptData = {
      username: this.username,
      selectedService: this.selectedService,
      selectedClothing: this.selectedClothing,
      batchInTime: this.batchInTime,
      batchOutTime: this.batchOutTime,
      totalCost: this.totalCost,
      receiptNumber: this.receiptNumber
    };
    
    // Send the receipt data to the backend API (HTTP POST request)
    // Implement this part as per your backend API requirements
     // Apply CSS styles for printing
     document.body.classList.add('print-mode');

     this.router.navigate(['/receipt'], { queryParams: { userName: this.username, inTime: this.batchInTime,
       outTime: this.batchOutTime, selectedService: this.selectedService,selectedClothing: this.selectedClothing,
       selectedQuantity: this.selectedQuantity, totalCost :this.totalCost , paymentMode: this.paymentMode,receiptNumber: this.receiptNumber} });
    
  }
}

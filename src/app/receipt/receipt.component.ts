import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  userName: string = '';
  inTime: string = '';
  outTime: string = '';
  printedAt: string = ''; 
  selectedService= "";
  selectedClothing = ""
  selectedQuantity :number = 0
  totalCost=""
  paymentMode=""
  receiptNumber:string = "";
  selectedPeople:string = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve attendance data from route params
    this.route.queryParams.subscribe(params => {
      this.userName = params['userName'];
      this.inTime = params['inTime'];
      this.outTime = params['outTime'];
      this.selectedService = params['selectedService']
      this.selectedClothing = params['selectedClothing']
      this.selectedQuantity = params['selectedQuantity']
      this.totalCost = params['totalCost']
      this.paymentMode = params['paymentMode']
      const currentDate = new Date();
      this.printedAt = currentDate.toLocaleString();
      this.receiptNumber = params['receiptNumber']
      this.selectedPeople = params['selectedPeople']
    });
  }

  printReceipt() {
    // Trigger printing
    window.print();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.css']
})
export class MarkAttendanceComponent {
  userName: string = '';
  inTime: string = '';
  duration: number = 30; // Default duration is 30 mins

  constructor(private router: Router) {}

  submitAttendance() {
    // Calculate out time based on in time and duration
    const outTime = this.calculateOutTime(this.inTime, this.duration);

    // Here you can implement logic to submit attendance data to backend

    // Navigate to the receipt screen
    this.router.navigate(['/receipt'], { queryParams: { userName: this.userName, inTime: this.inTime, outTime: outTime } });
  }

  calculateOutTime(inTime: string, duration: number): string {
    // Convert in time to Date object
    const inTimeDate = new Date();
    inTimeDate.setHours(parseInt(inTime.substring(0, 2)));
    inTimeDate.setMinutes(parseInt(inTime.substring(3, 5)));

    // Add duration in minutes to in time
    const outTimeDate = new Date(inTimeDate.getTime() + duration * 60000);

    // Format out time as HH:mm
    const outTime = ('0' + outTimeDate.getHours()).slice(-2) + ':' + ('0' + outTimeDate.getMinutes()).slice(-2);
    
    return outTime;
  }
}

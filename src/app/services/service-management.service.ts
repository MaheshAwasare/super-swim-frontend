import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceManagementService {
  private services: { name: string, cost: number }[] = [];

  constructor() {
    // Initialize services data
    this.fetchServicesFromBackend();
  }

  getServices(): { name: string, cost: number }[] {
    return this.services;
  }

  private fetchServicesFromBackend() {
    // Replace this with actual HTTP call to fetch services from backend
    // Example:
    // this.http.get<{ name: string, cost: number }[]>('backend/service-endpoint').subscribe(
    //   (services) => {
    //     this.services = services;
    //   },
    //   (error) => {
    //     console.error('Failed to fetch services:', error);
    //   }
    // );
    // For now, let's assume some dummy data
    this.services = [
      { name: 'Basic Coaching', cost: 50 },
      { name: 'Advance Coaching', cost: 100 },
      { name: 'Competitive Batch', cost: 150 }
    ];
  }
}

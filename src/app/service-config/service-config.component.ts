import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.css']
})
export class ServiceConfigComponent {
  services: { name: string, cost: number }[] = [];
  newServiceName = '';
  newServiceCost: number | null = null;

  @Output() servicesChange = new EventEmitter<{ name: string, cost: number }[]>();

  addService() {
    if (this.newServiceName && this.newServiceCost !== null) {
      this.services.push({ name: this.newServiceName, cost: this.newServiceCost });
      this.newServiceName = '';
      this.newServiceCost = null;
      this.emitServices();
    }
  }

  removeService(index: number) {
    this.services.splice(index, 1);
    this.emitServices();
  }

  private emitServices() {
    this.servicesChange.emit(this.services);
  }
}

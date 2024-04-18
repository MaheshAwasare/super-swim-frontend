import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ServiceConfigComponent } from './service-config/service-config.component';
import { QuickReceiptComponent } from './quick-receipt/quick-receipt.component';

const routes: Routes = [
  { path: '', redirectTo: '/quick-receipt', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'logout', component: LogoutComponent }, // Logout route
  { path: 'user-register', component: RegisterUserComponent },
  { path: 'mark-attendance', component: MarkAttendanceComponent },
  { path: 'service-config', component: ServiceConfigComponent },
  { path: 'quick-receipt', component: QuickReceiptComponent },
  { path: 'receipt', component: ReceiptComponent } // Register new user route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

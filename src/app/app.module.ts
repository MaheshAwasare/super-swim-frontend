import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { QuickReceiptComponent } from './quick-receipt/quick-receipt.component';
import { ServiceConfigComponent } from './service-config/service-config.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LogoutComponent,
    FooterComponent,
    RegisterUserComponent,
    MarkAttendanceComponent,
    ReceiptComponent,
    QuickReceiptComponent,
    ServiceConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

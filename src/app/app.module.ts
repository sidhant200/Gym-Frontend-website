import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { TrainersComponent } from './trainers/trainers.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateMemberComponent } from './member/create-member/create-member.component';
import { UpdateMemberComponent } from './member/update-member/update-member.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassesComponent,
    TrainersComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    MemberComponent,
    TrainerComponent,
    EmployeeComponent,
    CreateMemberComponent,
    UpdateMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

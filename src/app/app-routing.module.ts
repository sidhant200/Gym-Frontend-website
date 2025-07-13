import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateMemberComponent } from './member/create-member/create-member.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
      { path: 'classes', component: ClassesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'trainers', component: TrainersComponent },
      { path: 'register', component: RegisterComponent },
       { path: 'about', component: AboutComponent },
       {path: 'contact' , component:ContactComponent},
     {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'member', component: MemberComponent},
      { path: 'employee', component: EmployeeComponent },
      {path: 'trainer' , component: TrainerComponent},
      { path: '', redirectTo: 'member', pathMatch: 'full' }
    ]
  },
   {path: 'admin/member/create-member',  // flat route, not nested
    component: CreateMemberComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

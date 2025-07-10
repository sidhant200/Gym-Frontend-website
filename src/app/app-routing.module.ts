import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
      { path: 'classes', component: ClassesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'trainers', component: TrainersComponent },
      { path: 'register', component: RegisterComponent },
       { path: 'about', component: AboutComponent },
       {path: 'contact' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

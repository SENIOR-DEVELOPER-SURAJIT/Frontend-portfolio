import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BlogComponent } from './blog/blog.component';
import { SingleComponent } from './single/single.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'log-in', component:LogInComponent},
  {path:'sign', component:SignInComponent},
  {path:'top', component:HeaderComponent},
  {path:'about', component:AboutComponent},
  {path:'courses', component:CoursesComponent},
  {path:'teachers', component:TeachersComponent},
  {path:'blog', component:BlogComponent},
  {path:'single', component:SingleComponent},
  {path:'contact', component:ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

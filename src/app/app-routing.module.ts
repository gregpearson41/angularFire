import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent} from './admin/login/login.component';
import { ProjectComponent } from './admin/project/project.component';


const routes: Routes = [
  {
    path: 'admin', component: ProjectComponent,
    children: [ 
    {path: 'login', component: LoginComponent}
    ]
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

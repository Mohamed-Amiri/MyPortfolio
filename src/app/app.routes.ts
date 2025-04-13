import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ProjectComponent} from './project/project.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';

export const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"project", component: ProjectComponent},
  {path:"contact", component: ContactComponent},

];

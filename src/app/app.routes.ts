import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutPage } from './+pages/about-page/about-page';
import { InterestedPage } from './+pages/interested-page/interested-page';
import { CotactPage } from './+pages/cotact-page/cotact-page';
import { ErrorPage } from './+pages/error-page/error-page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'interested', component: InterestedPage },
  { path: 'contact', component: CotactPage },
  {path:'error',component:ErrorPage},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/error'},
];

import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
    
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
     
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
    
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

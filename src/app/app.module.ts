import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'login/', component: LoginComponent },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }
    ])
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

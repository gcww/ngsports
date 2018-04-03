import { PictureComponent } from './picture/picture.component';
import { HealthyModule } from './healthy/healthy.module';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.router';
import { RegisterComponent } from './register/register.component';
import { AuthorIntroduceComponent } from './author-introduce/author-introduce.component';
import { NameService } from './service/home.service';
import { LoginCanLoadGuard } from './service/login-can-load-guard.service';
import { NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeaderLoginService } from './service/header-login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthorIntroduceComponent,
  ],
  imports: [
    HealthyModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    NameService,
    LoginCanLoadGuard,
    HeaderLoginService,
   
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: '80px' } },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  
 
  bootstrap: [AppComponent]
})
export class AppModule { }
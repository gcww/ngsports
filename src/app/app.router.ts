import { PlanComponent } from './plan/plan.component';
import { AuthorIntroduceComponent } from './author-introduce/author-introduce.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginCanLoadGuard } from './service/login-can-load-guard.service';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'register',
        loadChildren: 'app/register/register.module#RegisterModule',
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
    },
    {
        path: 'author',
        component: AuthorIntroduceComponent
    },
    {
        path: 'healthy',
        loadChildren: 'app/healthy/healthy.module#HealthyModule',
    },
    {
        path: 'plan',
        loadChildren: 'app/plan/plan.module#PlanModule',
        canLoad: [LoginCanLoadGuard],
        canActivate: [LoginCanLoadGuard]
    },    
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },


];
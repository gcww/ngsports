import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

export const RegisterRoutes: Routes = [
    {
      path: '',
      component: RegisterComponent,
      children: [
        {
          path: '',
          children: [
            { path: '', component: RegisterComponent },
          ]
        }
      ]
    }
  ];
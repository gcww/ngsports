import { HealthyListComponent } from './healthy-list/healthy-list.component';
import { Routes } from '@angular/router';
import { HealthyComponent } from './healthy.component';
export const HealthyRoutes: Routes = [
    {
      path: 'introduce',
      component: HealthyComponent,
      children: [
        {
          path: '',
          children: [
            { path: '', component: HealthyComponent },
          ]
        }
      ]
    },
    {
      path: "healthyList",
      component:HealthyListComponent
    }
  ];
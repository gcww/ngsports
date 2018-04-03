import { Routes } from '@angular/router';
import { PlanComponent } from './plan.component';
export const PlanRoutes: Routes = [
    {
      path: '',
      component: PlanComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'crises', component: PlanComponent },
            { path: '', component: PlanComponent },
          ]
        }
      ]
    }
  ];
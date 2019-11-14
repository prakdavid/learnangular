import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


export const childRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            {
                path: 'index',
                loadChildren: () => import('./index/index.module').then(module => module.IndexModule),
            },
        ]
    }

];

export const routing = RouterModule.forChild(childRoutes);

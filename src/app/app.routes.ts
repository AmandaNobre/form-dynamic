import { Routes } from '@angular/router';
import { InstallationComponent } from './pages/installation/installation.component';

export const routes: Routes = [
    { path: "", redirectTo: "installation", pathMatch: 'full' },
    { path: "installation", component: InstallationComponent }
];

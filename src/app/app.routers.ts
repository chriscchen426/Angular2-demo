import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

export const router: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'directory', component: DirectoryComponent},
  { path: 'home', component: HomeComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);

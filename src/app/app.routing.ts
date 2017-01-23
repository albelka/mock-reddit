import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ThreadComponent } from './thread/thread.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'thread/:id',
    component: ThreadComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

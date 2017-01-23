import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadNewComponent } from './thread-new/thread-new.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'thread/:id',
    component: ThreadComponent
  },
  {
    path: 'thread-new',
    component: ThreadNewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

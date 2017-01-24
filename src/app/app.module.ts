import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ThreadComponent } from './thread/thread.component';
import { routing } from './app.routing';
import { CategoryPipe } from './category.pipe';
import { ThreadNewComponent } from './thread-new/thread-new.component';
import { ThreadEditComponent } from './thread-edit/thread-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategorieComponent,
    ThreadComponent,
    CategoryPipe,
    ThreadNewComponent,
    ThreadEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

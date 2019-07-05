import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from "src/app/books/add-book/add-book.component";
import { AddReaderComponent } from "src/app/readers/add-reader/add-reader.component";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { EditBookComponent } from "src/app/books/edit-book/edit-book.component";
import { EditReaderComponent } from "src/app/readers/edit-reader/edit-reader.component";
import { BooksResolverService } from './core/books-resolver.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, resolve: {resolvedBooks: BooksResolverService} },
  { path: 'addbook', component: AddBookComponent },
  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

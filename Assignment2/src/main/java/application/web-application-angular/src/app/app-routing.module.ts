import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountFormComponent} from "./account-form/account-form.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookFormComponent} from "./book-form/book-form.component";
import {BorrowedListComponent} from "./borrowed-list/borrowed-list.component";

const routes: Routes = [
  {path: 'accounts', component: AccountListComponent},
  {path: 'addAccount', component: AccountFormComponent},
  {path: 'books', component: BookListComponent},
  {path: 'addBook', component: BookFormComponent},
  {path: 'borrowedBooks', component: BorrowedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

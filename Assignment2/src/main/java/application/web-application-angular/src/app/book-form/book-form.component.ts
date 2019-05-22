import { Component, OnInit } from '@angular/core';
import {Book} from "../../book/book";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountServiceService} from "../../account/account-service.service";
import {BookService} from "../../book/book.service";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.book = new Book();
  }


  onSubmit(){
    this.bookService.save(this.book).subscribe(result => this.goToBookList());
  }

  goToBookList(){
    this.router.navigate(['/books']);
  }

}

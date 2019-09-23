import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  totalBookCount: number;
  allBooks: Book[];
  branch: string = 'Midtown';
  branchLibrarian = 'Bookish Learner';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.totalBookCount = this.allBooks.length;
  }

  onIncrease(amount: number) {
    this.totalBookCount += amount;
  }

  onDecrease(amount: number) {
    this.totalBookCount -= amount;
  }
}

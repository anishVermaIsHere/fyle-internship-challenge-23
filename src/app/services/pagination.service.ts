import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  limit:BehaviorSubject<number>=new BehaviorSubject<number>(10);
  currentPage:BehaviorSubject<number>=new BehaviorSubject<number>(1);

  pageUpdate(page:number){
    this.currentPage.next(page);
  }
  limitUpdate(limit:number){
    this.limit.next(limit);
  }
  constructor() { }

}

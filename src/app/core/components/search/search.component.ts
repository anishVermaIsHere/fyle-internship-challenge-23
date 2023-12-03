import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationService } from 'src/app/services/pagination.service';
import { User } from 'src/app/shared/models/GithubUser';

@Component({
  selector: 'app-search',
  template: `
  <div class="p-2">
    <div class="w-full lg:w-1/2 mx-auto">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search by github usernames..." required #search>

              <button 
              (click)="searchUser()"
              aria-label="search button"
               class="text-white absolute end-2.5 bottom-1 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Search
              </button>
          </div>
      
    </div>
  </div>
  `,
  styles: [
  ]
})

export class SearchComponent {
  @ViewChild('search') search!:ElementRef;
  user!:User;
  isLoading:boolean= false;
  error!:string;
  constructor(private paginService:PaginationService,private router:Router){}

  searchUser(){
    if(this.search.nativeElement.value){
      let username=this.search.nativeElement.value.toLowerCase().trim();
      username=username.replace(/ /g,'')
      this.router.navigate(['/user'],{ queryParams: { q: username }});
      this.paginService.pageUpdate(1);
    }
    
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-repocard-skeleton',
  template: `
  <div class="p-2.5 border border-gray-200 rounded animate-pulse">
    <div class="flex flex-col gap-2">
        <p class="rounded bg-gray-200 h-5 w-1/3 animate-pulse"></p>
        <p class="rounded bg-gray-200 h-3 w-3/4 animate-pulse"></p>
        <div class="flex justify-start flex-wrap py-2">
            <span class="px-2 py-1 my-1 mx-1.5 rounded-full font-semibold bg-gray-200 h-5 w-24 animate-pulse"></span>
            <span class="px-2 py-1 my-1 mx-1.5 rounded-full font-semibold bg-gray-200 h-5 w-24 animate-pulse"></span>
            <span class="px-2 py-1 my-1 mx-1.5 rounded-full font-semibold bg-gray-200 h-5 w-24 animate-pulse"></span>
            <span class="px-2 py-1 my-1 mx-1.5 rounded-full font-semibold bg-gray-200 h-5 w-24 animate-pulse"></span>
        </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class RepocardSkeletonComponent {

}

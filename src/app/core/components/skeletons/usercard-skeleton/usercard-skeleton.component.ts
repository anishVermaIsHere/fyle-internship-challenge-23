import { Component } from '@angular/core';

@Component({
  selector: 'app-usercard-skeleton',
  template: `
  <section class="grid grid-cols-3 md:grid-cols-4 items-center gap-4">
    <div class="col-span-1 md:col-span-1 flex items-center justify-center p-4">
        <div class="rounded-full bg-gray-200 w-[80px] h-[80px] md:h-[200px] md:w-[200px] animate-pulse"></div>
    </div>
    <div class="col-span-3 md:col-span-3 py-1 md:py-4">
        <div class="flex flex-col md:justify-between">
            <div class="py-1 px-2 mb-3">
                <h4 class="rounded h-5 bg-gray-200 w-[300px] animate-pulse"></h4>
            </div>
            <div class="px-2 mb-3">
                <p class="rounded h-5 bg-gray-200 w-[200px] animate-pulse"></p>
            </div>
            <div class="flex px-2 mb-3 hidden md:block">
              <p class="rounded bg-gray-200 h-3 w-[200px] animate-pulse"></p>
            </div>
        </div>
    </div>

    <div class="col-span-4 flex flex-col md:flex-row justify-between gap-3">
          <div class="mx-4 rounded bg-gray-200 h-5 animate-pulse w-full md:w-1/4"></div>
          <div class="mx-4 rounded bg-gray-200 h-5 animate-pulse w-full md:w-1/4"></div>
    </div>

</section>
  `,
  styles: [
  ]
})
export class UsercardSkeletonComponent {

}

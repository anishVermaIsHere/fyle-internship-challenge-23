import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="grid place-items-center min-h-screen">
    <div>
      <h4 class="text-3xl text-gray-500 text-center mb-3">
        Search users in the above searchbox
      </h4>
      <p class="text-lg text-center text-rose-400">For example, johnpapa</p>
    </div>
  </section>
  `,
  styles: [
  ]
})
export class HomeComponent {

}

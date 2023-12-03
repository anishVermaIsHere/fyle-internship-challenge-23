import { NgModule } from '@angular/core';
import { RouterModule,PreloadAllModules,Routes} from '@angular/router';
import { GithubComponent } from './core/components/github/github.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    component:GithubComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GithubComponent } from './core/components/github/github.component';
import { RepoCardComponent } from './core/components/github/repo-card/repo-card.component';
import { PaginationComponent } from './core/components/pagination/pagination.component';
import { RepocardSkeletonComponent } from './core/components/skeletons/repocard-skeleton/repocard-skeleton.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './core/components/search/search.component';
import { UsercardSkeletonComponent } from './core/components/skeletons/usercard-skeleton/usercard-skeleton.component';
import { HomeComponent } from './core/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    RepoCardComponent,
    PaginationComponent,
    RepocardSkeletonComponent,
    SearchComponent,
    UsercardSkeletonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

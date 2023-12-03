import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Repo } from 'src/app/shared/models/GithubRepo';
import { User } from 'src/app/shared/models/GithubUser';
import { PaginationService } from 'src/app/services/pagination.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styles: [
  ]
})


export class GithubComponent implements OnInit,OnDestroy {
  user!:User;
  repos:Repo[]=[];
  repoCount:number=0;
  skeletons:any[]=[...new Array(16)];
  username:string='johnpapa';
  currentPage:number=2;
  limit:number=6;
  searchKeyword!:string;
  isLoading = false;
  error={} as {message:string;statusCode:string;};
  isFollow:boolean=false;
  currentPageSubscription!:Subscription;
  limitSubscription!:Subscription;
  userSubscription!:Subscription;


  constructor(private apiService:ApiService,private paginService:PaginationService,private route:ActivatedRoute){}

  ngOnInit(): void {
    //subscription variables
    this.currentPageSubscription=this.paginService.currentPage.subscribe(page=>this.currentPage=page);
    this.limitSubscription=this.paginService.limit.subscribe(limit=>this.limit=limit);

    this.getUser();    
  }

  getUser():void{
    this.isLoading = true;
    this.route.queryParams.subscribe((params:Params)=>{
      this.searchKeyword=params['q'];
      this.username=params['q'];
      this.userSubscription=this.apiService.getUser(params['q']).subscribe((data:User)=>{
        this.isLoading=false;
        this.user=data;
        this.repoCount=data.public_repos;
        this.error.message='';
        console.log('user github data',this.user);
        this.getRepos();
      },(error)=>{
        this.error.message=error.error.message;
        this.error.statusCode=error.status;
        this.isLoading=false;
        console.log('api error',error)
      });
    })

  }

  getRepos():void{
    this.isLoading=true;
    this.apiService.getRepos(this.searchKeyword,this.limit,this.currentPage).subscribe((data:Repo[]|any)=>{
      this.apiService.repos.next(data);
      this.isLoading=false;
    });

    this.apiService.repos.subscribe((data:Repo[])=>{
      this.repos=data;
    });
  }

  selectPageLimit(e:any):void{
   this.limit=parseInt(e.target.value);
   this.pageLimitUpdate(this.limit);
   this.paginService.pageUpdate(1);
   this.getRepos();
  }

  pageLimitUpdate(limit:number):void{
    this.paginService.limitUpdate(limit);
  }

  followToggle():void{
    this.isFollow=!this.isFollow;
  }

  ngOnDestroy(): void {
    this.currentPageSubscription.unsubscribe();
    this.limitSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}

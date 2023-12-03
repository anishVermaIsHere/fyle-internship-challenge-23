import { Component,EventEmitter,Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import {  Router,ActivatedRoute, Params } from '@angular/router';
import { Subscription} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { PaginationService } from 'src/app/services/pagination.service';
import { Repo } from 'src/app/shared/models/GithubRepo';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnDestroy{
  @Output() getRepos:EventEmitter<()=>void>=new EventEmitter();
  @Input() repoCount!:number;
  repos:Repo[]=[];
  limit!:number;
  pages:number[]=[];
  currentPage!:number;
  totalPages!:number;
  username!:string;
  pageNum!:number;
  currentPageSubscription!:Subscription;
  limitSubscription!:Subscription;

  constructor(private apiService:ApiService,private paginService:PaginationService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.initVariables();
    this.getUserName();
    console.warn('pages array',this.pages,'total page', this.totalPages, 'and current page',this.currentPage);
  }

  initVariables(){
    //subscription variables
    this.currentPageSubscription=this.paginService.currentPage.subscribe(page=>this.currentPage=page); 
    this.limitSubscription=this.paginService.limit.subscribe(limit=>this.limit=limit);
    // other variables
    this.pageNum=this.currentPage;
    this.totalPages=Math.ceil(this.repoCount/this.limit);
    const pages=[...Array(this.totalPages).keys()].map(index=>index+1);
    this.pages=pages.slice(this.pageNum-1,this.pageNum+3);
  }

  goToPage(page:number):void{
    this.paginService.pageUpdate(page);
    this.getRepos.emit();
    this.scrollToTop();
  }

  onChangeGoToPage(event:any):void{
    if(event.target.value>this.totalPages||event.target.value<1){
      return ;
    } else this.pageNum=event.target.value;
  }

  scrollToTop():void{
    window.scrollTo({top: 0,left: 0,behavior: "smooth"});
  }

  getUserName():void{
    this.route.queryParams.subscribe((params:Params)=>this.username=params['q']);
  }

  ngOnDestroy(): void {
    this.currentPageSubscription.unsubscribe();
    this.limitSubscription.unsubscribe();
  }
}

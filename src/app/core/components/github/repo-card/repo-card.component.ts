import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styles: [
  ]
})
export class RepoCardComponent implements OnInit {
  @Input() repo!:any;
  @Input() username!:string;
  constructor(){}
  ngOnInit(): void {
    
  }
}

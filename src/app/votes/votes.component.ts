import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('like') like = 0;
  // tslint:disable-next-line:no-input-rename
  @Input('disLike') disLike = 0;

  // tslint:disable-next-line:no-output-rename
  @Output('changeVoteLike') changeVoteLike = new EventEmitter();

  // tslint:disable-next-line:no-output-rename
  @Output('changeVoteDislike') changeVoteDislike = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  addLike() {
    this.like ++;
    this.changeVoteLike.emit( this.like);
  }
  addDisLike() {
    this.disLike ++;
    this.changeVoteDislike.emit( this.disLike);
  }
}

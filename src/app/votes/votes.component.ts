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
  @Output('changeV') changeV  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  addLike() {
    this.like ++;
    this.changeV.emit({status: 1, value: this.like});
  }
  addDisLike() {
    this.disLike ++;
    this.changeV.emit({status: 0, value: this.disLike});
  }
}

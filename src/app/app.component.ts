import { Component } from '@angular/core';
import { VotesComponent } from './votes/votes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jv';

  tooglePower(course) {
    course.active = !course.active;
  }
  favorit(course) {
    course.stared = !course.stared;
  }

  UpdateLike(course, child) {
    course.vote.like = child;
  }

  UpdateDislike(course, child) {
  course.vote.disLike = child;
  }
}

import { Component } from '@angular/core';
import { VotesComponent } from './votes/votes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jv';
  onUpdate = false;
  current = {
    id: 0,
    title: '',
    active: false,
    stared: false,
    description: '',
    vote : {
      likes: 0,
      disLikes: 0
    }
  };
  courses = [
    {description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  impedit facere voluptate!',
    id: 1, title: 'Laravel', active: true, stared : false, vote: { likes : 0, disLikes: 0 } },
    {description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  impedit facere voluptate!',
     id: 2, title: 'ANGULAR', active: true, stared : false, vote: { likes : 50, disLikes: 0 } },
    {description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  impedit facere voluptate!',
    id: 3, title: 'JAVAEE',  active: false, stared : false, vote: { likes : 0, disLikes: 0 } },
    {description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  impedit facere voluptate!',
    id: 4, title: 'SYMFONY', active: true, stared : false, vote: { likes : 0, disLikes: 0 } }
  ];

  addCourse() {
    this.courses.unshift(this.current);
    this.current = {
      id: 0,
      title: '',
      active: false,
      stared: false,
      description: '',
      vote : {
        likes: 0,
        disLikes: 0
      }
    };
  }
  deleteCourse(course) {
    if (confirm(`you wanna delete ${course.title}?`)) {
      const index = this.courses.indexOf(course);
      this.courses.splice(index, 1);
    }
  }
  editCourse(course) {
    this.onUpdate = true;
    this.current = course;
  }
  updateCourse() {
    this.onUpdate = false;

  }
  tooglePower(course) {
    course.active = !course.active;
  }
  favorit(course) {
    course.stared = !course.stared;
  }

  changeV(course, child) {
    if (child.status) {
      course.vote.likes = child.value;
    } else {
      course.vote.disLikes = child.value;
    }
  }
}

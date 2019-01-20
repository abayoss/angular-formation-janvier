import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jv';
  onUpdate = false;
  current = {
    id : 0,
    title : '',
    active : false
  };
  courses = [
    {id: 1, title: 'Laravel', active: true },
    {id: 2, title: 'ANGULAR', active: true },
    {id: 3, title: 'JAVAEE', active: false },
    {id: 4, title: 'SYMFONY', active: true }
  ];

  addCourse() {
    this.courses.unshift(this.current);
    this.current = {
      id : 0,
      title : '',
      active : false
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
}

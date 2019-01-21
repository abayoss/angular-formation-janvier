import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { VotesComponent } from './votes/votes.component';
import { PostsComponent } from './posts/posts.component';
import { ExtraitPipe } from './extrait.pipe';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostsComponent },
  { path: 'courses', component: CoursesComponent }
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    Content1Component,
    Content2Component,
    VotesComponent,
    PostsComponent,
    ExtraitPipe,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { PostsComponent } from './posts/posts.component';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostResolver } from './services/post.resolver';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/calendar',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarFormComponent
  },
  {
    path: 'post',
    component: PostsComponent,
    resolve: { Posts: PostResolver }
  },
  {
    path: '**',
    redirectTo: '/calendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule { }

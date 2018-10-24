import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxDatePickerModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import { CalendarFormComponent } from './calendar-form/calendar-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpService } from './services/http.service';
import { PostResolver } from './services/post.resolver';


@NgModule({
  declarations: [
    AppComponent,
    CalendarFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IgxDatePickerModule,
    AppRouterModule
  ],
  providers: [HttpService, PostResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
